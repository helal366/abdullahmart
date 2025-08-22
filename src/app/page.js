import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import HomeFavorites from "./components/HomeFavorites";

export const metadata = {
  title: "Home | abdullahMart",
  description: "This is the Home page for the website.",
};

export default function Home() {
  return (
    <section className="padding py-10">
      <HomeBanner/>
      <HomeFavorites/>
    </section>
  );
}
