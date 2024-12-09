import MainLayout from "@/components/layout/main_layout";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <MainLayout>
      <div className={`${outfit.className} text-center`}>
        under construction. please watch warmly...
      </div>
    </MainLayout>
  );
}
