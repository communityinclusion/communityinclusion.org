import React from 'react'
import { Link } from "gatsby"
import umbcombo from '../images/bch-umb-combo_logo-small.png'
import sanity from '../images/sanity-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faInstagram,
    faTumblrSquare,
    faFacebookSquare,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
   <footer aria-label="Footer" className="mt5 pt3 bg-dark-blue">

    <div className="footer-top mw9  center ph3 white">
    <div className="row ph2-ns">
  <div className="column-equal pa2 ">

    
  <h3 className="bb w-100 pv0 f4 lh-copy ttu tracked">Contact</h3>
    <article className="fl dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns tl">
      <address className="fs-normal">Institute for Community Inclusion<br />
UMass Boston<br />
100 Morrissey Blvd.<br />
Boston, Massachusetts 02125<br />
Voice: (617) 287-4300<br />
Fax: (617) 287-4352<br />
TTY: (617) 287-4350<br />
Email: <a href="mailto:ici@umb.edu">ici@umb.edu</a><br />
&nbsp;</address>    </article>


  </div>
  
  <div className="column-equal pa2">

  <h3 className="bb w-100 pv0 f4 lh-copy fw6 ttu tracked">Links</h3>
  <ul className=" v-mid w-100 w-75-l list pl0 ">
    <li className="mr2"> <Link to="/about/" className="link  white f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="About">About ICI</Link></li>
     <li className="mr2"><Link to="/areas-of-emphasis" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Areas of Emphasis">Areas of Emphasis</Link></li>
    <li className="mr2"> <Link to="/projects" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Projects">Projects</Link></li>
       <li className="mr2">   <Link to="/services" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Services">Services</Link></li>
                        <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="Subscribe">Subscribe</Link></li>

 <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="contact">Contact</Link></li>
    <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="Donate">Donate</Link></li>
  </ul></div>
  <div className="column-equal pa2 ">
  <h3 className="bb w-100 pv0 f4 lh-copy ttu tracked">Social</h3>

  <ul className = "social-links  list pl0" >
    <li className = "dib pr2" > { " " } <a href = "https://twitter.com/ICInclusion"
    title = "Community Inclusion Twitter"
    target = "_blank"
    rel = "noopener noreferrer" >
         <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a> </li> <li className = "dib pr2" > { " " }
     <a href = "https://www.instagram.com/communityinclusion/"
     title = "Community Inclusion Instagram"
    target = "_blank"
    rel = "noopener noreferrer" >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a> </li> 
    <li className = "dib pr2" > { " " } <a href = "https://www.facebook.com/communityinclusion/"
     title = "Community Inclusion Facebook"
     target = "_blank"
    rel = "noopener noreferrer" >
         <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
    </a> </li> <li className = "dib pr2" > { " " } 
    <a href = "https://communityinclusion.tumblr.com/"
    target = "_blank"
    title = "Community Inclusion Tumblr"
    rel = "noopener noreferrer" >
       <FontAwesomeIcon icon={faTumblrSquare} size="2x" />
    </a> </li>
    <li className = "dib pr2" > { " " } 
    <a href = "https://www.youtube.com/user/communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a> </li> </ul>
   
  </div>
  </div>
  </div>
  <div className="footer-copyright row w-100 bt white bg-black f6 lh-copy v-mid pv2 center "> 
  <div className="mw9 center">
   <div className="column-unequal right v-mid  white">
   <img className = "dib mw-100 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={umbcombo}
          />
     </div> 
      <div className="column-unequal middle v-mid white ph3">
   
      <p className="white">©2020 The Institute for Community Inclusion was founded in 1967, and is a program at the University of Massachusetts Boston and Boston Children’s Hospital.</p>
    </div>
   
  
    <div className="column-unequal left v-mid white ph3">
    <ul className = "list pl0 " >
    <li className = " dib br pr2" >
   <Link to= "/about/privacy/" className="link dim white f6 dib "
    title = "Privacy" >
    Privacy { " " } </Link> </li> 
    <li className = "dib br pr2 pl1" > { " " }
   <Link to="/about/accessibility/" className="link dim white f6 dib "
    title = "Accessibility" >
    Accessibility </Link> </li> 
    <li className= "dib pl1" > { " " }
    <Link to="/donate/"  className= "link dim white f6 dib "
    title = "Donate" >
    Donate </Link> </li>
     </ul>
     <p>
  <a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" /></a> 
    <a href="https://www.sanity.io">
    <img className = "ml3"
   			 alt = "content structured in sanity"
            src={sanity}
          />
          </a></p>
    </div>
    </div>
 
     </div>
</footer>
)

export default Footer
