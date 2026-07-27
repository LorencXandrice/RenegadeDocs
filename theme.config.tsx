import React from 'react'
import { RenegadeFooter } from './components/RenegadeFooter'
import { RenegadeLogo } from './components/RenegadeLogo'
import { RenegadeNavLinks } from './components/RenegadeNavLinks'
import { DISCORD_URL, SITE_DESCRIPTION, SITE_TITLE } from './lib/site'

const config = {
  logo: <RenegadeLogo />,
  project: {
    link: 'https://github.com/LorencXandrice/RenegadeDocs',
  },
  chat: {
    link: DISCORD_URL,
  },
  docsRepositoryBase: 'https://github.com/LorencXandrice/RenegadeDocs',
  titleSuffix: ` – ${SITE_TITLE}`,
  faviconGlyph: 'R',
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'renegade-theme',
  },
  backgroundColor: {
    dark: 'rgb(7, 9, 15)',
    light: 'rgb(238, 241, 245)',
  },
  color: {
    hue: { dark: 218, light: 220 },
    saturation: { dark: 100, light: 90 },
    lightness: { dark: 65, light: 45 },
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta name="theme-color" content="#07090f" />
    </>
  ),
  navbar: {
    extraContent: <RenegadeNavLinks />,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    content: <RenegadeFooter />,
  },
  banner: {
    key: '2.0-release',
    dismissible: true,
    text: (
      <span className="renegade-banner">
        <a href="https://discordapp.com/channels/1083964697532973157/1269940627081003080" target="_blank" rel="noopener noreferrer">
          Renegade Roleplay 2.0 is live — read the announcement →
        </a>
      </span>
    ),
  },
}

export default config
