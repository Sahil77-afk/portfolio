const cols = [["To do", 2], ["In progress", 3], ["Done", 2]];

export default function Preview({ name }) {
  if (name === "DevFlow")
    return (
      <div className="pv kanban">
        {cols.map(([t, n]) => (
          <div key={t}><b>{t}</b>{Array.from({ length: n }, (_, i) => <span key={i} style={{ "--w": `${90 - i * 18}%` }} />)}</div>
        ))}
        <em className="chip">AI review</em><em className="chip c2">live</em>
      </div>
    );
  if (name === "NeoMarket")
    return (
      <div className="pv nft">
        <div className="art" />
        <div><b>Timed auction</b><span className="mono">Ends in 02:14:09</span><span className="mono">Creator royalty enforced on-chain</span><em className="chip static">Place bid</em></div>
      </div>
    );
  return (
    <div className="pv chat">
      <div className="tabs"><em>Gita</em><em>Bible</em><em>Quran</em></div>
      <p className="u">Ask for guidance</p>
      <p className="a"><span style={{ "--w": "92%" }} /><span style={{ "--w": "78%" }} /><span style={{ "--w": "55%" }} /></p>
    </div>
  );
}
