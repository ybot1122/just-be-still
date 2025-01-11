"use client";
import { AccordionItemList } from "@ybot1122/toby-ui/AccordionItem";

import React from "react";

const Accordion: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <AccordionItemList>{children}</AccordionItemList>;
};

export default Accordion;
