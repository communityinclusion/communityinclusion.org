import React from 'react'
import { Link } from "gatsby"
import umbcombo from '../images/bch-umb-combo_logo-small.png'

const Footer = () => (
   <footer aria-label="Footer" className="bg-dark-blue mt5 pt3">

    <div className="footer-top mw9 center ph5-ns white">
    <div className="cf ph2-ns flex flex-column flex-row-l justify-between">
  <div className="fl w-33-l w-100 pa2">

    
  <h3 className="bb fl w-100 pv0 f4 lh-copy ttu tracked">Contact</h3>
    <article className="fl dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns tl">
      <address>Institute for Community Inclusion<br />
UMass Boston<br />
100 Morrissey Blvd.<br />
Boston, Massachusetts 02125<br />
Voice: (617) 287-4300<br />
Fax: (617) 287-4352<br />
TTY: (617) 287-4350<br />
Email: <a href="mailto:ici@umb.edu">ici@umb.edu</a><br />
&nbsp;</address>    </article>


  </div>
  
  <div className="fl w-33-l w-100 pa2">

  <h3 className="bb fl w-100 pv0 f4 lh-copy fw6 ttu tracked">Links</h3>
  <ul className=" v-mid w-100 w-75-l list pl0 ">
    <li className="mr2"> <Link to="/about/" className="link  white f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="About">About ICI</Link></li>
     <li className="mr2"><Link to="/areas-of-emphasis" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Areas of Emphasis">Areas of Emphasis</Link></li>
    <li className="mr2"> <Link to="/projects" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Projects">Projects</Link></li>
       <li className="mr2">   <Link to="/services" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Services">Services</Link></li>
            <li className="mr2"><Link to="/resources/" className="link white  f6 f5-l dib no-underline underline-hover" title="Resources">Resources</Link></li>
                        <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="Subscribe">Subscribe</Link></li>

 <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="contact">Contact</Link></li>
    <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="Donate">Donate</Link></li>
  </ul></div>
  <div className="fl w-33-l w-100 pa2 ">
  <h3 className="bb fl w-100 pv0 f4 lh-copy fw6 ttu tracked">Social</h3>

  <ul className = "social-links  list pl0" >
    <li className = "dib pr2" > { " " } <a href = "https://twitter.com/ICInclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-3x fa-twitter normal" / >
    </a> </li> <li className = "dib pr2" > { " " }
     <a href = "https://www.instagram.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab fa-3x fa-instagram normal" / >
    </a> </li> <li className = "dib pr2" > { " " } 
    <a href = "https://medium.com/@communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-3x fa-medium normal" / >
    </a> </li> <li className = "dib pr2" > { " " } <a href = "https://www.facebook.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-3x fa-facebook-square normal" / >
    </a> </li> <li className = "dib pr2" > { " " } <
    a href = "https://www.youtube.com/user/communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab fa-3x fa-youtube normal" / >
    </a> </li> </ul>
   
  </div>
  </div>
  </div>
  <div className="footer-copyright cf mw9 mt4 dt flex flex-column flex-row-l justify-between w-100 bt white bg-black f6 lh-copy v-mid pv2 center "> 
   <div className="w-33-l w-100 dtc v-mid  white ph4-ns ph3">
   <img className = "dib mw-100 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={umbcombo}
          />
     </div> 
      <div className="w-33-l w-100 dtc v-mid white ph3-ns ph3">
   
      <p className="white">©2019 The Institute for Community Inclusion was founded in 1967, and is a program at the University of Massachusetts Boston and Boston Children’s Hospital.</p>
    </div>
   
  
    <div className="w-33-l w-100 dtc v-mid white ph4-ns ph3">
    <ul className = " justify-center  list pl0 " >
    <li className = " dib br pr2" >
   <Link to= "/about/privacy/" className="link dim white f6 dib "
    title = "Privacy" >
    Privacy { " " } </Link> </li> <li className = "dib br pr2 pl1" > { " " }
   <Link to="/about/accessibility/" className="link dim white f6 dib "
    title = "Accessibility" >
    Accessibility </Link> </li> <li className= "dib pl1" > { " " }
    <Link to="/donate/"  className= "link dim white f6 dib "
    title = "Donate" >
    Donate </Link> </li> </ul>

    </div>
 
     </div>
</footer>
)

export default Footer
