import { SITE_BRAND, SITE_NAME } from '../lib/site'

export function RenegadeLogo() {
  return (
    <span className="renegade-logo">
      <span className="renegade-logo-mark">R</span>
      <span className="renegade-logo-text">
        <span className="renegade-logo-name">{SITE_NAME}</span>
        <span className="renegade-logo-brand">{SITE_BRAND}</span>
      </span>
    </span>
  )
}
