import { Timestamp } from "firebase/firestore";
import {
  MouseEventHandler,
  ChangeEvent,
  MouseEvent,
  HTMLInputElement,
} from "react";

export {};

declare global {
  type Meta = {
    id: string;
    title: string;
    date: string;
    tags: string[];
  };

  type ImageMeta = {
    type: "landscape" | "portrait";
    src: string;
    alt: string;
    caption?: string;
  };
}
