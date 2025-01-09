import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import PageParagraph from "@/components/PageParagraph";
import getPageData from "@/lib/getPageData";
import EventsCarousel from "./EventsCarousel";

export default async function Events() {
  const data = await getPageData();
  const poster = data.poster;
  const extras = data.extras;

  return (
    <>
      <PageHeader header="Events" />

      <PageSection>
        <PageParagraph as="div" className="font-bold">
          December Workshop Update
        </PageParagraph>
        <PageParagraph as="div" className="text-left">
          This month, we had the joy of partnering with Green Hills Retirement
          Home to bring a little extra comfort and love to their residents. With
          55 residents eagerly awaiting handmade pillows, we got to work and
          created 55 beautiful, cozy pillows just for them!
        </PageParagraph>
        <PageParagraph as="div" className="text-left">
          Delivering these heartfelt gifts was an unforgettable experience.
          Seeing their smiles and hearing their words of gratitude reminded us
          why we do what we do. Our hearts are full knowing we could spread some
          love and make them feel remembered this holiday season
        </PageParagraph>
        <PageParagraph as="div" className="text-left" isAccent>
          Thank you to everyone who helped make this possible—you're part of the
          magic!
        </PageParagraph>
      </PageSection>
      <EventsCarousel />
    </>
  );
}
