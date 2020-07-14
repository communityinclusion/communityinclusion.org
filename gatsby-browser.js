/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/layouts/tachyons/css/tachyons.css"
import "./src/layouts/custom.css"
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css'
require("prismjs/themes/prism-solarizedlight.css")

{/* 
const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }
  
  export const onClientEntry = () => {
    window.onload = () => {
      addScript("https://code.jquery.com/jquery-3.3.1.min.js")
      addScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js")
      addScript("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js")
    }
  }

  */}