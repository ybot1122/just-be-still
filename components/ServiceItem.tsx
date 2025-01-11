"use client";

import { AccordionItem } from "@ybot1122/toby-ui/AccordionItem";

export default function ServiceItem({
  q,
  children,
}: {
  q: string;
  children: React.ReactElement | React.ReactElement[];
}) {
  return (
    <AccordionItem
      question={q}
      questionFontColor="text-forest"
      fillColor="fill-forest"
      borderColor="border-borderGray"
      bold
    >
      {children}
    </AccordionItem>
  );
}
