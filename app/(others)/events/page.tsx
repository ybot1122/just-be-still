import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import PageParagraph from "@/components/PageParagraph";
import getPageData from "@/lib/getPageData";
import EventsCarousel from "../../../components/EventsCarousel";
import { NodeType } from "@/content/content";
import CarouselImage from "@/components/CarouselImage";

export default async function Events() {
  const data = await getPageData();
  const content = data.content;

  return (
    <>
      <PageHeader header="Events" />
      <PageSection>
        {content.map((c) => {
          if (c.type === NodeType.Paragraph) {
            return (
              <PageParagraph
                as="div"
                className={c.modifiers.join(" ")}
                key={c.uuid}
              >
                {c.content}
              </PageParagraph>
            );
          }

          if (c.type === NodeType.AccentParagraph) {
            return (
              <PageParagraph
                as="div"
                className={c.modifiers.join(" ")}
                isAccent
                key={c.uuid}
              >
                {c.content}
              </PageParagraph>
            );
          }

          if (c.type === NodeType.Carousel) {
            return (
              <EventsCarousel key={c.uuid}>
                {c.content.map((img) => (
                  <CarouselImage src={img.src} alt={img.alt} key={img.uuid} />
                ))}
              </EventsCarousel>
            );
          }
        })}
      </PageSection>
    </>
  );
}
