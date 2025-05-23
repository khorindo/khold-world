import { Ubuntu } from "next/font/google";
import Link from "next/link";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });

export default function TopNav() {
  return (
    <nav
      className={`${ubuntubold.className}  bg-zinc-950 border border-black text-zinc-200 text-2xl`}
    >
      <ul className="flex justify-between text-center">
        <li className="flex-1 border-r border-black py-1 px-4 hover:bg-zinc-200 hover:text-zinc-950">
          <Link href="/" className="block w-full h-full">
            home
          </Link>
        </li>
        <li className="flex-1 border-black p-1 px-4  hover:bg-zinc-200 hover:text-zinc-950">
          <Link href="/about" className="block w-full h-full">
            about
          </Link>
        </li>
        <li className="flex-1  border-l border-black py-1 px-4 hover:bg-zinc-200 hover:text-zinc-950">
          <Link href="/blog" className="block w-full h-full">
            blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
