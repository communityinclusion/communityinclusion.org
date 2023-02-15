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
  

    <div className = "container-xxl header" >
    <div className = "row px-3 py-3" >
    <div className = "col-lg-2 col-sm-3 col-3 mt-2" >
    <Link to= "/" className = "d-table-cell align-middle mid-gray link "
    title = "Home" >
  <img className = "img-fluid"
   			 alt = "Institute for Community Inclusion"
            src={logo}
          />

    </Link> 
    </div> 
    
    <div className = "col-lg-7 col-sm-9 col-9  ps-2 my-auto" >
    <p id="banner-text" className = "dark-blue mb-2"  >
    Institute
    for Community Inclusion </p>
    <span id= "banner-tagline" className = "h6 h5-md h4-lg d-none d-lg-block f-subheadline dark-blue tracked-mega-l " > { " " }
    PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES </span> </div> 
    
    <div className = "col-lg-3  d-none d-lg-block  p-2" >
    <div className="row">
    <ul className = "col-lg-12 list-inline ps-0 m-0 mb-2 header-links d-flex justify-content-around" >
    <li className = "flex-item list-inline-item pr1" >
   <a href= "https://lp.constantcontactpages.com/su/jlCEExQ/subscribe" className="link dim dark-gray f6  "
    title = "Subscribe"  target = "_blank" rel = "noopener noreferrer" >Subscribe { " " } </a> </li> <li className = "flex-item list-inline-item   pr1 pl1" > { " " }
   <Link to="/about/contact/" className="link dim dark-gray f6  "
    title = "Contact" >Contact </Link> </li> 
    <li className= "flex-item list-inline-item  ps-1" > { " " }
    <Link to="/donate/"  className= "link dim dark-gray f6  "
    title = "Donate" >
    Donate </Link> </li>
     </ul>  

    <ul className = "col-lg-12 social-links d-flex justify-content-around list-inline pl0 m-0 mb-2" >
    <li className = "list-inline-item flex-item " > { " " } <a href = "https://twitter.com/ICInclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a> </li> 
    <li className = "list-inline-item flex-item " > { " " }
     <a href = "https://www.instagram.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a> </li> <li className = "list-inline-item flex-item  pl1" > { " " } 
    <a href = "https://communityinclusion.tumblr.com/"
    target = "_blank"
    rel = "noopener noreferrer" >
     <FontAwesomeIcon icon={faTumblrSquare} size="2x" />
    </a> </li> <li className = "list-inline-item flex-item  pl1" > { " " } <a href = "https://www.facebook.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
     <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
    </a> </li> <li className = "list-inline-item flex-item  pl1" > { " " } 
    <a href = "https://www.youtube.com/user/communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
   <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a> </li> </ul>
    <div>

<SearchForm className="col-lg-12" />
</div>
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
