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

type ParagraphWidget = {
  type: WidgetType.Paragraph | WidgetType.AccentParagraph;
  content: string;
  uuid: string;
  modifiers: WidgetModifiers[];
};

export enum WidgetModifiers {
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
