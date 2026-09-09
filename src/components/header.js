import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GoogleCustomSearchBox from "./GoogleCustomSearchBox.jsx"
import iciLogo from "../images/ici-150w.png"
import employmentTile from "../images/ici-employment.png"
import educationTile from "../images/ici-education.png"
import communityTile from "../images/ici-community.png"
import healthcareTile from "../images/ici-healthcare.png"

const Header = () => (
  <header>
    <div className="ici-top-header d-none d-lg-block">
      <div className="container-xxl d-flex justify-content-between align-items-center">
        <ul className="list-inline ps-0 m-0 header-links d-flex">
          <li className="list-inline-item">
            <a
              href="https://lp.constantcontactpages.com/sl/VAsWN3m/ici"
              className="link dim dark-gray f6"
              title="Subscribe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </a>
          </li>
          <li className="list-inline-item">
            <Link
              to="/about/contact/"
              className="link dim dark-gray f6"
              title="Contact"
            >
              Contact
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="/donate/"
              className="link dim dark-gray f6"
              title="Donate"
            >
              Donate
            </Link>
          </li>
        </ul>

        <div className="ici-top-header-search">
          <GoogleCustomSearchBox />
        </div>
      </div>
    </div>

    <div className="container-xxl">
      <div className="ici-banner-wrap text-center">
        <h1 id="banner-text" className="title">
          ICI at the University of Massachusetts Boston
        </h1>
        <nav className="banner" aria-label="ICI focus areas">
          <Link
            className="banner__tile"
            to="/about/areas-of-emphasis/employment/"
          >
            <img src={employmentTile} alt="Employment" />
          </Link>
          <Link
            className="banner__tile"
            to="/about/areas-of-emphasis/education/"
          >
            <img src={educationTile} alt="Education" />
          </Link>
          <Link className="banner__tile banner__tile--ici" to="/" title="Home">
            <img src={iciLogo} alt="Institute for Community Inclusion" />
          </Link>
          <Link
            className="banner__tile"
            to="/about/areas-of-emphasis/community/"
          >
            <img src={communityTile} alt="Community Life" />
          </Link>
          <Link
            className="banner__tile"
            to="/about/areas-of-emphasis/healthcare/"
          >
            <img src={healthcareTile} alt="Health Care" />
          </Link>
        </nav>
        <h2 id="banner-tagline" className="tagline h5">
          <em>advancing access and opportunity for people with disabilities</em>
        </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
