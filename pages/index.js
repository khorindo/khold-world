import MainLayout from "@/components/layout/main_layout";

import { Ubuntu } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });
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
              <span className="italic">(read: "cold")</span> buuuut i've heard
              "kay-hold" so many times its kind of endearing. I built this
              website on Next.js and tailwindcss. Not for any particular reason,
              React is comfy and Next.js is what I'm used to...
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
        <div>
          There's a lot of unfinished stuff right now, but I just wanted to at
          least get the homepage up so I could get this on the internet. There's
          a lot I want to write for this website so please watch warmly!!!
        </div>

        {/* below here maybe a flex container so i can put more things here in a nice grid probably 2 x something */}
      </div>
    </MainLayout>
  );
}
