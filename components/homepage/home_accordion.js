import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import LinkBox from "./linkbox";

export default function HomeAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold">links</AccordionTrigger>
        <AccordionContent>
          <LinkBox />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold">guestbook</AccordionTrigger>
        <AccordionContent>will go here</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold">
          most recent post
        </AccordionTrigger>
        <AccordionContent>goes here</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-bold">webrings</AccordionTrigger>
        <AccordionContent>will be here</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
