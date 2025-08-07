import { Header } from "../components/home/header";
import { Hero } from "../components/home/hero";
import { About } from "../components/home/about";
import { Skills } from "../components/home/skills";
import { Projects } from "../components/home/projects";
import { Contact } from "../components/home/contact";
import { Footer } from "../components/home/footer";
import { ScrollProgress } from "../components/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
