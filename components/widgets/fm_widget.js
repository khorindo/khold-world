// this widget should appear in the sidebar of the website.
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Outfit } from "next/font/google";

const bold = Outfit({ subsets: ["latin"], weight: ["700"] });

export default function FmWidget() {
  const [latestTrack, setLatestTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLatestTrack() {
      try {
        const response = await fetch("/api/lastfm");
        const data = await response.json();
        setLatestTrack(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestTrack();
    console.log(latestTrack);
    //setLoading(false);
  }, []);

  if (loading) {
    return <p>please watch warmly...</p>;
  }

  return (
    <div className="border border-black p-1">
      <h3 className="border-b border-black">
        <strong className={`${bold.className} text-lg`}>
          recently listened
        </strong>
      </h3>
      <div className="flex mt-1 gap-2">
        {latestTrack.image && (
          <Link href={latestTrack.url}>
            <Image
              src={latestTrack.image}
              alt="Album cover"
              width={90}
              height={90}
              className="border border-black"
            />
          </Link>
        )}
        <div className="flex flex-col">
          <Link
            href={latestTrack.url}
            className="hover:decoration-solid hover:underline"
          >
            <p className={`${bold.className} text-sm`}>
              {latestTrack.trackName}
            </p>
          </Link>
          <p className="text-sm">{latestTrack.artist}</p>
          <p className="text-sm">{latestTrack.album}</p>
          {/* <Link href={latestTrack.artisturl}>
            <p className="text-sm">{latestTrack.artist}</p>
          </Link>
          <Link href={latestTrack.albumurl}>
            <p className="text-sm">{latestTrack.album}</p>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
