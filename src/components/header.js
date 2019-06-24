import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/ici-150w.png'

const Header = ({ siteTitle }) => (
	<div >
    <nav className = "mobile-nav w-100 tc white  bg-dark-blue z-3 shadow-5" >
    <input type = "checkbox"
    id = "burger"
    className = "absolute top-2 right-1 dn" />
    <label htmlFor = "burger"
    className = "dn-l pointer absolute top-1 right-1" >
    <i className = "fa fa-bars white dib f2" />
    </label>
    <div className = "fl w-15-ns w-20 pa2" >


   <Link to="/"
   className = "dtc v-mid mid-gray link "
   ></Link>
 {/*   <
    a className = "dtc v-mid mid-gray link "
    href = "#"
    title = "Home" >
    <img 	  className = "dib mw-100 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={logo}
          />
          <
          /a>
          */}
    </div>
     <div className = "fl w-65-ns w-60 pa2" >
    <div className = "link dim white b f2-ns db mb2 f5-m"
    href = "index.md"
    title = "Home" >
    Institute
    for Community Inclusion </div> </div> <ul className = "overflow-hidden menu db-l w-100 list tc pl0 pt3 mv0 f3 fw3 f5-l" >
    {
        /*<li class="absolute top-1 static-l ph4 mh2 fw3 di-l pt1 pb3 pv3-l">
        <a href="/" class="white link">
        <img src="assets/ICIsquare_color_32x32.png" alt="dwyl heart logo" class="dib mw-100 h-auto">
        Institute for Community Inclusion
        </a>
        </li> */
    }
    <li className = "ph4  tl dn-l" >
    <Link to= "/about/"
    className = "white link" >
    About ICI </Link> </li>
    <li className = "ph4 di-l  tl pv0-l" >
    <a href = "/areas-of-emphasis/"
    className = "white link" >
    Areas of Emphasis
    </a> </li>
    <li className = "ph4 di-l  tl pv0-l" >
    <Link to= "/projects/"
    className = "white link" >
    Projects </Link>
    </li>
    <li className = "ph4 di-l  tl pv0-l" >
    <Link to= "/services/"
    className = "white link" >
    Services </Link> </li>
     <li className = "ph4 dib-l  tl pv0-l" >
    <Link to= "/resources/"
    className = "white link" >
    Resources </Link> </li> </ul>
    </nav>

    { /*----End Mobile Nav */ }

    <div className = "desktop-nav" >
    <div className = "cf mw8 center ph2-ns" >
    <div className = "fl w-15-ns w-20 pa2" >
    <Link to= "/" className = "dtc v-mid mid-gray link "
    title = "Home" >
  <img className = "dib mw-100 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={logo}
          />

    </Link> </div> <div className = "fl w-65-ns w-60 pa2" >
    <h1 className = "banner-text link dim dark-blue b f1-ns db mb2  f5 "
    href = "/"
    title = "Home" >
    Institute
    for Community Inclusion </h1>
    <span className = "banner-tagline f4-ns f6 f-subheadline dark-blue tracked-mega-ns " > { " " }
    PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES </span> </div> <div className = "fl w-20-ns w-20 pa2 " >
    <div className = "db dtc-l v-mid w-100 w-75-l" >
    <ul className = "flex-container space-between list pl0" >
    <li className = "flex-item dib" >
   <Link to= "/subscribe/" className="link dim dark-gray f6 dib "
    title = "Subscribe" >
    Subscribe { " " } </Link> </li> <li className = "flex-item dib" > { " " }
   <Link to="/about/contact/" className="link dim dark-gray f6 dib "
    title = "Contact" >
    Contact </Link> </li> <li className= "flex-item dib" > { " " }
    <Link to="/donate/"  className= "link dim dark-gray f6 dib "
    title = "Donate" >
    Donate </Link> </li> </ul> </div>
    {/*<div className = "k--group" >
    <input className = "k--input"
    type = "text"
    placeholder = "Search" />
    <button className = "k--button"
    type = "button" >
  SEARCH </button> </div>*/}
    <ul className = "social-links flex-container space-between list pl0" >
    <li className = "flex-item dib" > { " " } <a href = "https://twitter.com/ICInclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-2x fa-twitter" / >
    </a> </li> <li className = "flex-item dib" > { " " }
     <a href = "https://www.instagram.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab fa-2x fa-instagram" / >
    </a> </li> <li className = "flex-item dib" > { " " } <
    a href = "https://medium.com/@communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-2x fa-medium" / >
    </a> </li> <li className = "flex-item dib" > { " " } <a href = "https://www.facebook.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-2x fa-facebook-square" / >
    </a> </li> <li className = "flex-item dib" > { " " } <
    a href = "https://www.youtube.com/user/communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab fa-2x fa-youtube" / >
    </a> </li> </ul> </div> </div>
    <nav className = "db dt-l w-100 border-box ph5-l bg-dark-blue " >
    <ul className = "db dtc-l v-mid w-100 w-75-l tc" >
    <li className = "dib mr2 hide-child relative" > { " " }
    <Link to="/about/" className = "link white f6 f5-l dib mr3 mr4-l pa2 hover-bg-light-blue"
    title = "About" >
    ABOUT ICI </Link>
   {/* <ul className="menu list f6 absolute child ph1">
        <li className="bg-dark-blue bg-animate hover-bg-white">
          <Link to="/about/staff" className = "llink white hover-blue f6 f5-l dib pa2"
    title = "Staff" >
    Staff </Link>
        </li>
        <li className="bg-dark-blue bg-animate hover-bg-white">
           <Link to="/about/contact" className = "link white hover-blue f6 f5-l dib pa2"
    title = "Contact" >
    Contact </Link>
        </li>
</ul>*/}
    </li>

     <li className = "dib mr2" > { " " }  <Link to= "/areas-of-emphasis/" className = "link white f6 f5-l dib mr3 mr4-l pa2 hover-bg-light-blue"
    title = "Areas of Emphasis" >
    AREAS OF EMPHASIS </Link>
    </li>
    <li className = "dib mr2"> { " " }
  	  <Link to= "/projects/" className = "link white f6 f5-l dib mr3 mr4-l pa2 hover-bg-light-blue"
		title = "Projects" >
    PROJECTS </Link> </li>
    <li className = "dib mr2" > { " " } <Link to= "/services/"  className = "link white f6 f5-l dib mr3 mr4-l pa2 hover-bg-light-blue"
    title = "Services" >
    SERVICES </Link>
    </li>
    <li className = "dib mr2" > { " " }
  <Link to="/resources/"  className = "link white f6 f5-l dib pa2 hover-bg-light-blue"
    title = "Resources" >
    RESOURCES </Link>
    </li>
    </ul> </nav> </div>
{/* <div className = "vh-100 dt o-80 w-100 tc bg-dark-gray white cover"
    style = {{ background: "url(../images/boston-skyline.jpg) no-repeat center"}} >

 <div>
     <BgImage
      title="campus"
      className = "vh-100 dt o-80 w-100 tc bg-dark-gray white cover"
      fluid={data.campus.childImageSharp.fluid}
      overlayColor="#04040454"
    >
      <h2 style={{ color: "white" }}>Look at me!</h2>
    </BgImage>
    </div>

    <div className = "dtc v-mid" >
    <header className = "tc ph4 bg-white o-60" >
    <h1 className = "f3 f2-m f1-l fw2 dark-blue mv3" >
    <em > PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES </em>
     </h1>
    </header>
    </div>
    </div>*/}
    </div>
)


Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};



export default Header;
