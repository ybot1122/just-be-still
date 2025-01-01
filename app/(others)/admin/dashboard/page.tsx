import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import checkAuth from "@/server_actions/checkAuth";
import { redirect } from "next/navigation";
import Tabs from "./Tabs";
import getPageData from "@/lib/getPageData";
import { getCloudinaryImages } from "@/server_actions/getCloudinaryImages";

const temp = [
  {
    asset_id: "8f42da78f4a3879aed2273db8877603c",
    public_id: "just-be-still-design/events/posters/july2024_xrnzb4",
    format: "png",
    version: 1735604300,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-31T00:18:20Z",
    bytes: 2199025,
    width: 1430,
    height: 1851,
    folder: "just-be-still-design/events/posters",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1735604300/just-be-still-design/events/posters/july2024_xrnzb4.png",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1735604300/just-be-still-design/events/posters/july2024_xrnzb4.png",
  },
  {
    asset_id: "d514db038a8e7697f532fe06d8a6ddca",
    public_id: "just-be-still-design/events/posters/fall2024_vqcwe0",
    format: "jpg",
    version: 1735604300,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-31T00:18:20Z",
    bytes: 419855,
    width: 1236,
    height: 1600,
    folder: "just-be-still-design/events/posters",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1735604300/just-be-still-design/events/posters/fall2024_vqcwe0.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1735604300/just-be-still-design/events/posters/fall2024_vqcwe0.jpg",
  },
  {
    asset_id: "b02c4e1777a86fde9b9dc332916c8996",
    public_id: "just-be-still-design/events/images/pumpkin1_yshby3",
    format: "jpg",
    version: 1735604299,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-31T00:18:19Z",
    bytes: 249753,
    width: 1200,
    height: 1600,
    folder: "just-be-still-design/events/images",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1735604299/just-be-still-design/events/images/pumpkin1_yshby3.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1735604299/just-be-still-design/events/images/pumpkin1_yshby3.jpg",
  },
  {
    asset_id: "022f388d0d82ecc8cf917bf9f431a3a3",
    public_id: "just-be-still-design/events/images/pumpkin3_vieiey",
    format: "jpg",
    version: 1735604299,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-31T00:18:19Z",
    bytes: 291213,
    width: 1200,
    height: 1600,
    folder: "just-be-still-design/events/images",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1735604299/just-be-still-design/events/images/pumpkin3_vieiey.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1735604299/just-be-still-design/events/images/pumpkin3_vieiey.jpg",
  },
  {
    asset_id: "2e942ba2622b73026f5a2887ec4786c5",
    public_id: "just-be-still-design/events/images/pumpkin2_wxhhet",
    format: "jpg",
    version: 1735604299,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-31T00:18:19Z",
    bytes: 197411,
    width: 1200,
    height: 1600,
    folder: "just-be-still-design/events/images",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1735604299/just-be-still-design/events/images/pumpkin2_wxhhet.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1735604299/just-be-still-design/events/images/pumpkin2_wxhhet.jpg",
  },
  {
    asset_id: "9d02e8c84afba3ee98502b8ded9fecf0",
    public_id: "its-probably-spicy/img-20241221-wa0022",
    format: "jpg",
    version: 1734813599,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-21T20:39:59Z",
    bytes: 188693,
    width: 2016,
    height: 1512,
    folder: "its-probably-spicy",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1734813599/its-probably-spicy/img-20241221-wa0022.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1734813599/its-probably-spicy/img-20241221-wa0022.jpg",
  },
  {
    asset_id: "8f9c86b99c49f9b6bc714678aea517f4",
    public_id: "its-probably-spicy/img-20241221-wa0016",
    format: "jpg",
    version: 1734813590,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-21T20:39:50Z",
    bytes: 231741,
    width: 2016,
    height: 1512,
    folder: "its-probably-spicy",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1734813590/its-probably-spicy/img-20241221-wa0016.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1734813590/its-probably-spicy/img-20241221-wa0016.jpg",
  },
  {
    asset_id: "969e971b9823da3adf5c64eef833593b",
    public_id: "its-probably-spicy/img-20241221-wa0027",
    format: "jpg",
    version: 1734813563,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-21T20:39:23Z",
    bytes: 188356,
    width: 2016,
    height: 1512,
    folder: "its-probably-spicy",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1734813563/its-probably-spicy/img-20241221-wa0027.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1734813563/its-probably-spicy/img-20241221-wa0027.jpg",
  },
  {
    asset_id: "086803110652fe6f6873795c22689242",
    public_id: "its-probably-spicy/20241103_152837",
    format: "jpg",
    version: 1734812604,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-21T20:23:24Z",
    bytes: 1263160,
    width: 4032,
    height: 3024,
    folder: "its-probably-spicy",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1734812604/its-probably-spicy/20241103_152837.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1734812604/its-probably-spicy/20241103_152837.jpg",
  },
  {
    asset_id: "45db3fda2a42fb3c551ffdf8bd3c0069",
    public_id: "its-probably-spicy/20241103_152012",
    format: "jpg",
    version: 1734812592,
    resource_type: "image",
    type: "upload",
    created_at: "2024-12-21T20:23:12Z",
    bytes: 1905550,
    width: 4032,
    height: 3024,
    folder: "its-probably-spicy",
    url: "http://res.cloudinary.com/dryy6uo6k/image/upload/v1734812592/its-probably-spicy/20241103_152012.jpg",
    secure_url:
      "https://res.cloudinary.com/dryy6uo6k/image/upload/v1734812592/its-probably-spicy/20241103_152012.jpg",
  },
];

export default async function AdminDashboard() {
  const isAuthed = await checkAuth();

  if (!isAuthed) {
    redirect("/");
  }

  const data = await getPageData();

  // const images = await getCloudinaryImages("");
  const images = temp;
  return (
    <>
      <PageHeader header="Admin Dashboard" />
      <PageSection>
        <Tabs events={data} images={images} />
      </PageSection>
    </>
  );
}
