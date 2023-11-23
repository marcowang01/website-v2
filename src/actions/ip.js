'use server'
import { sql } from '@vercel/postgres';

const createTable = async () => {
  const result = await sql`
    CREATE TABLE IF NOT EXISTS IPs (
      id SERIAL PRIMARY KEY,
      ip VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      location VARCHAR(255),
      lat VARCHAR(255),
      lon VARCHAR(255)
    );
  `;
  return result;
}

export async function logIP(ip) {
  // Ensure that ip is provided
  if (!ip) {
    throw new Error('IP address is required');
  }

  await createTable(); // Await the creation of the table

  // fetch location from ipinfo.io
  const url = `https://ipinfo.io/${ip}/json?token=${process.env.IPINFO_TOKEN}`;
  // console.log(url)
  const response = await fetch(url);
  if (!response.ok) {
    console.log('IP not logged. IPInfo.io API error');
    return;
  }

  const data = await response.json();
  if (!data || !data.loc || !data.city || !data.region || !data.country) {
    // Insert only ip if other data is not available
    const result = await sql`
      INSERT INTO IPs (ip)
      VALUES (${ip})
      RETURNING *;
    `;
    console.log('IP logged without location data' + ip);
    return result;
  }

  const location = data.city + ", " + data.region + ", " + data.country;
  const lat = data.loc.split(",")[0];
  const lon = data.loc.split(",")[1];

  // Corrected the INSERT statement to match the table structure
  const result = await sql`
    INSERT INTO IPs (ip, location, lat, lon)
    VALUES (${ip}, ${location}, ${lat}, ${lon})
    RETURNING *;
  `;
  console.log('IP logged with location data' + ip);

  if (!result) {
    console.log('IP not logged. SQL error');
    return;
  }

  return result;
}