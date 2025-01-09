type Node = CarouselNode | ImageNode | ParagraphNode;

type CarouselNode = {
  type: NodeType.Carousel;
  content: ImageNode[];
  uuid: string;
  modifiers: NodeModifiers[];
};

export type ImageNode = {
  type: NodeType.Image;
  src: string;
  alt: string;
  uuid: string;
  modifiers: NodeModifiers[];
};

type ParagraphNode = {
  type: NodeType.Paragraph | NodeType.AccentParagraph;
  content: string;
  uuid: string;
  modifiers: NodeModifiers[];
};

enum NodeModifiers {
  TextLeft = "text-left",
  FontBold = "font-bold",
}

export enum NodeType {
  Paragraph = "Paragraph",
  AccentParagraph = "AccentParagraph",
  Carousel = "Carousel",
  Image = "Image",
}

export type Page = {
  content: Node[];
};
