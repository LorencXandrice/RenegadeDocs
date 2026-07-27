import {
  DASHBOARD_URL,
  DISCORD_URL,
  STORE_URL,
} from '../lib/site'

export function RenegadeNavLinks() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
      <a className="renegade-nav-link" href={STORE_URL} target="_blank" rel="noopener noreferrer">
        Store
      </a>
      <a className="renegade-nav-link" href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
        Staff
      </a>
      <a className="renegade-nav-link" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
        Discord
      </a>
    </nav>
  )
}
