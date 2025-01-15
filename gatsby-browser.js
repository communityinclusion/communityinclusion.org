import wrapWithProvider from "./wrap-with-provider"
import "./src/styles/styles.scss"
import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/umd/popper.min.js"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"
require("prismjs/themes/prism-solarizedlight.css")

export const wrapRootElement = wrapWithProvider
