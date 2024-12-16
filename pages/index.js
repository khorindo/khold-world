import MainLayout from "@/components/layout/main_layout";

import { Ubuntu, Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });
export default function Home() {
  return (
    <MainLayout>
      {/* i think this div should be in mainlayout around the {children} prop tbh */}
      <div className="bg-zinc-50 border border-white p-2.5 my-3 mr-2 text-zinc-800 rounded-sm">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <h1 className={`${ubuntubold.className} text-3xl text-zinc-900`}>
              it's a khold world...
            </h1>
            <div>(at least this is.)</div>
            {/* 1st para */}
            <div>
              Welcome to my website!! I'm{" "}
              <span className="font-bold">khold</span>{" "}
              <span className="italic">(read: "cold")</span> "kay-hold" doesn't
              sound so bad though. I built this website on Next.js and
              tailwindcss. Not for any particular reason tbh besides React is
              comfy and Next.js is what I'm used to lol.
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/khold.jpg"
              alt="Description of image"
              width={100}
              height={100}
              className="rounded border-zinc-600 border"
            />
          </div>
        </div>
        {/* 2nd para */}
        <div className="mb-2">
          There's a lot of unfinished stuff right now, but I just wanted to at
          least get the homepage up so I could get this on the internet. There's
          a lot I want to write for this website so please watch warmly!!!
        </div>

        {/* below here maybe a flex container so i can put more things here in a nice grid probably 2 x something */}
        <div className=" grid grid-cols-2 grid-rows-2 gap-1">
          <div className="bg-zinc-50 border border-zinc-950 text-zinc-800 rounded-sm ">
            <h3 className="border-b border-black px-1 py-1">
              <strong className={`${outfit.className} text-lg`}>links</strong>
            </h3>
            <div className="p-2 flex gap-3">
              <Link href="https://www.last.fm/user/frozenmeal">
                <Image src="/icons/lastfm.png" width={40} height={40}></Image>
              </Link>
              <Link href="https://ch.tetr.io/u/khold">
                <Image
                  src="/icons/tetrio.svg"
                  width={30}
                  height={30}
                  className="relative top-1"
                ></Image>
              </Link>
              <Image
                src="/icons/twt.png"
                width={30}
                height={30}
                className="h-[30px] relative top-1 mx-1.5"
              ></Image>
            </div>
          </div>
          {/* <div className="bg-zinc-50 border border-zinc-950 text-zinc-800 rounded-sm">
            <h3 className="border-b border-black px-1 py-1">
              <strong className={`${outfit.className} text-lg`}>
                guestbook
              </strong>
            </h3>
            <div className="p-2">will go here</div>
          </div>
          <div className="bg-zinc-50 border border-zinc-950 text-zinc-800 rounded-sm">
            <h3 className="border-b border-black px-1 py-1">
              <strong className={`${outfit.className} text-lg`}>
                newest post
              </strong>
            </h3>
            <div className="p-2">goes here</div>
          </div>
          <div className="bg-zinc-50 border border-zinc-950 text-zinc-800 rounded-sm">
            <h3 className="border-b border-black px-1 py-1">
              <strong className={`${outfit.className} text-lg`}>test</strong>
            </h3>
            <div className="p-2">hey lol</div>
          </div> */}
        </div>
      </div>
    </MainLayout>
  );
}
