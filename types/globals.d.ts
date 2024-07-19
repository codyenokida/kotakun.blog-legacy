import { Timestamp } from "firebase/firestore";
import {
  MouseEventHandler,
  ChangeEvent,
  MouseEvent,
  HTMLInputElement,
} from "react";

export {};

declare global {
  type Post = {
    id: string;
    title: string;
    description: string;
    datePosted: Date;
  };

  type Posts = {
    [year: number | string]: Post[];
  };

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

  // Blog Post Types

  interface CommentData {
    id: string;
    comments: Comment[];
  }

  interface Comment {
    datePosted: Timestamp;
    author: string;
    content: string;
  }
}
