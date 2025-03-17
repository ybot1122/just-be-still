import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import PageParagraph from "@/components/PageParagraph";
import getPageData from "@/lib/getPageData";
import Carousel from "../../../components/Carousel";
import { WidgetType } from "@/content/content";
import CarouselImage from "@/components/CarouselImage";
import SingleImage from "@/components/SingleImage";

export default async function Events() {
  const data = await getPageData("events");
  const content = data.content;

  return (
    <>
      <PageHeader header="Events" />
      <PageSection centered={false}>
        {content.map((c) => {
          if (c.type === WidgetType.Paragraph) {
            return (
              <PageParagraph
                as="div"
                className={c.modifiers.join(" ")}
                key={c.uuid}
                rawHtml={c.content}
              ></PageParagraph>
            );
          }

          if (c.type === WidgetType.AccentParagraph) {
            return (
              <PageParagraph
                as="div"
                className={c.modifiers.join(" ")}
                isAccent
                key={c.uuid}
                rawHtml={c.content}
              ></PageParagraph>
            );
          }

          if (c.type === WidgetType.Carousel) {
            return (
              <Carousel key={c.uuid}>
                {c.content.map((img) => (
                  <CarouselImage src={img.src} alt={img.alt} key={img.uuid} />
                ))}
              </Carousel>
            );
          }

          if (c.type === WidgetType.Image) {
            return <SingleImage src={c.src} alt={c.alt} key={c.uuid} />;
          }
        })}
      </PageSection>
    </>
  );
}
