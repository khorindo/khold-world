// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// my components
import LinkBox from "../homepage/linkbox";

// next
import Image from "next/image";

export default function Interests() {
  return (
    <div>
      <div className="bg-zinc-50 border border-black p-2.5 my-3 text-zinc-800 rounded-sm">
        <div className="border border-zinc-950 p-1 mb-2">
          <h2 className="text-2xl font-bold p-1 border-b border-zinc-950">
            interests
          </h2>
          <div className="text-sm p-1">
            i dont really like distilling stuff into charts but they get the
            point across i guess.
          </div>
          <Accordion type="single" collapsible className="p-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">music</AccordionTrigger>
              <AccordionContent>
                <div className="mb-2">
                  I used to spend a lot of time sifting through last.fm and rym
                  and looking through my Discover Weekly all the time, and maybe
                  I should get back to that lol
                </div>
                <div>
                  here's a bad topster i made with 1x album from many artists i
                  like
                </div>
                <div className="mb-1">
                  you can click the image to view a larger version btw
                </div>
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/images/about/music/chart.png"
                      alt="bad topster with 1x album from many artists i like"
                      width={700}
                      height={700}
                      className="cursor-pointer"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl bg-zinc-950">
                    <Image
                      src="/images/about/music/chart.png"
                      alt="bad topster with 1x album from many artists i like"
                      width={1600}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold">
                anime & manga
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-2">anime and manga 4x4s, respectively</div>
                <div className="flex gap-1">
                  <Dialog>
                    <DialogTrigger>
                      <Image
                        src="/images/about/anime/anime.png"
                        alt="4x4 anime chart"
                        width={300}
                        height={300}
                        className="cursor-pointer rounded-sm border border-zinc-600"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-zinc-950">
                      <Image
                        src="/images/about/anime/anime.png"
                        alt="4x4 anime chart"
                        width={800}
                        height={800}
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger>
                      <Image
                        src="/images/about/anime/manga.png"
                        alt="4x4 manga chart"
                        width={300}
                        height={300}
                        className="cursor-pointer rounded-sm border border-zinc-600"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-zinc-950">
                      <Image
                        src="/images/about/anime/manga.png"
                        alt="4x4 manga chart"
                        width={1000}
                        height={1000}
                        className=""
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold">games</AccordionTrigger>
              <AccordionContent>
                <div className="mb-2">
                  The games I'm playing the most right now are (modern) Tetris
                  and Melee. I play the Touhou games super very casually but
                  I've grinded out a handful of normal 1CCs over the years. I
                  also play rhythm games, most notably StepMania and osu! (i fw
                  all the modes now actually)
                </div>
                <div className="mb-2">
                  YOU SHOULD PLAY TETRIS TOO ITS REALLY FUN SMILE
                </div>
                <div className="mb-2">
                  Below are my most recent Tetris 40L and 20L pbs, as well as my
                  1cc chart for touhou games:
                </div>

                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/images/about/games/tetrio.png"
                      alt="tetrio 40L pb"
                      width={700}
                      height={700}
                      className="mb-2 cursor-pointer rounded-sm"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl bg-zinc-950">
                    <Image
                      src="/images/about/games/tetrio.png"
                      alt="tetrio 40L pb"
                      width={1400}
                      height={1400}
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src="/images/about/games/jstris20l.png"
                      alt="jstris 20L pb"
                      width={700}
                      height={700}
                      className="cursor-pointer rounded-sm"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl bg-zinc-950">
                    <Image
                      src="/images/about/games/jstris20l.png"
                      alt="jstris 20L pb"
                      width={1400}
                      height={1400}
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
                <Dialog className="mb-2">
                  <DialogTrigger>
                    <Image
                      src="/images/about/games/2hu.png"
                      alt="touhou 1cc chart"
                      width={700}
                      height={700}
                      className="cursor-pointer rounded-sm"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl bg-zinc-950">
                    <Image
                      src="/images/about/games/2hu.png"
                      alt="touhou 1cc chart"
                      width={1400}
                      height={1400}
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
