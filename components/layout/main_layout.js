import TopNav from "./top_nav";
import FmWidget from "../widgets/fm_widget";
import NavLinkAds from "../widgets/navlink_ads";

import { Outfit, Ubuntu, Outfit } from "next/font/google";

import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });
const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });

export default function MainLayout({ children }) {
  return (
    <main>
      <header className="w-[900px] m-auto py-2">
        {/* <TopNav /> */}
        {/* i dont like the old topnav. i think im going to put the nav ul into the "topnav" component
        and put that into the div below header where it already is */}
        {/* done! */}
        <Link href="/">
          <h1 className={`${ubuntubold.className}  text-4xl text-zinc-100`}>
            khold.world
          </h1>
        </Link>
      </header>
      <div
        className={` ${outfit.className} w-[900px] m-auto border border-black`}
      >
        {/* topnav here now */}
        <TopNav />
        <div className="flex bg-zinc-800">
          {/* New flex container */}
          <aside className="w-64 px-2 py-3 text-zinc-800">
            {/* Sidebar content */}
            <FmWidget />
            <NavLinkAds />
          </aside>
          <div className="flex-1 ">
            {/* Main content */}
            {children}
          </div>
        </div>
      </div>
      <footer>
        <div className={`${outfit.className} text-center m-2`}>
          © 2024 khold.world
        </div>
      </footer>
    </main>
  );
}
