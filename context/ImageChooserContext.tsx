"use client";

import { createContext, useState, ReactNode, useContext } from "react";

interface ImageChooserContextType {
  callback: ((path?: string) => void) | null;
  setCallback: (callback: () => void) => void;
}

const ImageChooserContext = createContext<ImageChooserContextType | undefined>(
  undefined,
);

export const ImageChooserProvider = ({ children }: { children: ReactNode }) => {
  const [callback, setCallback] = useState<(() => void) | null>(null);

  return (
    <ImageChooserContext.Provider value={{ callback, setCallback }}>
      {children}
    </ImageChooserContext.Provider>
  );
};

export const useImageChooser = () => {
  const context = useContext(ImageChooserContext);
  if (context === undefined) {
    throw new Error(
      "useImageChooser must be used within an ImageChooserProvider",
    );
  }
  return context;
};
