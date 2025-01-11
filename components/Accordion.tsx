"use client";
import { FAQItemList } from "@ybot1122/toby-ui/FAQItem";

import React from "react";

const Accordion: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <FAQItemList>{children}</FAQItemList>;
};

export default Accordion;
