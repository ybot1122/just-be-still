import PageHeader from "@/components/PageHeader";
import PageParagraph from "@/components/PageParagraph";
import PageSection from "@/components/PageSection";
import ServiceItem from "@/components/ServiceItem";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <PageHeader header="Services" />

      <PageSection>
        <ServiceItem q="Sewing Classes">
          <ServiceItemParagraph>
            JustBeStill is offering in-person sewing classes in June and July!
          </ServiceItemParagraph>
          <ServiceItemParagraph>
            Join us for a fun and creative experience where kids can learn the
            art of sewing and unleash their creativity. Whether they're
            beginners or have some experience, our classes are designed to
            inspire and teach valuable skills.
          </ServiceItemParagraph>
          <ServiceItemParagraph>
            Don't miss out on this opportunity to nurture the next generation of
            designers. Sign up today and let the creativity begin!
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
            instruction tailored to their specific needs and interests. Private
            classes are available by appointment. Everything will be provided.
          </ServiceItemParagraph>
        </ServiceItem>
        <ServiceItem q="Alterations">
          <ServiceItemParagraph>
            Do you have pants that are too long or a skirt that's too big for
            your waist, and you've been relying on a safety pin to make it work?
            It's time to alter them to your size! Alterations are available by
            appointment.
          </ServiceItemParagraph>
        </ServiceItem>
        <ServiceItem q="Custom Order">
          <ServiceItemParagraph>
            We make blankets, including fidget and weighted ones, for kids with
            special needs. Plush blankets are made with your child's favorite
            plush; fleece blankets can be made from your child's favorite print.
            Have a baby shower to attend? We can make something special for you.
            Have a parent living with Alzheimer's or dementia? We can create a
            busy lapbook specifically for them. Need it personalized? We can do
            that too.
          </ServiceItemParagraph>
        </ServiceItem>
        <ServiceItem q="Sewing Parties">
          <ServiceItemParagraph>
            Looking for something unique for your kids' party? Try a sewing
            party! No matter the skill level, everyone can join in. Minimum
            length is 2 hours with a maximum of 12 kids. We'll consider themes
            and project choices. Everything will be provided.
          </ServiceItemParagraph>
        </ServiceItem>
        <ServiceItem q="Service Projects" isLast>
          <ServiceItemParagraph>
            Each year, we organize a service project where we create items for
            seniors or children in need. During our December workshop, we
            contribute to our community by crafting meaningful gifts for
            residents.
          </ServiceItemParagraph>
        </ServiceItem>
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
  return <p className="mb-5 text-lg md:text-xl">{children}</p>;
};
