import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import checkAuth from "@/server_actions/checkAuth";
import { redirect } from "next/navigation";
import Tabs from "./Tabs";
import getPageData from "@/lib/getPageData";
import { ImageChooserProvider } from "@/context/ImageChooserContext";
import { getCloudinaryImages } from "@/server_actions/getCloudinaryImages";
import ChangesSubmitted from "./ChangesSubmitted";

export default async function AdminDashboard() {
  const isAuthed = await checkAuth();

  if (!isAuthed) {
    redirect("/");
  }

  const data = await getPageData("events");
  let test;
  if (process.env.VERCEL_ENV !== "production") {
    test = await getPageData("test");
  }

  const images = await getCloudinaryImages("just-be-still-design");
  return (
    <>
      <PageHeader header="Admin Dashboard" />
      <PageSection>
        <ImageChooserProvider>
          <Tabs
            events={data}
            test={test}
            images={images}
            ChangesSubmittedComponent={<ChangesSubmitted />}
          />
        </ImageChooserProvider>
      </PageSection>
    </>
  );
}
