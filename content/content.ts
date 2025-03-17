export type Widget = CarouselWidget | ImageWidget | ParagraphWidget;

export type CarouselWidget = {
  type: WidgetType.Carousel;
  content: ImageWidget[];
  uuid: string;
  modifiers: WidgetModifiers[];
};

export type ImageWidget = {
  type: WidgetType.Image;
  src: string;
  alt: string;
  uuid: string;
  modifiers: WidgetModifiers[];
};

export type ParagraphWidget = {
  type: WidgetType.Paragraph | WidgetType.AccentParagraph;
  content: string; // Stringified IDom[]
  uuid: string;
  modifiers: WidgetModifiers[];
};

export enum WidgetModifiers {
  TextCenter = "text-center",
  TextRight = "text-right",
  TextLeft = "text-left",
  FontBold = "font-bold",
}

export enum WidgetType {
  Paragraph = "Paragraph",
  AccentParagraph = "AccentParagraph",
  Carousel = "Carousel",
  Image = "Image",
}

export type Page = {
  content: Widget[];
};
