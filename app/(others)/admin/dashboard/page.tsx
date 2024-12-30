import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import checkAuth from "@/server_actions/checkAuth";
import { redirect } from "next/navigation";
import Tabs from "./Tabs";

export default async function AdminDashboard() {
  const isAuthed = await checkAuth();

  if (!isAuthed) {
    redirect("/");
  }

  return (
    <>
      <PageHeader header="Admin Dashboard" />
      <PageSection>
        <Tabs />
      </PageSection>
    </>
  );
}
