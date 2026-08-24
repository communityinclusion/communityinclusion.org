import wrapWithProvider from "./wrap-with-provider"
import './src/styles/styles.scss'
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css'
require("prismjs/themes/prism-solarizedlight.css")

export const wrapRootElement = wrapWithProvider

const WISTIA_PLAYER_SRC = "https://fast.wistia.com/player.js"

let wistiaPlayerRequested = false

// Markdown page bodies render through dangerouslySetInnerHTML (see
// src/templates/pageTemplate.js), and scripts inserted that way never execute.
// On client-side navigation the embeds' own inline player.js tags land in the
// DOM inert, so the <wistia-player> custom element is never defined and the
// embed's :not(:defined) rule keeps painting the blurred swatch. Load player.js
// ourselves on any route that actually contains an embed.
const ensureWistiaPlayer = () => {
  if (wistiaPlayerRequested) return
  if (!window.customElements) return
  // Already defined by a parser-inserted copy on a full page load.
  if (window.customElements.get("wistia-player")) return
  // Deliberately not gated on a DOM query for the script tag: the inert inline
  // copies are present in exactly the navigations this needs to fix.
  if (!document.querySelector("wistia-player")) return

  wistiaPlayerRequested = true
  const script = document.createElement("script")
  script.src = WISTIA_PLAYER_SRC
  script.async = true
  document.head.appendChild(script)
}

// onRouteUpdate can fire before the new route's DOM is committed.
const scheduleWistiaCheck = () => {
  if (typeof window === "undefined") return
  window.requestAnimationFrame(ensureWistiaPlayer)
}

export const onInitialClientRender = scheduleWistiaCheck
export const onRouteUpdate = scheduleWistiaCheck
