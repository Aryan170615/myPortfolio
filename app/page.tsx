import About from "@/components/About";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Hero1 from "@/components/hero1";
import Navbar from "@/components/Navbar";
import Stack from "@/components/Stack";
import Work from "@/components/WorkSection";

// app/page.tsx
export default function Home() {
  return (
    <div className="h- w-screen bg-black">
      <Container>
        <Navbar />
        <main className="pt-20 px-4">
          <Hero1 />
          <About />
          <Stack />
          <Work />
          <Contact />
        </main>
        
      </Container>
    </div>
  );
}