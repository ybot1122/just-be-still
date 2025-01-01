import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import checkAuth from "@/server_actions/checkAuth";
import { redirect } from "next/navigation";
import Tabs from "./Tabs";
import getPageData from "@/lib/getPageData";
import { getCloudinaryImages } from "@/server_actions/getCloudinaryImages";

export default async function AdminDashboard() {
  const isAuthed = await checkAuth();

  if (!isAuthed) {
    redirect("/");
  }

  const data = await getPageData();

  const images = await getCloudinaryImages("just-be-still-design");
  return (
    <>
      <PageHeader header="Admin Dashboard" />
      <PageSection>
        <Tabs events={data} images={images} />
      </PageSection>
    </>
  );
}
