import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import checkAuth from "@/server_actions/checkAuth";
import { redirect } from "next/navigation";
import Tabs from "./Tabs";
import getPageData from "@/lib/getPageData";

export default async function AdminDashboard() {
  const isAuthed = await checkAuth();

  if (!isAuthed) {
    redirect("/");
  }

  const data = await getPageData();

  return (
    <>
      <PageHeader header="Admin Dashboard" />
      <PageSection>
        <Tabs events={data} />
      </PageSection>
    </>
  );
}
