// my component imports
import MainLayout from "@/components/layout/main_layout";

// misc
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });

export default function About() {
  return (
    <MainLayout>
      <Head>
        <title>about @ khold.world</title>
      </Head>
      <div className="bg-zinc-50 border border-black p-2.5 my-3 mr-2 text-zinc-800  rounded-sm ">
        <h1
          className={`${ubuntubold.className} text-3xl text-zinc-50 bg-zinc-950 p-1 rounded-sm rounded-b-none`}
        >
          about me
        </h1>
        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-zinc-700 rounded-none rounded-b-sm">
            <TabsTrigger value="bio" className="">
              bio
            </TabsTrigger>
            <TabsTrigger value="achievements" className="">
              achievements
            </TabsTrigger>
            <TabsTrigger value="contact" className="">
              contact
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bio">you are on the BIO</TabsContent>
          <TabsContent value="achievements">
            you are on the ACHIEVEMENTS
          </TabsContent>
          <TabsContent value="contact">you are on the CONTACT</TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
