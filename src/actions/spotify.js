'use server';
import SpotifyWebApi from "spotify-web-api-node";

// // fetch access token and refresh token from auth code
// const getAccessToken = async () => {
//   const code = process.env.SPOTIY_ACCESS_CODE;
//   const { body: tokenBody } = await spotifyApi.authorizationCodeGrant(code);
//   if (!tokenBody.access_token) {
//     throw new Error('No access token found in the response');
//   }
//   spotifyApi.setAccessToken(tokenBody.access_token);
//   spotifyApi.setRefreshToken(tokenBody.refresh_token);

//   console.log('The token expires in ' + tokenBody.expires_in);
//   console.log('The access token is ' + tokenBody.access_token);
//   console.log('The refresh token is ' + tokenBody.refresh_token);
// }

// const getAuthCodeFromManualAuth = async () => {
//   // get link for manual authorization
//   const scopes = ['user-read-currently-playing']
//   const state = process.env.SPOTIFY_STATE

//   const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
//   console.log(authorizeURL);
// }
 
export async function GetSongInfo() {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  });

  try {
    spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);
    spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN);
  
    // refresh token
    const refreshTokenResponse = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(refreshTokenResponse.body.access_token);
  
    // Fetch the current playing track.
    const { body: trackBody } = await spotifyApi.getMyCurrentPlayingTrack();
    if (!trackBody.item || trackBody.is_playing === false) {
      console.log(trackBody);
      console.log('No track found or not playing');
      return ''
    } else {
      // console.log(trackBody);
      console.log(`listening to ${trackBody.item.name}`);
    }
  
    return {
      track: trackBody.item.name,
      url: trackBody.item.external_urls.spotify,
    }
  } catch (error) {
    console.error('Error in GET:', error.message);
    return ''
  }
}