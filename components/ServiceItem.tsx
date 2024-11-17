"use client";

import { FAQItem } from "@ybot1122/toby-ui/FAQItem";

export default function ServiceItem({
  q,
  children,
}: {
  q: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <FAQItem
      question={q}
      questionFontColor="text-forest"
      fillColor="fill-forest"
      borderColor="border-borderGray"
      bold
    >
      {children}
    </FAQItem>
  );
}
