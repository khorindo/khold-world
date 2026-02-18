// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// my components
import LinkBox from "./linkbox";
import Changelog from "./changelog";
import Webrings from "./webrings";
import RecentPost from "./recentpost";

export default function HomeAccordion({ latestPost }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold">links</AccordionTrigger>
        <AccordionContent>
          <LinkBox />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold">changelog</AccordionTrigger>
        <AccordionContent>
          <Changelog />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold">webrings</AccordionTrigger>
        <AccordionContent>
          <Webrings />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-bold">
          most recent post
        </AccordionTrigger>
        <AccordionContent>
          <RecentPost post={latestPost} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="font-bold">guestbook</AccordionTrigger>
        <AccordionContent>will go here</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
