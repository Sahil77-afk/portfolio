"use client";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import Preview from "./Preview";

export default function Projects() {
  const [i, setI] = useState(0);
  const p = projects[i];
  return (
    <section id="projects" className="wrap section" aria-labelledby="projects-h">
      <h2 id="projects-h" className="rv">Projects</h2>
      <div className="showcase rv">
        <div className="ptabs" role="tablist" aria-label="Projects">
          {projects.map((pr, n) => (
            <button key={pr.name} role="tab" id={`t${n}`} aria-selected={i === n} aria-controls="panel" onClick={() => setI(n)}>
              <span className="mono">0{n + 1}</span>
              <strong>{pr.name}</strong>
              <small>{pr.tagline}</small>
            </button>
          ))}
        </div>
        <article key={p.name} id="panel" role="tabpanel" aria-labelledby={`t${i}`} className="panel">
          <Preview name={p.name} />
          <h3>{p.name}</h3>
          <dl className="facts">
            <dt>Problem</dt><dd>{p.problem}</dd>
            <dt>Built</dt><dd>{p.built}</dd>
          </dl>
          <ul className="bul">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <ul className="tags">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          {p.live && <div className="row"><a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Open live demo</a></div>}
        </article>
      </div>
    </section>
  );
}
