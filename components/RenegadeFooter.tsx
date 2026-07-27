import {
  DASHBOARD_URL,
  DISCORD_URL,
  DOCS_URL,
  SITE_BRAND,
  SITE_NAME,
  STORE_URL,
} from '../lib/site'

export function RenegadeFooter() {
  return (
    <div className="renegade-footer">
      <div>
        <p className="renegade-footer-brand">
          {SITE_NAME} {SITE_BRAND}
        </p>
        <p style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
          © {new Date().getFullYear()} Renegade Roleplay
        </p>
      </div>
      <nav className="renegade-footer-links">
        <a href={DOCS_URL}>Docs</a>
        <a href={STORE_URL} target="_blank" rel="noopener noreferrer">Store</a>
        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord</a>
        <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">Staff</a>
      </nav>
    </div>
  )
}
