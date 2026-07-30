import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GoogleCustomSearchBox from "./GoogleCustomSearchBox.jsx"
import logo from "../images/ici-150w.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faTumblrSquare,
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

// import Search from './search.js'
// import SearchForm from "./searchForm"
// <SearchForm className="col-lg-12" /> //

const Header = () => (
  <header>
    <div className="container-xxl header">
      <div className="row">
        <div className="col-lg-9 col-sm-12 col-12 mt-2 d-flex site-logo-col">
          <Link
            to="/"
            className = "d-flex align-items-center w-100 mid-gray text-decoration-none link site-logo-link"
            title="Home"
          >
            <img className="site-logo-img" alt="ICI" src={logo} />
            <span className = "blue fw-bold flex-grow-1 text-center site-logo-text" >
             ICI at the University of
              <br />
              Massachusetts Boston
            </span>
          </Link>
        </div>

        <div className="col-lg-3  d-none d-lg-block  p-2">
          <div className="row">
            <ul className="col-lg-12 list-inline ps-0 m-0 mb-2 header-links d-flex justify-content-around">
              <li className="flex-item list-inline-item pr1">
                <a
                  href="https://lp.constantcontactpages.com/sl/VAsWN3m/ici"
                  className="link dim dark-gray f6  "
                  title="Subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe{" "}
                </a>{" "}
              </li>{" "}
              <li className="flex-item list-inline-item   pr1 pl1">
                {" "}
                <Link
                  to="/about/contact/"
                  className="link dim dark-gray f6  "
                  title="Contact"
                >
                  Contact{" "}
                </Link>{" "}
              </li>
              <li className="flex-item list-inline-item  ps-1">
                {" "}
                <Link
                  to="/donate/"
                  className="link dim dark-gray f6  "
                  title="Donate"
                >
                  Donate{" "}
                </Link>{" "}
              </li>
            </ul>

            <ul className="col-lg-12 social-links d-flex justify-content-around list-inline pl0 m-0 mb-2">
              <li className="list-inline-item flex-item ">
                {" "}
                <a
                  href="https://twitter.com/ICInclusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>{" "}
              </li>
              <li className="list-inline-item flex-item ">
                {" "}
                <a
                  href="https://www.instagram.com/communityinclusion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>{" "}
              </li>{" "}
              <li className="list-inline-item flex-item  pl1">
                {" "}
                <a
                  href="https://communityinclusion.tumblr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tumblr"
                >
                  <FontAwesomeIcon icon={faTumblrSquare} size="2x" />
                </a>{" "}
              </li>{" "}
              <li className="list-inline-item flex-item  pl1">
                {" "}
                <a
                  href="https://www.facebook.com/communityinclusion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                </a>{" "}
              </li>{" "}
              <li className="list-inline-item flex-item  pl1">
                {" "}
                <a
                  href="https://www.youtube.com/user/communityinclusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>{" "}
              </li>{" "}
            </ul>
            <div>
              <GoogleCustomSearchBox />
            </div>
          </div>
        </div>
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
