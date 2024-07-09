import Image from "next/image";
import hero from "@/public/about_1_cropped.jpeg";
import about_2 from "@/public/about_highlight.jpg";
import about_3 from "@/public/about_highlight2.jpg";
import PageHeader from "@/components/PageHeader";
import FramedPhoto from "@/components/FramedPhoto";
import PageSection from "@/components/PageSection";
import PageParagraph from "@/components/PageParagraph";

export default function About() {
  return (
    <>
      <PageHeader header="About Us" />

      <PageSection>
        <FramedPhoto src={hero} alt="Just Be Still Teacher" height={250} />
        <PageParagraph>
          Welcome to Just Be Still, a creative fashion design group dedicated to
          inspiring the next generation of designers! We specialize in teaching
          kids how to sew and unleash their creativity. But that&apos;s not
          all—we also offer alterations; we take custom orders and fun sewing
          parties.
        </PageParagraph>
      </PageSection>

      <PageSection>
        <FramedPhoto
          src={about_2}
          alt="Just Be Still Teacher"
          height={350}
          floatLeft
        />

        <PageParagraph>
          My journey with sewing began right after high school when I learned
          the basics. In college, I had the opportunity to teach middle school
          kids crafts like knitting, cooking, baking, and needlework at ROHI
          camp during the summer! I have a passion for teaching kids. With a
          master&apos;s degree in instructional education, I have a deep
          understanding of effective teaching methods and am committed to
          providing a comprehensive and accessible learning experience for
          anyone interested in sewing.
        </PageParagraph>
      </PageSection>

      <PageSection>
        <FramedPhoto src={about_3} alt="Just Be Still Teacher" height={250} />

        <PageParagraph>
          As a teacher, I understand the importance of hands-on practice. In my
          classes, students not only learn new techniques but also apply them to
          real-life projects. This approach ensures that they truly grasp the
          skills and feel a sense of accomplishment as they create useful items.
        </PageParagraph>
        <PageParagraph>
          <span className="font-bold">
            At Just Be Still, we believe in the power of practical application
            to master any craft.
          </span>
        </PageParagraph>
        <PageParagraph>
          By combining classroom-style instruction with practice projects, we
          help our students reinforce their understanding and build confidence
          in their abilities. We do service projects at the end of every year,
          making items for nursing homes, retirement centers, or youth services.
          My true passion lies in investing in the next generation of kids,
          nurturing their creativity, and providing them with the tools they
          need to succeed.
        </PageParagraph>
        <PageParagraph isAccent>
          Join us on this creative journey and discover the joy of making
          something beautiful with your own hands.
        </PageParagraph>
      </PageSection>
    </>
  );
}
