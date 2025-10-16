import React from 'react'

const config = {
  logo: <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Renegade Roleplay</span>,
  
  chat: {
    link: 'https://discord.gg/renegaderoleplay',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    content: (
      <span>
        Copyright ©{' '}{new Date().getFullYear() }{' '}
        <a href="https://docs.renegaderp.net/" target="_blank">
          | Renegade Roleplay
        </a>
      </span>
    )
  },
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Renegade Rules',
      }
    },
    banner: {
      key: '2.0-release',
      text: (
        <a href="https://discordapp.com/channels/1083964697532973157/1269940627081003080" target="_blank">
          🎉 Renegade Roleplay 2.0 is released. Read more →
        </a>
      )
    },
    
}

export default config
