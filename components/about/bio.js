import { Ubuntu } from "next/font/google";
import Image from "next/image";

const ubuntubold = Ubuntu({ subsets: ["latin"], weight: ["700"] });

export default function Bio() {
  return (
    <div className="bg-zinc-50 border border-black p-2.5 my-3 mr-2 text-zinc-800  rounded-sm ">
      henlo
    </div>
  );
}
