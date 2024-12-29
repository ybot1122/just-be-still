import LoginToAdmin from "@/components/admin/LoginToAdmin";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";

export default function Admin() {
  return (
    <>
      <PageHeader header="Admin" />
      <PageSection>
        <LoginToAdmin />
      </PageSection>
    </>
  );
}
