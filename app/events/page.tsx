import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Image from "next/image";
import fall2024events from "@/public/events/fall2024.jpg";
import pumpkin1 from "@/public/fall2024/pumpkin1.jpg";
import pumpkin2 from "@/public/fall2024/pumpkin2.jpg";
import pumpkin3 from "@/public/fall2024/pumpkin3.jpg";
import PageParagraph from "@/components/PageParagraph";
import PageWrapper from "@/components/PageWrapper";

export default function Events() {
  return (
    <PageWrapper>
      <PageHeader header="Events" />
      <PageSection>
        <div className="relative w-full mt-5">
          <Image
            src={fall2024events}
            alt="Events in the Fall 2024"
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
        <div className="grid grid-cols-3 gap-2 mt-20">
          <div>
            <Image
              src={pumpkin1}
              alt="Handsewn pumpkins"
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
          <div>
            <Image
              src={pumpkin2}
              alt="Handsewn pumpkins"
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
          <div>
            <Image
              src={pumpkin3}
              alt="Handsewn pumpkins"
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
