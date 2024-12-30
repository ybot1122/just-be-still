import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Image from "next/image";
import fall2024events from "@/public/events/posters/fall2024.jpg";
import pumpkin1 from "@/public/events/images/pumpkin1.jpg";
import pumpkin2 from "@/public/events/images/pumpkin2.jpg";
import pumpkin3 from "@/public/events/images/pumpkin3.jpg";
import PageParagraph from "@/components/PageParagraph";

export default async function Events() {
  const data = await getData();
  const poster = data.poster;
  const extras = data.extras;

  return (
    <>
      <PageHeader header="Events" />
      <PageSection>
        <div className="relative w-full mt-5">
          <img
            src={poster.path}
            alt={poster.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </PageSection>

      <PageSection>
        <div className="flex mt-5 md:mt-20 gap-2">
          {extras.map((extra) => (
            <div key={extra.path} className="max-h-[350px]">
              <img
                src={extra.path}
                alt={extra.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <PageParagraph isAccent as="div">
          <p className="">Coming Up</p>
          <p className="text-left">
            <span className="font-bold">Weekend Workshops</span> in September,
            October, November
          </p>
          <p className="text-left">
            <span className="font-bold">Service Project</span> in December
          </p>
        </PageParagraph>
      </PageSection>
    </>
  );
}

import fs from "fs";
import path from "path";
import { Content_Event } from "@/content/events";

async function getData(): Promise<Content_Event> {
  const filePath = path.join(process.cwd(), "content/events.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}
