import Image from "next/image";
import HomeBanner from "./components/HomeBanner";

export const metadata = {
  title: "Home | abdullahMart",
  description: "This is the Home page for the website.",
};

export default function Home() {
  return (
    <section className="padding my-10">
      <HomeBanner/>
    </section>
  );
}
