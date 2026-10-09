import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import iciLogo from "../images/ici-150w.png"
import employmentTile from "../images/ici-emp-new.png"
import educationTile from "../images/ici-education-new.png"
import communityTile from "../images/ici-community-new.png"
import healthcareTile from "../images/ici-health-new.png"

const Header = ({ isHome }) => {
  // Only the home page uses the banner text as its h1; other pages supply their own
  const BannerText = isHome ? "h1" : "p"
  return (
    <header>
      <div className="container-xxl">
        <div className="ici-banner-wrap text-center">
          <BannerText id="banner-text" className="title banner-title">
            ICI at the University of Massachusetts Boston
          </BannerText>
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
            <Link
              className="banner__tile banner__tile--ici"
              to="/"
              title="Home"
            >
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
          <p id="banner-tagline" className="tagline h5">
            <em>
              advancing access and opportunity for people with disabilities
            </em>
          </p>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isHome: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  isHome: false,
}

export default Header
