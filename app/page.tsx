import dynamic from "next/dynamic";
const HomePageMain = dynamic(() => import("@/components/HomePageMain"), {
  ssr: false,
});

export default function Home() {
  return <HomePageMain />;
}
