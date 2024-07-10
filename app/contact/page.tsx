import PageHeader from "@/components/PageHeader";
import PageParagraph from "@/components/PageParagraph";
import PageSection from "@/components/PageSection";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <PageHeader header="Contact" />
      <PageSection>
        <PageParagraph>
          <p className="text-left mb-5">
            Email us at{" "}
            <span className="underline">justbestilldesign@gmail.com</span>
          </p>
          <p className="text-left mb-5">Phone: 515-338-0447</p>
          <p className="text-left">
            Visit us on{" "}
            <Link
              href={"https://www.facebook.com/profile.php?id=61550921396070"}
              className="underline"
            >
              Facebook
            </Link>
          </p>
        </PageParagraph>
      </PageSection>
    </>
  );
}
