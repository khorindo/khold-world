// my component imports
import MainLayout from "@/components/layout/main_layout";
import HomeAccordion from "@/components/homepage/home_accordion";

// misc
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Head from "next/head";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });
export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>home @ khold.world</title>
      </Head>
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
              <span className="italic">(read: "cold")</span> I hear "kay-hold" a
              lot but I think its funny so I don't mind. I code, mostly web dev,
              I draw (very casually) and I spend too much time on twitter. I
              wrote this website on Next.js and tailwindcss because they are
              comfy.
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

        {/* the accordion is nicer */}
        <HomeAccordion />
      </div>
    </MainLayout>
  );
}
