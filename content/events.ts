type image = {
  path: string;
  alt: string;
};

type Node = {
  type: NodeType;
  modifiers: ("text-left" | "font-bold")[];
  content: string;
  uuid: string;
};

export enum NodeType {
  Paragraph = "Paragraph",
  AccentParagraph = "AccentParagraph",
  Carousel = "Carousel",
  Image = "Image",
}

export type Content_Event = {
  content: Node[];
};
