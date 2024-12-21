// my component imports
import MainLayout from "@/components/layout/main_layout";

// misc
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <MainLayout>
      <Head>
        <title>about @ khold.world</title>
      </Head>
      <div className="bg-zinc-50 border border-black p-2.5 my-3 mr-2 text-zinc-800 rounded-sm"></div>
    </MainLayout>
  );
}
