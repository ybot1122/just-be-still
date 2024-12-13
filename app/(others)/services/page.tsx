import PageHeader from "@/components/PageHeader";
import PageParagraph from "@/components/PageParagraph";
import PageSection from "@/components/PageSection";
import ServiceItem from "@/components/ServiceItem";
import Link from "next/link";

import private_lessons from "@/public/private_lessons.jpg";
import customorder_1 from "@/public/customorder_1.jpg";
import customorder_2 from "@/public/customorder_2.jpg";
import customorder_3 from "@/public/customorder_3.jpg";
import customorder_4 from "@/public/customorder_4.jpg";
import customorder_5 from "@/public/customorder_5.jpg";
import customorder_6 from "@/public/customorder_6.jpg";
import Image, { StaticImageData } from "next/image";
import { FAQItemList } from "@ybot1122/toby-ui/FAQItem";

export default function Contact() {
  return (
    <>
      <PageHeader header="Services" />

      <PageSection>
        <FAQItemList>
          <ServiceItem q="Sewing Classes">
            <ServiceItemParagraph>
              JustBeStill is offering in-person sewing classes in June and July!
            </ServiceItemParagraph>
            <ServiceItemParagraph>
              Join us for a fun and creative experience where kids can learn the
              art of sewing and unleash their creativity. Whether they&apos;re
              beginners or have some experience, our classes are designed to
              inspire and teach valuable skills.
            </ServiceItemParagraph>
            <ServiceItemParagraph>
              Don&apos;t miss out on this opportunity to nurture the next
              generation of designers. Sign up today and let the creativity
              begin!
            </ServiceItemParagraph>
            <ServiceItemParagraph>
              <Link
                href="https://forms.gle/ue3RnMiC2DmxEZ5c8"
                className="underline"
              >
                https://forms.gle/ue3RnMiC2DmxEZ5c8
              </Link>
            </ServiceItemParagraph>
          </ServiceItem>
          <ServiceItem q="Private Sewing Lessons">
            <ServiceItemParagraph>
              We also offer private lessons for those who prefer one-on-one
              instruction tailored to their specific needs and interests.
              Private classes are available by appointment. Everything will be
              provided.
            </ServiceItemParagraph>
            <div className="relative w-[250px] md:w-[450px] aspect-square mx-auto mt-10">
              <Image
                src={private_lessons}
                alt="Private Lessons"
                placeholder="blur"
                className="object-contain"
                sizes="50vw"
                fill
              />
            </div>
          </ServiceItem>
          <ServiceItem q="Alterations">
            <ServiceItemParagraph>
              Do you have pants that are too long or a skirt that&apos;s too big
              for your waist, and you&apos;ve been relying on a safety pin to
              make it work? It&apos;s time to alter them to your size!
              Alterations are available by appointment.
            </ServiceItemParagraph>
          </ServiceItem>
          <ServiceItem q="Custom Order">
            <ServiceItemParagraph>
              We make blankets, including fidget and weighted ones, for kids
              with special needs. Plush blankets are made with your child&apos;s
              favorite plush; fleece blankets can be made from your child&apos;s
              favorite print. Have a baby shower to attend? We can make
              something special for you. Have a parent living with
              Alzheimer&apos;s or dementia? We can create a busy lapbook
              specifically for them. Need it personalized? We can do that too.
            </ServiceItemParagraph>
            <div className="grid grid-cols-3 w-full gap-1">
              <ServiceItemGalleryImage src={customorder_1} />
              <ServiceItemGalleryImage src={customorder_2} />
              <ServiceItemGalleryImage src={customorder_3} />
              <ServiceItemGalleryImage src={customorder_4} />
              <ServiceItemGalleryImage src={customorder_5} />
              <ServiceItemGalleryImage src={customorder_6} />
            </div>
          </ServiceItem>
          <ServiceItem q="Sewing Parties">
            <ServiceItemParagraph>
              Looking for something unique for your kids&apos; party? Try a
              sewing party! No matter the skill level, everyone can join in.
              Minimum length is 2 hours with a maximum of 12 kids. We&apos;ll
              consider themes and project choices. Everything will be provided.
            </ServiceItemParagraph>
          </ServiceItem>
          <ServiceItem q="Service Projects">
            <ServiceItemParagraph>
              Each year, we organize a service project where we create items for
              seniors or children in need. During our December workshop, we
              contribute to our community by crafting meaningful gifts for
              residents.
            </ServiceItemParagraph>
          </ServiceItem>
        </FAQItemList>
      </PageSection>

      <PageSection>
        <PageParagraph isAccent>
          Ready to get started?
          <br />
          <Link href="/contact" className="underline">
            Contact Us Today!
          </Link>
        </PageParagraph>
      </PageSection>
    </>
  );
}

const ServiceItemParagraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-left last:mb-0 mb-5 text-lg md:text-xl">{children}</p>
  );
};

const ServiceItemGalleryImage = ({ src }: { src: StaticImageData }) => {
  return (
    <div className="col-span-1 relative h-[150px] md:h-[250px]">
      <Image
        src={src}
        alt="Custom Order Example"
        fill
        className="object-cover"
        placeholder="blur"
        sizes="50vw"
      />
    </div>
  );
};
