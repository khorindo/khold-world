import { Ubuntu, Outfit } from "next/font/google";

import Link from "next/link";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["700"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });

export default function TopNav() {
  return (
    <div className="flex items-center justify-around m-6">
      <Link href="/">
        <h1 className={`${ubuntu.className}  text-4xl`}>khold world</h1>
      </Link>
      <ul className={`${outfit.className} flex md:text-xl items-center`}>
        <li className="m-2">
          <Link href="/about">About</Link>
        </li>
        <li className="m-2">
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
}
