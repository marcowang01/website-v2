import SpotifyWebApi from "spotify-web-api-node";
import { NextResponse } from 'next/server';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

// fetch access token and refresh token from auth code
const getAccessToken = async () => {
  const code = process.env.SPOTIY_ACCESS_CODE;
  const { body: tokenBody } = await spotifyApi.authorizationCodeGrant(code);
  if (!tokenBody.access_token) {
    throw new Error('No access token found in the response');
  }
  spotifyApi.setAccessToken(tokenBody.access_token);
  spotifyApi.setRefreshToken(tokenBody.refresh_token);

  console.log('The token expires in ' + tokenBody.expires_in);
  console.log('The access token is ' + tokenBody.access_token);
  console.log('The refresh token is ' + tokenBody.refresh_token);
}

const getAuthCodeFromManualAuth = async () => {
  // get link for manual authorization
  const scopes = ['user-read-currently-playing']
  const state = process.env.SPOTIFY_STATE

  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
  console.log(authorizeURL);
}

export async function GET() {
  try {

    spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);
    spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN);

    // refresh token
    const refreshTokenResponse = await spotifyApi.refreshAccessToken();
    console.log('The access token has been refreshed!');
    spotifyApi.setAccessToken(refreshTokenResponse.body.access_token);

    // Fetch the current playing track.
    const { body: trackBody } = await spotifyApi.getMyCurrentPlayingTrack();
    if (!trackBody.item) {
      console.log(trackBody);
      return new NextResponse('No Track Found', { status: 500 });
    } else {
      console.log(`listening to ${trackBody.item.name}`);
    }

    return new NextResponse(JSON.stringify({ track: trackBody.item.name }), { status: 200 });
  } catch (error) {
    console.error('Error in GET:', error.message);
    return new NextResponse(error.message, { status: 500 });
  }
}
