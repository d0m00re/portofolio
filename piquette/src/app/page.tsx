import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project/Project";
import Skill from "@/components/Skill/Skill";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 sm:pb-0">
      <Hero />
     {/*  <Skill /> */}


    {/* test things */}
    <div style={{ borderRadius: "50% 50% 25% 75% / 100% 100% 0% 0%" }} className="bg-green-500 w-screen z-20 h-32 mt-24"></div>

        <Project />
      
     { /* <Experience /> */ }
    </main>
  );
}
