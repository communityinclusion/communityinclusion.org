import React from 'react'
import { Link } from "gatsby"
import umbcombo from '../images/bch-umb-combo_logo.png'

const Footer = () => (
   <footer class="cf mt4 ph2-ns pa4 pa5-l moon-gray bt bg-navy">
  <div class="fl w-third pa2 w-100  ml4-m">

     <img className = "dib mw-100 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={umbcombo}
          />

<p>©2019. The Institute for Community Inclusion was founded in 1967, and is a program at the University of Massachusetts Boston and Boston Children’s Hospital.</p>

  </div>
  <div class="fl w-third pa2 w-100 ml4-m">

    <h1 class="bb fl w-100 pv0 f6 fw6 ttu tracked">Contact</h1>
    <article class="fl dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns tl">
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
  <div class="fl w-third pa2 w-100 ml4-m">

    <h1 class="bb fl w-100 pv0 f6 fw6 ttu tracked mb4">Links</h1>
  <ul class=" v-mid w-100 w-75-l list pl0 ">
    <li class="mr2"> <Link to="/about/" className="link dim white f6 f5-l dib mr3 mr4-l" title="About">ABOUT ICI</Link></li>
     <li class="mr2"><Link to="/areas-of-emphasis" className="link dim white f6 f5-l dib mr3 mr4-l" title="AREAS OF EMPHASIS">AREAS OF EMPHASIS</Link></li>
    <li class="mr2"> <Link to="/projects" className="link dim white f6 f5-l dib mr3 mr4-l" title="Projects">PROJECTS</Link></li>
       <li class="mr2">   <Link to="/services" className="link dim white f6 f5-l dib mr3 mr4-l" title="Services">SERVICES</Link></li>
            <li class="mr2"><Link to="/resources/" className="link dim white f6 f5-l dib" title="Resources">RESOURCES</Link></li>
                        <li class="mr2"> <Link to="/" className="link dim white f6 f5-l dib" title="Subscribe">SUBSCRIBE</Link></li>

 <li class="mr2"> <Link to="/" className="link dim white f6 f5-l dib" title="contact">CONTACT</Link></li>
    <li class="mr2"> <Link to="/" className="link dim white f6 f5-l dib" title="Donate">DONATE</Link></li>
  </ul>


  </div>
</footer>
)

export default Footer
