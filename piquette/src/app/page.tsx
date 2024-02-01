import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project/Project";
import Skill from "@/components/Skill/Skill";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-24 items-center justify-between p-4 sm:p-24">
      <Hero />
     {/*  <Skill /> */}
      <Project />
     { /* <Experience /> */ }
    </main>
  );
}
