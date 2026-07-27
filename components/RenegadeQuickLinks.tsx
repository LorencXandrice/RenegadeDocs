import { DISCORD_URL, STORE_URL } from '../lib/site'

export function RenegadeQuickLinks() {
  return (
  <div className="renegade-link-grid">
    <a className="echo-card renegade-link-card" href="/start/connect">
      <strong>Getting Started</strong>
      <span>Connect to the server and create your character.</span>
    </a>
    <a className="echo-card renegade-link-card" href="/icrules/general">
      <strong>IC Bylaws</strong>
      <span>In-character rules for life in Los Santos.</span>
    </a>
    <a className="echo-card renegade-link-card" href="/oocrules/community">
      <strong>OOC Rules</strong>
      <span>Community standards and server expectations.</span>
    </a>
    <a className="echo-card renegade-link-card" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
      <strong>Discord</strong>
      <span>Join the community and stay up to date.</span>
    </a>
    <a className="echo-card renegade-link-card" href={STORE_URL} target="_blank" rel="noopener noreferrer">
      <strong>Store</strong>
      <span>Support the server and unlock perks.</span>
    </a>
    <a className="echo-card renegade-link-card" href="/about">
      <strong>About</strong>
      <span>Meet the team behind Renegade Roleplay.</span>
    </a>
  </div>
  )
}
