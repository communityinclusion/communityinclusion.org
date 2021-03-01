import { Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/ici-150w.png'
// import Search from './search.js'
import SearchForm from "./searchForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faInstagram,
    faTumblrSquare,
    faFacebookSquare,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'


const Header = () => (

	<div>
  

    <div className = "header mw9 center" >
    <div className = "cf flex justify-around ph3 ph4-m ph4-l pt3-ns pb3-ns" >
    <div className = "fl w-15 header-first mt2" >
    <Link to= "/" className = "dtc v-mid mid-gray link "
    title = "Home" >
  <img className = "dib mw-80 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={logo}
          />

    </Link> 
    </div> 
    
    <div className = "fl pl2 header-second" >
    <p id="banner-text" className = "dark-blue mb2 mt0-ns mt3" >
    Institute
    for Community Inclusion </p>
    <span id= "banner-tagline" className = "f6 f5-m f4-l dn db-ns f-subheadline dark-blue tracked-mega-l " > { " " }
    PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES </span> </div> 
    
    <div className = "fl w-25 dn dn-m db-ns pa2 header-third" >
   
    <ul className = "flex justify-around list pl0 ma0 mb2 header-links" >
    <li className = "flex-item dib pr1" >
   <a href= "https://lp.constantcontactpages.com/su/jlCEExQ/subscribe" className="link dim dark-gray f6 dib "
    title = "Subscribe"  target = "_blank" rel = "noopener noreferrer" >Subscribe { " " } </a> </li> <li className = "flex-item dib  pr1 pl1" > { " " }
   <Link to="/about/contact/" className="link dim dark-gray f6 dib "
    title = "Contact" >Contact </Link> </li> 
    <li className= "flex-item dib pl1" > { " " }
    <Link to="/donate/"  className= "link dim dark-gray f6 dib "
    title = "Donate" >
    Donate </Link> </li>
     </ul>  

    <ul className = "social-links flex justify-around list pl0 ma0 mb2" >
    <li className = "flex-item dib" > { " " } <a href = "https://twitter.com/ICInclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a> </li> 
    <li className = "flex-item dib" > { " " }
     <a href = "https://www.instagram.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a> </li> <li className = "flex-item dib pl1" > { " " } 
    <a href = "https://communityinclusion.tumblr.com/"
    target = "_blank"
    rel = "noopener noreferrer" >
     <FontAwesomeIcon icon={faTumblrSquare} size="2x" />
    </a> </li> <li className = "flex-item dib pl1" > { " " } <a href = "https://www.facebook.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
     <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
    </a> </li> <li className = "flex-item dib pl1" > { " " } 
    <a href = "https://www.youtube.com/user/communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
   <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a> </li> </ul>
    <div>

<SearchForm />

    </div>
         </div> 
    
  
    </div>
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
