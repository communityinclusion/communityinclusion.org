import React from "react";
import { Link } from "gatsby";
import '../components/navbar.css'
import '../layouts/custom.css'



const activeLinkStyle = {
  background: '#20527c',
   color: 'white',
}



const Navbar = () => (
      <div>
         <nav role="navigation" aria-label="Main" className="bg-blue">
         <a tabIndex="1" href="#" className="ic menu">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </a>
    <a href="#" className="ic close">close</a>
    <ul className="main-nav">
      <li className="top-level-link">
        <Link to="/" activeStyle={activeLinkStyle} ><span>Home</span></Link>
      </li>

      <li className="top-level-link">
        <Link to="/news" activeStyle={activeLinkStyle}  partiallyActive={true} ><span>News</span></Link>
      </li>
      <li className="top-level-link">
        <Link to="/about" className="mega-menu" activeStyle={activeLinkStyle}  partiallyActive={true}  aria-expanded="false"><span>About</span></Link>
        <div className="sub-menu-block">
          <div className="cf">
            <div className="fl w-two-thirds-l db-l dn pr2">


             <p>The Institute for Community Inclusion at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of society. As practitioners, researchers, and teachers, we form partnerships with individuals, families, and service agencies. Together we advocate for personal choice, self-determination, and social and economic justice.</p>
            </div>


            <div className="fl w-third-l w-100 pa3-ns bl-l">

              <ul className="sub-menu-lists ml1">
                <li><Link to="/about" role="button" aria-haspopup="true">About the ICI</Link></li>
                <li><Link to="/about/history">History of ICI</Link></li>
                <li><Link to="/about/mission">Mission and Vision</Link></li>
                <li><Link to="/about/staff">Staff</Link></li>
                  <li><Link to="/about/directions">Directions</Link></li>
                  <li><Link to="/about/glossary">Glossary</Link></li>
                    <li><Link to="/about/contact">Contact</Link></li>
              </ul>
            </div>
          </div>



        </div>
      </li>
    {/* <li className="top-level-link">


           <Link to="/areas-of-emphasis" activeStyle={activeLinkStyle} partiallyActive={true} className="mega-menu"><span>Areas of Emphasis</span></Link>
        <div className="sub-menu-block">
          <div className="cf">
            <div className="fl w-two-thirds-l db-l dn pr2">
      <p>Learn more about the four areas through which we support the full inclusion of people with disabilities in society. </p>
            </div>

            <div className="fl w-third-l w-100 pa3-ns bl-ns">

              <ul className="sub-menu-lists ml1">
                <li><Link to="/areas-of-emphasis/employment">Employment</Link></li>
                <li><Link to="/areas-of-emphasis/education">Education</Link></li>
                <li><Link to="/areas-of-emphasis/community">Community Life</Link></li>
                <li><Link to="/areas-of-emphasis/healthcare">Healthcare</Link></li>
              </ul>
            </div>
          </div>



        </div>
      </li>
      */} 
      <li className="top-level-link">
        <Link to="/projects" activeStyle={activeLinkStyle} partiallyActive={true} className="mega-menu"><span>Projects</span></Link>
        <div className="sub-menu-block">
          <div className="cf">
            <div className="fl w-60-l db-l dn pr2">
<p>Our projects involve conducting state and national employment research, increasing access to higher education, supporting children with disabilities to plan for a fulfilling future, and much more.  </p>
            </div>

            <div className="fl w-20-l w-100 pa3-ns bl-ns">

              <ul className="sub-menu-lists ma0 pa0">
                <li><Link to="/projects/thinkcollege">ThinkCollege</Link></li>
                <li><Link to="/projects/thinkwork">ThinkWork!</Link></li>
                <li><Link to="/projects/explorevr">ExploreVR</Link></li>
                 <li><Link to="/projects/seln">SELN</Link></li>
                  <li><Link to="/projects/statedata">StateData</Link></li>
                   <li><Link to="/projects/catada">CATADA</Link></li>

              </ul>
            </div>

            <div className="fl w-20-l w-100 pa3-ns">

              <ul className="sub-menu-lists ma0 pa0">


  <li><Link to="/projects/nercve">NERCVE</Link></li>
   <li><Link to="/projects/employmentfirstma">EmploymentFirstMA</Link></li>
      <li><Link to="/projects/fqi">Future Quest Island</Link></li>
   <li><Link to="/projects/lend">BostonLEND</Link></li>
<li><Link to="/projects/bchdsp">BCH Down Syndrome Program</Link></li>
              </ul>
            </div>
          </div>



        </div>
      </li>
      <li className="top-level-link">
        <Link to="/publications" activeStyle={activeLinkStyle} partiallyActive={true}><span>Publications</span></Link>
      </li>
    <li className="top-level-link">
         <Link to="/services" activeStyle={activeLinkStyle} partiallyActive={true}><span>Services</span></Link>
            {/*  <div className="sub-menu-block">
            <div className="cf">
            <div className="fl w-two-thirds-l db-l dn pr2">
<p>From expert consultation and technical assistance to online training for employment professionals, our services help agency leaders and disability staff to excel and thrive in their work.  </p>
            </div>

            <div className="fl w-third-l w-100 pa3-ns bl-ns">

              <ul className="sub-menu-lists ml1">
                <li><a href="https://ici-consulting.netlify.com/">ICI Consulting</a></li>
                <li><a href="https://www.communityinclusion.org/employmentservices/">ICI Employment Services</a></li>
                 <li><a href="https://www.directcourseonline.com/employment-services/">College of Employment Services</a></li>
                  <li><a href="https://www.communityinclusion.org/cesacre/">CES/ACRE</a></li>


              </ul>
            </div>

          </div>
          </div>*/} 
      </li>
     {/*  <li className="top-level-link">
        <Link to="/resources" activeStyle={activeLinkStyle}><span>Resources</span></Link>
      </li>
      */} 
    </ul>
  </nav>
      </div>
    )


export default Navbar
