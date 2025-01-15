import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavLinks from "./NavLinks"
import "../styles/custom.css"
import "../components/nav.css"

const Navbar = ({ siteTitle = `` }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          {siteTitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <NavLinks />
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

export default Navbar
