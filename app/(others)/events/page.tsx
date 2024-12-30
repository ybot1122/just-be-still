import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import PageParagraph from "@/components/PageParagraph";
import getPageData from "@/lib/getPageData";

export default async function Events() {
  const data = await getPageData();
  const poster = data.poster;
  const extras = data.extras;

  return (
    <>
      <PageHeader header="Events" />
      <PageSection>
        <div className="relative w-full mt-5">
          <img
            src={poster.path}
            alt={poster.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </PageSection>

      <PageSection>
        <div className="flex mt-5 md:mt-20 gap-2">
          {extras.map((extra) => (
            <div key={extra.path} className="max-h-[350px]">
              <img
                src={extra.path}
                alt={extra.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <PageParagraph isAccent as="div">
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
    </>
  );
}
