import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OpenHours from "@/components/OpenHours";
import Services from "@/components/Services";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const photos = [
  { img: "/moving-card-1.jpg" },
  { img: "/moving-card-2.jpeg" },
  { img: "/moving-card-3.jpeg" },
  { img: "/moving-card-4.jpeg" },
  { img: "/moving-card-5.jpeg" },
  { img: "/moving-card-6.jpg" },
  { img: "/moving-card-7.jpg" },
  { img: "/moving-card-8.jpg" },
  { img: "/moving-card-9.jpg" },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-5" id="hem">
      <Hero />
      <div className="flex w-full flex-col justify-between gap-7 p-5 md:flex-row">
        <Services />
        <OpenHours />
      </div>

      <InfiniteMovingCards items={photos} speed="slow" direction="left" />
      <About />
      <Footer />
    </div>
  );
}
