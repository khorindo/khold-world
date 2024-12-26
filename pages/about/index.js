// my component imports
import MainLayout from "@/components/layout/main_layout";
import Bio from "@/components/about/bio";

// misc
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Interests from "@/components/about/interests";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });

export default function About() {
  return (
    <MainLayout>
      <Head>
        <title>about @ khold.world</title>
      </Head>
      <div className="bg-zinc-50 border border-black p-2.5 my-3 mr-2 text-zinc-800  rounded-sm ">
        <h1
          className={`${ubuntubold.className} text-3xl text-zinc-50 bg-zinc-900 p-1 rounded-sm rounded-b-none `}
        >
          about me
        </h1>
        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-none rounded-b-sm border-t border-black">
            <TabsTrigger value="bio" className="">
              bio
            </TabsTrigger>
            <TabsTrigger value="interests" className="">
              interests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bio">
            <Bio />
          </TabsContent>
          <TabsContent value="interests">
            <Interests />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
