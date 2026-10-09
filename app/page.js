import Nav from "@/components/Nav";
import Fx from "@/components/Fx";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Focus, Skills, Contact, Footer } from "@/components/Rest";
import { site, links } from "@/data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Full-Stack Developer",
  email: `mailto:${links.email}`,
  url: site.url,
};

export default function Home() {
  return (
    <>
      <a className="skip" href="#focus">Skip to content</a>
      <Fx />
      <Nav />
      <main>
        <Hero />
        <Focus />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
