import Footer from "@/components/footer";
import Header from "@/components/header";

import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-col items-center py-5">
          <div className="layout-content-container flex flex-col max-w-5xl flex-1 w-full px-4 sm:px-6 md:px-8">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
