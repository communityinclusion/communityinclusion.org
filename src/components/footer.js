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
   <footer aria-label="Footer" className="mt-5 pt-3 bg-dark-blue">

    <div className="footer-top container my-4  center px-3 text-white">
    <div className="row px-2-ns">
  <div className="col-md-4 col-sm-12 p-2 ">

    
  <h3 className="border-bottom border-light   pv0 f4 lh-copy ttu tracked">Contact</h3>
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
  
  <div className="col-md-4 col-sm-12 p-2 ">

  <h3 className="border-bottom border-light pv-0 lh-copy fw6 ttu tracked">Links</h3>
  <ul className="align-middle w-100 w-75-l list pl0 ">
    <li className="mr2"> <Link to="/about/" className="link  white f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="About">About ICI</Link></li>
     <li className="mr2"><Link to="/areas-of-emphasis" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Areas of Emphasis">Areas of Emphasis</Link></li>
    <li className="mr2"> <Link to="/projects" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Projects">Projects</Link></li>
       <li className="mr2">   <Link to="/services" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Services">Services</Link></li>
       <li className="mr2"> <a href="https://lp.constantcontactpages.com/su/jlCEExQ/subscribe" className="link white  f6 f5-l dib no-underline underline-hover" target = "_blank" rel = "noopener noreferrer" title="Subscribe">Subscribe</a></li>

 <li className="mr2"> <Link to="/about/contact" className="link white  f6 f5-l dib no-underline underline-hover" title="contact">Contact</Link></li>
    <li className="mr2"> <Link to="/donate" className="link white  f6 f5-l dib no-underline underline-hover" title="Donate">Donate</Link></li>
  </ul></div>
  <div className="col-md-4 col-sm-12 p-2 ">
  <h3 className="border-bottom border-light w-100 py-0  lh-copy ttu tracked">Social</h3>

  <ul className = "social-links text-white list-inline ps-0" >
    <li className = "list-inline-item pe-2" > { " " } <a href = "https://twitter.com/ICInclusion"
    title = "Community Inclusion Twitter"
    target = "_blank"
    rel = "noopener noreferrer" >
         <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a> </li> <li className = "list-inline-item pe-2" > { " " }
     <a href = "https://www.instagram.com/communityinclusion/"
     title = "Community Inclusion Instagram"
    target = "_blank"
    rel = "noopener noreferrer" >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a> </li> 
    <li className = "list-inline-item pe-2" > { " " } <a href = "https://www.facebook.com/communityinclusion/"
     title = "Community Inclusion Facebook"
     target = "_blank"
    rel = "noopener noreferrer" >
         <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
    </a> </li> <li className = "list-inline-item pe-2" > { " " } 
    <a href = "https://communityinclusion.tumblr.com/"
    target = "_blank"
    title = "Community Inclusion Tumblr"
    rel = "noopener noreferrer" >
       <FontAwesomeIcon icon={faTumblrSquare} size="2x" />
    </a> </li>
    <li className = "list-inline-item pe-2" > { " " } 
    <a href = "https://www.youtube.com/user/communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a> </li> </ul>
   
  </div>
  </div>
  </div>
  <div className="footer-copyright container-fluid text-white w-100 bt bg-dark fs-6 lh-copy align-middle border-top border-white border-2 py-2 center "> 
  <div className="row pt-3">
   <div className="col-2  align-middle ">
   <img className = "dib mw-100 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={umbcombo}
          />
     </div> 
      <div className="col-7 align-middle px-3">
   
      <p className="white">©2021 The Institute for Community Inclusion was founded in 1967, and is a program at the University of Massachusetts Boston and Boston Children’s Hospital. The ICI is a University Center for Excellence in Developmental Disabilities, part of the national network started by President John F. Kennedy.</p>
    </div>
   
  
    <div className="col-3 v-mid px-3">
    <ul className = "list-inline " >
    <li className = "list-inline-item flex-fill br pe-2 border-end border-light" >
   <Link to= "/about/privacy/" className="link dim fs-6"
    title = "Privacy" >
    Privacy { " " } </Link> </li> 
    <li className = "list-inline-item flex-fill br border-end border-light pe-2 ps-2" > { " " }
   <Link to="/about/accessibility/" className="link dim fs-6"
    title = "Accessibility" >
    Accessibility </Link> </li> 
    <li className= "list-inline-item flex-fill ps-1" > { " " }
    <Link to="/donate/"  className= "link dim fs-6"
    title = "Donate" >
    Donate </Link> </li>
     </ul>
     <p className = "pt-3">Website development supported by:</p>
     <ul className = "list-inline ps-0 " >
     <li className= "list-inline-item dib pe-1 align-middle" ><a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" /></a> </li>
    <li className= "list-inline-item dib ps-1 align-middle" > <a href="https://www.sanity.io">
    <img alt = "content structured in sanity"
            src={sanity}
          />
          </a></li>
          </ul>
    </div>
    </div>
 
     </div>
</footer>
)

export default Footer
