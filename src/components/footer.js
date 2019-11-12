import React from 'react'
import { Link } from "gatsby"
import umbcombo from '../images/bch-umb-combo_logo-small.png'

const Footer = () => (
   <footer aria-label="Footer" className="bg-dark-blue mt5 pt3">

    <div className="footer-top mw9 center ph3-ns white">
    <div className="cf ph2-ns flex flex-column flex-row-l justify-between">
  <div className="fl w-33-l pa2 w-100  ml4-m">

     <img className = "dib mw-100 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={umbcombo}
          />



  </div>
  
  <div className="fl w-33-l pa2 w-100 ml4-m">

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
  <div className="fl w-33-l pa2 w-100 ml4-m">

    <h3 className="bb fl w-100 pv0 f4 lh-copy fw6 ttu tracked">Links</h3>
  <ul className=" v-mid w-100 w-75-l list pl0 ">
    <li className="mr2"> <Link to="/about/" className="link  white f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="About">ABOUT ICI</Link></li>
     <li className="mr2"><Link to="/areas-of-emphasis" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="AREAS OF EMPHASIS">AREAS OF EMPHASIS</Link></li>
    <li className="mr2"> <Link to="/projects" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Projects">PROJECTS</Link></li>
       <li className="mr2">   <Link to="/services" className="link white  f6 f5-l dib mr3 mr4-l no-underline underline-hover" title="Services">SERVICES</Link></li>
            <li className="mr2"><Link to="/resources/" className="link white  f6 f5-l dib no-underline underline-hover" title="Resources">RESOURCES</Link></li>
                        <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="Subscribe">SUBSCRIBE</Link></li>

 <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="contact">CONTACT</Link></li>
    <li className="mr2"> <Link to="/" className="link white  f6 f5-l dib no-underline underline-hover" title="Donate">DONATE</Link></li>
  </ul>

  </div>
  </div>
  </div>
  <div className="footer-copyright center cf mt4  bt white bg-black f6 lh-copy "><p className="ph3-ns ph5-ns ph3 white">©2019. The Institute for Community Inclusion was founded in 1967, and is a program at the University of Massachusetts Boston and Boston Children’s Hospital.</p></div>
</footer>
)

export default Footer
