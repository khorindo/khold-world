import { ScrollArea } from "@/components/ui/scroll-area";
export default function Changelog() {
  return (
    <ScrollArea>
      <div>
        <h3 className="text-lg font-bold">version 0.3.0</h3>
        <div>
          Folks we finished the blog functionality. I'd say this is the primary
          reason I wanted to have a website in the first place tbh and it was a
          nice excuse for me to try using a headless CMS instead of building my
          own like in school (oh my god bruh) There's a link to the latest blog
          post right below this dropdown item, and you can find a full listing
          of posts in the top bar.
        </div>
        <h3 className="text-lg font-bold">version 0.2.0</h3>
        <div>
          Finally finished the about page!! It's got a nice tab system courtesy
          of ui/shadcn. (im carried af) I've been very lazy with writing both
          page content and code; good thing the only client is me lmao
        </div>
        <h3 className="text-lg font-bold">version 0.1.1</h3>
        <div>Styling changes to homepage.</div>
        <h3 className="text-lg font-bold">version 0.1.0</h3>
        <div>
          Initial release of the website, only the homepage exists. Planning on
          getting the rest of the topnav pages up soon.
        </div>
      </div>
    </ScrollArea>
  );
}
