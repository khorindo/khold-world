import TopNav from "./top_nav";
import FmWidget from "../widgets/fm_widget";
import { Outfit, Ubuntu } from "next/font/google";

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
        <Link href="#">
          <h1 className={`${ubuntubold.className}  text-4xl`}>khold.world</h1>
        </Link>
      </header>
      <div
        className={`${outfit.className} w-[900px] m-auto border border-black`}
      >
        <nav
          className={`${ubuntubold.className}  bg-white border border-black text-black text-2xl`}
        >
          <ul className="flex justify-between text-center ">
            <li className="flex-1 border-r border-black py-1 px-4 hover:bg-black hover:text-white">
              <a href="#">home</a>
            </li>
            <li className="flex-1  border-black p-1 px-4 hover:bg-black hover:text-white">
              <a href="#">about</a>
            </li>
            <li className="flex-1  border-l border-black py-1 px-4 hover:bg-black hover:text-white">
              <a href="#">blog</a>
            </li>
            <li className="flex-1  border-l border-black py-1 px-4 hover:bg-black hover:text-white">
              <a href="#">fun</a>
            </li>
          </ul>
        </nav>

        <div className="flex bg-white">
          {/* New flex container */}
          <aside className="w-64 px-2 py-3 text-black">
            {/* Sidebar content */}

            <FmWidget />
          </aside>
          <div className="flex-1 ">
            {/* Main content */}
            {children}
          </div>
        </div>
      </div>
      <footer></footer>
    </main>
  );
}
