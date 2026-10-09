import { skills, links } from "@/data/portfolio";

const focus = [
  ["Real-time systems", "Socket.io and Redis pub/sub keep workspaces in sync.", "wide"],
  ["Smart-contract security", "Pull payments, ReentrancyGuard, Solidity 0.8.20 checks.", ""],
  ["LLM integration", "OpenAI and Mistral AI, including streaming responses.", ""],
  ["Auth and APIs", "JWT refresh tokens, GitHub OAuth, role-based access.", "wide"],
];

export function Focus() {
  return (
    <section id="focus" className="wrap section" aria-labelledby="focus-h">
      <h2 id="focus-h" className="rv">What I build</h2>
      <div className="bento">
        {focus.map(([t, d, w]) => (
          <div key={t} className={`tile rv ${w}`}><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="wrap section" aria-labelledby="skills-h">
      <h2 id="skills-h" className="rv">Stack</h2>
      <div className="srows">
        {skills.map((s) => (
          <div key={s.group} className="srow rv">
            <h3>{s.group}</h3>
            <ul className="tags">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="wrap section" aria-labelledby="contact-h">
      <div className="cta rv">
        <h2 id="contact-h">Have a role or a project in mind?</h2>
        <a className="mail" href={`mailto:${links.email}`}>{links.email}</a>
        <div className="row">
          <a className="btn primary" href={`mailto:${links.email}`}>Send an email</a>
          <a className="btn glass" href={links.resume} download>Download resume</a>
          <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wrap foot">
      <span>&copy; {new Date().getFullYear()} Sahil Patil</span>
      <nav aria-label="Social">
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}
