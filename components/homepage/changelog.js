import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Changelog() {
  return (
    <ScrollArea>
      <div>
        <Link href="/blog/site-changelog">
          <h2 className="text-l font-semibold hover:underline">
            Site Changelog
          </h2>
        </Link>
      </div>
    </ScrollArea>
  );
}
