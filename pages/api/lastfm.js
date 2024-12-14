export default async function handler(req, res) {
  try {
    const { LASTFM_API_KEY, LASTFM_USERNAME } = process.env;
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json`,
      { method: "GET" }
    );
    const data = await response.json();
    const latestTrackData = data.recenttracks.track[0];

    const latestTrack = {
      artist: latestTrackData.artist["#text"],
      //artisturl: latestTrackData.artist.url,
      trackName: latestTrackData.name,
      url: latestTrackData.url,
      album: latestTrackData.album["#text"],
      //albumurl: latestTrackData.album.url,
      image: latestTrackData.image[2]["#text"],
    };

    res.status(200).json(latestTrack);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while fetching track data." });
  }
}
