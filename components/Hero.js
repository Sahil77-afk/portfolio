import { hero, links } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero wrap">
      <p className="eyebrow">Full-stack developer</p>
      <h1>Sahil Patil</h1>
      <p className="role">{hero.headline}</p>
      <p className="lead">{hero.intro}</p>
      <div className="row">
        <a className="btn primary" href="#projects">View projects</a>
        <a className="btn" href={`mailto:${links.email}`}>Get in touch</a>
        <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
