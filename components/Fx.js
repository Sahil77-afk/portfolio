"use client";
import { useEffect } from "react";

export default function Fx() {
  useEffect(() => {
    const root = document.documentElement;

    function onMove(e) {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
      const card = e.target.closest?.(".tile, .panel");
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--x", e.clientX - box.left + "px");
      card.style.setProperty("--y", e.clientY - box.top + "px");
    }

    function onScroll() {
      const max = Math.max(1, root.scrollHeight - innerHeight);
      root.style.setProperty("--p", scrollY / max);
    }

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          reveal.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".rv").forEach((el) => reveal.observe(el));

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      reveal.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bar" aria-hidden="true" />
      <div className="spot" aria-hidden="true" />
    </>
  );
}
