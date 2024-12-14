import MainLayout from "@/components/layout/main_layout";

import { Ubuntu } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });
export default function Home() {
  return (
    <MainLayout>
      <div className="bg-white border border-black p-2.5 m-3 text-black">
        <h1 className={`${ubuntubold.className} text-3xl`}>
          it's a khold world...
        </h1>
        <div>bello! please enjoy your stay</div>

        {/* below here needs to be a flex container so i can put more things here in a nice grid probably 2 x something */}

        <div className="mb-4">under construction. please watch warmly...</div>
      </div>
    </MainLayout>
  );
}
