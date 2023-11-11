import SpotifyWebApi from "spotify-web-api-node"
import { NextResponse } from 'next/server'

export async function GET() {
  var spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  })

  // Retrieve an access token.
  const tokenData = await spotifyApi.clientCredentialsGrant()
  if (tokenData && tokenData.body && tokenData.body.access_token !== undefined) {
    spotifyApi.setAccessToken(tokenData.body.access_token)
  } else {
    return new NextResponse('No Token Found', { status: 500 })
  }

  const data = await spotifyApi.getMyCurrentPlayingTrack()
  if (data && data.body && data.body.item !== undefined) {
    const track = data.body.item.name
    return new NextResponse(JSON.stringify(track), {status: 200})

  }

  return new NextResponse('No Track Found', { status: 500 })

}