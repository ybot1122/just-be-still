"use client";

import { CloudinaryResource } from "@/server_actions/getCloudinaryImages";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from "react";

interface ImageChooserContextType {
  uploaded: CloudinaryResource[];
  addUploaded: (img: CloudinaryResource) => void;
  callback: ((path?: string) => void) | null;
  setCallback: (callback: () => void) => void;
}

const ImageChooserContext = createContext<ImageChooserContextType | undefined>(
  undefined,
);

export const ImageChooserProvider = ({ children }: { children: ReactNode }) => {
  const [callback, setCallback] = useState<(() => void) | null>(null);
  const [uploaded, setUploaded] = useState<CloudinaryResource[]>([]);

  const addUploaded = useCallback(
    (path: CloudinaryResource) => {
      setUploaded((prev) => [...prev, path]);
    },
    [setUploaded],
  );

  return (
    <ImageChooserContext.Provider
      value={{ callback, setCallback, uploaded, addUploaded }}
    >
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
