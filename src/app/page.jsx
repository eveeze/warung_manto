import Image from "next/image";
import Hero from "@/components/pages/Hero";
export default function Home() {
  return (
    <div className="max-w-screen-2xl min-h-dvh p-8 space-y-8 mx-auto">
      <Hero />
    </div>
  );
}
