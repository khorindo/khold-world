import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import Link from "next/link";

export default function LinkBox() {
  return (
    <div className="p-2 flex gap-3">
      <Link href="https://www.last.fm/user/frozenmeal">
        <Image src="/icons/lastfm.png" width={40} height={40}></Image>
      </Link>
      <Dialog>
        <DialogTrigger>
          <Image src="/icons/twt.png" width={30} height={30}></Image>
        </DialogTrigger>
        <DialogContent className="bg-zinc-900 border-zinc-600 ">
          <DialogHeader>
            <DialogTitle>h</DialogTitle>
            <DialogDescription className="text-zinc-200">
              if you have my twt you have it. im not giving it out lmao
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Link href="https://ch.tetr.io/u/khold">
        <Image
          src="/icons/tetrio.svg"
          width={30}
          height={30}
          className="relative top-1"
        ></Image>
      </Link>
      <Link href="https://osu.ppy.sh/users/8966561">
        <Image
          src="/icons/osu.svg"
          width={35}
          height={35}
          className="relative top-1"
        ></Image>
      </Link>
    </div>
  );
}
