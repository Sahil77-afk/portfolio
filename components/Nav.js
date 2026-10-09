"use client";
import { useEffect, useState } from "react";
import { links } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const items = ["focus", "projects", "skills", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((id) => document.getElementById(id) && io.observe(document.getElementById(id)));
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="logo">Sahil77-afk</a>
        <button className="menu" aria-expanded={open} aria-controls="links" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="links" aria-label="Primary" className={open ? "open" : ""}>
          {items.map((id) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined} onClick={() => setOpen(false)}>
              {id}
            </a>
          ))}
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.resume} className="pill" download>Resume</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
