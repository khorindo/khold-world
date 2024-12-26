// my component imports
import MainLayout from "@/components/layout/main_layout";
import HomeAccordion from "@/components/homepage/home_accordion";

// misc
import { Ubuntu, Outfit } from "next/font/google";
import Image from "next/image";
import Head from "next/head";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>home @ khold.world</title>
      </Head>
      {/* i think this div should be in mainlayout around the {children} prop tbh */}
      <div className="bg-zinc-50 border border-black p-2.5 my-3 mr-2 text-zinc-800 rounded-sm">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <h1
              className={`${ubuntubold.className} text-3xl text-zinc-50 bg-zinc-900 p-1 rounded-sm`}
            >
              it's a khold world...{" "}
              <span className={`${outfit.className} text-xs`}>
                (at least this is.)
              </span>
            </h1>
            {/* 1st para */}
            <div className="text-sm">
              Welcome to my website!! I'm{" "}
              <span className="font-bold">khold</span>{" "}
              <span className="italic">(read: "cold")</span> but I hear
              "kay-hold" just as much and I like it too tbh. This is where I get
              to be as /me/ as I want and stunt a bit with webdev.
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/khold.jpg"
              alt="nichijou coffee mug"
              width={100}
              height={100}
              className="rounded border-zinc-600 border"
            />
          </div>
        </div>
        {/* 2nd para */}
        <div className="mb-2 text-sm">
          I built this website on next.js and tailwind because I think they're
          comfy. There's a lot of unfinished stuff right now, but I'm happy with
          putting this homepage up while I build the rest. I also have plenty to
          yap about as soon as I get the blog up (even if noone's gonna read it
          lol)
        </div>
        <div className="text-sm ">please watch warmly!!!</div>

        {/* the accordion is nicer */}
        <HomeAccordion />
      </div>
    </MainLayout>
  );
}
