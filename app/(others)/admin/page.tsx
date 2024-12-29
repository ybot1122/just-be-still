import PageHeader from "@/components/PageHeader";
import PageParagraph from "@/components/PageParagraph";
import PageSection from "@/components/PageSection";

export default function Admin() {
  return (
    <>
      <PageHeader header="Admin" />
      <PageSection>
        <PageParagraph as="div">
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-2 border border-forestDark"
            />
          </div>
          <div className="mt-2">
            <button>Login to Admin</button>
          </div>
        </PageParagraph>
      </PageSection>
    </>
  );
}
