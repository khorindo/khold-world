import { Ubuntu } from "next/font/google";

import Link from "next/link";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["700"] });

export default function TopNav() {
  return (
    <Link href="/">
      <h1 className={`${ubuntu.className}  text-4xl m-6 ml-10`}>khold world</h1>
    </Link>
  );
}
