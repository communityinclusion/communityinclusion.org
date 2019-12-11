import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/ici-150w.png'

const Header = ({ siteTitle }) => (
	<div>
  

    <div className = "header" >
    <div className = "cf mw8 center ph2-ns" >
    <div className = "fl w-15-ns w-20  pa2" >
    <Link to= "/" className = "dtc v-mid mid-gray link "
    title = "Home" >
  <img className = "dib mw-80 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={logo}
          />

    </Link> </div> 
    
    <div className = "fl w-60-ns w-65-m w-70 pa2" >
    <h1 className = "banner-text link dim dark-blue b  f4 f2-m f1-l   db mb2 mt0-ns mt3 center "
    href = "/"
    title = "Home" >
    Institute
    for Community Inclusion </h1>
    <span className = "banner-tagline f5-m f4-ns dn db-ns f-subheadline dark-blue tracked-mega-l " > { " " }
    PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES </span> </div> 
    
    <div className = "fl w-15-ns w-20 dn db-l pa2 " >
    <div className = "db dtc-l v-mid w-100 w-75-l" >
    <ul className = "flex-container space-between list pl0" >
    <li className = "flex-item dib br pr1" >
   <Link to= "/subscribe/" className="link dim dark-gray f6 dib "
    title = "Subscribe" >
    Subscribe { " " } </Link> </li> <li className = "flex-item dib br pr1 pl1" > { " " }
   <Link to="/about/contact/" className="link dim dark-gray f6 dib "
    title = "Contact" >
    Contact </Link> </li> <li className= "flex-item dib pl1" > { " " }
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
    </a> </li> <li className = "flex-item dib" > { " " } 
    <a href = "https://medium.com/@communityinclusion"
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
     </div>

    </div>
)


Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};



export default Header;
