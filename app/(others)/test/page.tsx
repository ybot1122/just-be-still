import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import PageParagraph from "@/components/PageParagraph";
import getPageData from "@/lib/getPageData";
import Carousel from "../../../components/Carousel";
import { WidgetType } from "@/content/content";
import CarouselImage from "@/components/CarouselImage";
import SingleImage from "@/components/SingleImage";
import { redirect } from "next/navigation";

export default async function Test() {
  const data = await getPageData();
  const content = data.content;

  if (process.env.VERCEL_ENV === "production") {
    redirect("/");
  }

  return (
    <>
      <PageHeader header="Test" />
      <PageSection>
        {content.map((c) => {
          if (c.type === WidgetType.Paragraph) {
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

          if (c.type === WidgetType.AccentParagraph) {
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
