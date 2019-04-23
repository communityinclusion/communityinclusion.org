import React from 'react'
import { Link } from "gatsby"
import { withPrefix } from "gatsby"
import umbcombo from '../images/bch-umb-combo_logo.png'

const Footer = () => (
   <footer class="cf mt4 ph2-ns pa4 pa5-l moon-gray bt bg-navy">
  <div class="fl w-30-ns w-100-m  pa2 ml4">

     <img className = "dib mw-100 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={umbcombo}
          />

<p>©2019. The Institute for Community Inclusion was founded in 1967, and is a program at the University of Massachusetts Boston and Boston Children’s Hospital.</p>

  </div>
  <div class="fl w-30-ns w-100-m  pa2 ml4">

    <h1 class="bb fl w-100 pv0 f6 fw6 ttu tracked mb4">Contact</h1>
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
  <div class="fl w-30-ns w-100-m pa2 ml4">

    <h1 class="bb fl w-100 pv0 f6 fw6 ttu tracked mb4">Links</h1>
  <ul class=" v-mid w-100 w-75-l list pl0 ">
    <li class="mr2"> <a class="link dim white f6 f5-l dib mr3 mr4-l"  href="/about/" title="About">ABOUT ICI</a></li>
     <li class="mr2"> <a class="link dim white f6 f5-l dib mr3 mr4-l"  href="/areas-of-emphasis" title="AREAS OF EMPHASIS">AREAS OF EMPHASIS</a></li>
    <li class="mr2"> <a class="link dim white f6 f5-l dib mr3 mr4-l"  href="/projects" title="Projects">PROJECTS</a></li>
       <li class="mr2">   <a class="link dim white f6 f5-l dib mr3 mr4-l"  href="/services" title="Services">SERVICES</a></li>
            <li class="mr2"> <a class="link dim white f6 f5-l dib" href="/resources/" title="Resources">RESOURCES</a></li>
                        <li class="mr2"> <a class="link dim white f6 f5-l dib" href="/" title="Subscribe">SUBSCRIBE</a></li>

 <li class="mr2"> <a class="link dim white f6 f5-l dib" href="/" title="contact">CONTACT</a></li>
    <li class="mr2"> <a class="link dim white f6 f5-l dib" href="/" title="Donate">DONATE</a></li>
  </ul>


  </div>
</footer>
)

export default Footer
