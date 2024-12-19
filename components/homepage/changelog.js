import { ScrollArea } from "@/components/ui/scroll-area";
export default function Changelog() {
  return (
    <ScrollArea>
      <div>
        <h3 className="text-lg font-bold">version 0.0.1</h3>
        <div>
          Initial release of the website, only the homepage exists. Planning on
          getting the rest of the topnav pages up soon.
        </div>
      </div>
    </ScrollArea>
  );
}
