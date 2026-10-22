import React from "react"
import { Link } from "gatsby"
import umbcombo from "../images/ICI_UMB_bch-combo_v2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faTumblrSquare,
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

// Static HTML carries the build year; update to the visitor's year after hydration
const CopyrightYear = () => {
  const [year, setYear] = React.useState(new Date().getFullYear())
  React.useEffect(() => setYear(new Date().getFullYear()), [])
  return year
}

const Footer = () => (
  <footer aria-label="Footer">
    <div className="mt-5 pt-3 bg-dark-blue">
      <div className="footer-top container-xxl	 px-3 text-white">
        <div className="row px-2-ns">
          <div className="col-md-4 col-sm-12 p-2 ">
            <h2 className="fs-4 border-bottom border-light py-0 lh-lg text-uppercase ">
              Contact
            </h2>
            <div className="d-inline-block-ns">
              <address>
                ICI at UMass Boston
                <br />
                UMass Boston
                <br />
                100 Morrissey Blvd.
                <br />
                Wheatley Hall, 4th Floor - Office 173
                <br />
                Boston, Massachusetts 02125
                <br />
                Voice: (617) 287-4300
                <br />
                TTY: (617) 287-4350
                <br />
                Email: <a href="mailto:ici@umb.edu">ici@umb.edu</a>
                <br />
                &nbsp;
              </address>{" "}
            </div>
          </div>
          <div className="col-md-4 col-sm-12 p-2 ">
            <h2 className="fs-4 border-bottom border-light pv-0 lh-lg text-uppercase">
              Links
            </h2>
            <ul className="align-middle w-100 w-75-l list pl0 list-unstyled">
              <li>
                {" "}
                <Link
                  to="/about/"
                  className="link  whited-inline-block"
                >
                  About ICI
                </Link>
              </li>
              <li>
                <Link
                  to="/about/areas-of-emphasis"
                  className="link white d-inline-block"
                >
                  Areas of Emphasis
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/projects"
                  className="link white d-inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/services"
                  className="link white d-inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                {" "}
                <a
                  href="https://lp.constantcontactpages.com/sl/VAsWN3m/ici"
                  className="link white d-inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Subscribe"
                >
                  Subscribe<span className="visually-hidden"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                {" "}
                <Link
                  to="/about/contact"
                  className="link white d-inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/jobs"
                  className="link white d-inline-block"
                >
                  Jobs at ICI
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/donate"
                  className="link white d-inline-block"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 p-2 ">
            <h2 className="fs-4 border-bottom border-light w-100 py-0  lh-lg text-uppercase">
              Social
            </h2>

            <ul className="social-links text-white list-inline ps-0">
              <li className="list-inline-item pe-2">
                {" "}
                <a
                  href="https://twitter.com/ICInclusion"
                  title="ICI Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>{" "}
              </li>{" "}
              <li className="list-inline-item pe-2">
                {" "}
                <a
                  href="https://www.instagram.com/communityinclusion/"
                  title="Community Inclusion Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>{" "}
              </li>
              <li className="list-inline-item pe-2">
                {" "}
                <a
                  href="https://www.facebook.com/communityinclusion/"
                  title="Community Inclusion Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                </a>{" "}
              </li>{" "}
              <li className="list-inline-item pe-2">
                {" "}
                <a
                  href="https://communityinclusion.tumblr.com/"
                  target="_blank"
                  title="ICI Tumblr"
                  rel="noopener noreferrer"
                  aria-label="Tumblr (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faTumblrSquare} size="2x" />
                </a>{" "}
              </li>
              <li className="list-inline-item pe-2">
                {" "}
                <a
                  href="https://www.youtube.com/user/communityinclusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>{" "}
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className = "footer-copyright umb_blue border-top border-info border-2">
      <div className="container-xxl	text-white w-100 bt align-middle  py-2">
        <div className="row pt-3 gy-4">
          <div className="col-md-4  align-middle ">
            <img
              className="img-fluid d-inline-block"
              alt="Institute for Community Inclusion"
              src={umbcombo}
            />
          </div>
          <div className="col-md-5 align-middle px-3">
            <p className="white small">
              &copy;{" "}
              <CopyrightYear />{" "}
              The ICI was founded in 1967, and
              is a program at the University of Massachusetts Boston and Boston
              Children’s Hospital. The ICI is a University Center for Excellence
              in Developmental Disabilities, part of the national network
              started by President John F. Kennedy. OPE0075339
            </p>
          </div>

          <div className="col-md-3 v-mid px-3">
            <ul className="list-inline ">
              <li className="list-inline-item flex-fill pe-2 border-end border-light">
                <Link to="/about/privacy/">
                  Privacy{" "}
                </Link>{" "}
              </li>
              <li className="list-inline-item flex-fill border-end border-light pe-2 ps-2">
                {" "}
                <Link to="/about/accessibility/">
                  Accessibility{" "}
                </Link>{" "}
              </li>
              <li className="list-inline-item flex-fill ps-1">
                {" "}
                <Link to="/donate/">
                  Donate{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
