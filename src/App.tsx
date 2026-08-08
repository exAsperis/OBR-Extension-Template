import { StatusPanel } from "./components/StatusPanel";
import { EXTENSION_NAME } from "./constants";
import { useOwlbear } from "./hooks/useOwlbear";

export default function App() {
  const { status, role, playerName, sceneReady, error, refreshing, refresh } = useOwlbear();

  if (status === "connecting") {
    return <StatusPanel title="Connecting to Owlbear Rodeo" message="Waiting for the room SDK to become ready…" />;
  }

  if (status === "error") {
    return <StatusPanel title="Extension unavailable" message={error ?? "Unable to initialize the extension."} onRetry={() => void refresh()} />;
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="title-row">
          <div>
            <span className="eyebrow">Owlbear Rodeo extension</span>
            <h1>{EXTENSION_NAME}</h1>
          </div>
          <button className="secondary-button" disabled={refreshing} onClick={() => void refresh()}>
            {refreshing ? "Refreshing…" : "Refresh"}
          </button>
        </div>
        <p className="intro">Replace this starter content with your extension interface.</p>
      </section>

      <section className="content-card" aria-labelledby="room-state-heading">
        <span className="eyebrow">SDK connection</span>
        <h2 id="room-state-heading">Current room state</h2>
        <dl className="facts">
          <div><dt>Player</dt><dd>{playerName || "Unnamed player"}</dd></div>
          <div><dt>Role</dt><dd>{role}</dd></div>
          <div><dt>Scene</dt><dd>{sceneReady ? "Ready" : "Not open"}</dd></div>
        </dl>
        {!sceneReady && <div className="notice" role="status">Scene-dependent controls should remain disabled until a scene is open.</div>}
      </section>

      <footer>Starter template · React · TypeScript · Vite</footer>
    </main>
  );
}
