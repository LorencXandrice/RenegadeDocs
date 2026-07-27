import {
  DISCORD_URL,
  HERO_IMAGE,
  SITE_BRAND,
  SITE_NAME,
  STORE_URL,
} from '../lib/site'

export function RenegadeHero() {
  return (
    <section className="hero-banner" style={{ position: 'relative', overflow: 'hidden', margin: '-1.5rem -1.5rem 2rem', borderBottom: '1px solid var(--border)' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src={HERO_IMAGE}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="gta-hero-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="echo-grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div className="gta-noise" style={{ position: 'absolute', inset: 0 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '48rem', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <p className="gta-eyebrow" style={{ color: 'var(--hero-accent, #8bb8ff)' }}>
          {SITE_NAME} {SITE_BRAND} · FiveM
        </p>

        <h1 className="gta-heading" style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--hero-fg, #f4f7fb)' }}>
          Welcome to Renegade Rules
        </h1>

        <p style={{ marginTop: '1rem', maxWidth: '36rem', marginInline: 'auto', lineHeight: 1.7, color: 'var(--hero-muted, rgb(244 247 251 / 0.78))' }}>
          Your guide to getting started, server bylaws, and community standards for immersive roleplay in Los Santos.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
          <a
            href="/start/connect"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.65rem 1.25rem',
              borderRadius: '4px',
              background: 'var(--gold)',
              color: 'var(--gold-foreground)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Get Started
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.65rem 1.25rem',
              borderRadius: '4px',
              border: '1px solid rgb(255 255 255 / 0.3)',
              background: 'rgb(255 255 255 / 0.1)',
              color: '#f4f7fb',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Join Discord
          </a>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.65rem 1.25rem',
              borderRadius: '4px',
              border: '1px solid rgb(255 255 255 / 0.3)',
              background: 'rgb(255 255 255 / 0.1)',
              color: '#f4f7fb',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Store
          </a>
        </div>
      </div>
    </section>
  )
}
