"use client";

export default function Error({ reset }) {
  return (
    <main className="wrap" style={{ paddingTop: "30vh" }}>
      <h1>Something went wrong.</h1>
      <button className="btn" onClick={reset}>Reload section</button>
    </main>
  );
}
