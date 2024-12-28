import { Ubuntu } from "next/font/google";
import Image from "next/image";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });

export default function Bio() {
  return (
    <div className="bg-zinc-50 border border-black p-2.5 my-3 mr-2 text-zinc-800 text-sm rounded-sm ">
      <div className="border border-zinc-950 p-1 mb-2">
        <h2
          className={`${ubuntubold.className} text-2xl border-b border-zinc-950 p-1`}
        >
          me
        </h2>
        <div className="p-1">
          Most people online know me as khold, or wrx probably. khold was the
          name of a Fearow that one of my favorite youtubers growing up used in
          his FireRed let's play. I just sniped the name because I thought it
          was cool.
        </div>
        <div className="px-1">
          Webdev is comfy, and it's what I'd like to do for a living. I also
          play tetris somewhat quickly i guess
        </div>
      </div>
      <div className="border border-zinc-950 p-1">
        <h2
          className={`${ubuntubold.className} text-2xl border-b border-zinc-950 p-1`}
        >
          about khold.world
        </h2>
        {/* <div className="mb-2"></div> */}
        <div className="p-1 mb-2">
          I originally wanted to make something like a portfolio I could show
          employers, but I quickly realized that I don't have many school
          projects that are worth showing or that I can legally show off (cuz of
          an NDA). But designing and building stuff is fun, so I built this site
          and rented a VPS to host it and some other selfhosted stuff I wanna
          play with. I don't know if I wanna parade this around as a portfolio
          item later on.
        </div>
      </div>
    </div>
  );
}
