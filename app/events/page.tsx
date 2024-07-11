import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Image from "next/image";
import julyevent from "@/public/events/july2024.png";
import PageParagraph from "@/components/PageParagraph";
import PageWrapper from "@/components/PageWrapper";

export default function Events() {
  return (
    <PageWrapper>
      <PageHeader header="Events" />
      <PageSection>
        <div className="relative w-full mt-5">
          <Image
            src={julyevent}
            alt="Event in July"
            placeholder="blur"
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </PageSection>
      <PageSection>
        <PageParagraph isAccent>
          <p className="">Coming Up</p>
          <p className="text-left">
            <span className="font-bold">Weekend Workshops</span> in September,
            October, November
          </p>
          <p className="text-left">
            <span className="font-bold">Service Project</span> in December
          </p>
        </PageParagraph>
      </PageSection>
    </PageWrapper>
  );
}
