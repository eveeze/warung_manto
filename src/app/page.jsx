import Image from "next/image";
import Hero from "@/components/pages/Hero";
import Service from "@/components/pages/Service";
import Accordion from "@/components/pages/Accordion";
import Map from "@/components/pages/Map";
export default function Home() {
  return (
    <div className="max-w-screen-2xl p-8 space-y-8 mx-auto min-h-dvh">
      <Hero />
      <Service />
      <Accordion />
      <Map />
    </div>
  );
}
