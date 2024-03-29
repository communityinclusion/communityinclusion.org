
import React from "react"
import { Link } from "gatsby"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const activeLinkStyle = {
    background: '#20527c',
     color: 'white',
  }
  const NavLinks = () => {
    return (
      <>
      <div className="container">
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
    <div className="row">
      <div className="col-lg-9">


       <p>The Institute for Community Inclusion at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of society. As practitioners, researchers, and teachers, we form partnerships with individuals, families, and service agencies. Together we advocate for personal choice, self-determination, and social and economic justice.</p>
       <p>We are dedicated to advancing the full inclusion of people with disabilities in all aspects of life. Our work encompasses research, program evaluation, training, consultation, education, policy analysis, and service delivery across four main areas of emphasis: Employment, Education, Community Life, and Health Care.</p>
       <p>We have three national hubs: <a href="https://www.explorevr.org/">ExploreVR</a> and <a href="https://www.thinkwork.org/">ThinkWork</a>, which focus on inclusive employment, and <a href="https://thinkcollege.net/">ThinkCollege</a>, which focuses on inclusive higher education.</p>
      </div>


      <div className="col-lg-3 border-start-lg">

        <ul className="sub-menu-lists ms-1">
          <li><Link to="/about" role="button" aria-haspopup="true">About the ICI</Link></li>
          <li><Link to="/about/history">History of ICI</Link></li>
          <li><Link to="/about/mission">Mission and Vision</Link></li>
          <li><Link to="/about/areas-of-emphasis">Areas of Emphasis</Link></li>
          <li><Link to="/about/what-we-mean-when-we-talk-about-inclusion">What We Mean When We Talk About Inclusion</Link></li>
          <li><Link to="/about/staff-directory">Staff Directory</Link></li>
            <li><Link to="/about/directions">Directions</Link></li>
            <li><Link to="/about/glossary">Glossary</Link></li>
            <li><Link to="/about/fellowships">Fellowships</Link></li>
            <li><Link to="/jobs">Jobs at ICI</Link></li>
              <li><Link to="/about/contact">Contact</Link></li>
        </ul>
      </div>
    </div>



  </div>
</li>
<li className="top-level-link">
  <Link to="/projects" activeStyle={activeLinkStyle} partiallyActive={true} className="mega-menu"><span>Projects</span></Link>
  <div className="sub-menu-block">
  <div className="row">
      <div className="col-lg-6">
<p>Our projects involve conducting state and national employment research, increasing access to higher education, supporting children with disabilities to plan for a fulfilling future, and much more.  </p>
      </div>

      <div className="col-lg-3 border-start-lg">

        <ul className="sub-menu-lists m-0 ms-1 p-0">
          <li><Link to="/projects/thinkcollege">ThinkCollege</Link></li>
          <li><Link to="/projects/thinkwork">ThinkWork!</Link></li>
          <li><Link to="/projects/explorevr">ExploreVR</Link></li>
           <li><Link to="/projects/seln">SELN</Link></li>
            <li><Link to="/projects/statedata">StateData</Link></li>
             <li><Link to="/projects/catada">CATADA</Link></li>
             <li><Link to="/projects/nercve">NERCVE</Link></li>
             <li><Link to="/projects/emp1stfl">Employment First Florida</Link></li>
             <li><Link to="/projects/gator">GATOR</Link></li>
        </ul>
      </div>

      <div className="col-lg-3 border-start-lg">

        <ul className="sub-menu-lists m-0 ms-1 p-0">



<li><Link to="/projects/employmentfirstma">Employment First Massachusetts</Link></li>
<li><Link to="/projects/fqi">Future Quest Island</Link></li>
<li><Link to="/projects/lend">LEND Program</Link></li>
<li><Link to="/projects/bchdsp">Down Syndrome Program</Link></li>
<li><Link to="/projects/cle">Community Life Engagement</Link></li>
<li><Link to="/projects/emp1stmo">Employment First Missouri</Link></li>
<li><Link to="/projects/maicei">MAICEI</Link></li>
<li><Link to="/projects/youthvoice">CYVYC</Link></li>

        </ul>
      </div>
    </div>



  </div>
</li>

 <li className="top-level-link">
   <Link to="/services" activeStyle={activeLinkStyle} partiallyActive={true} className="mega-menu"><span>Services</span></Link>
      <div className="sub-menu-block">
      <div className="row">
      <div className="col-lg-9">
<p>From expert consultation and technical assistance to online training for employment professionals, our services help agency leaders and disability staff to excel and thrive in their work.  </p>
      </div>

      <div className="col-lg-3 border-start-lg">

        <ul className="sub-menu-lists ms-1">
          <li><a href="https://consulting.communityinclusion.org/">ICI Consulting</a></li>
          <li><a href="https://employmentservices.communityinclusion.org/">ICI Employment Services</a></li>
           <li><a href="https://www.directcourseonline.com/employment-services/">College of Employment Services</a></li>
            <li><a href="/onlinelearning/cesacre/">CES/ACRE</a></li>


        </ul>
      </div>

    </div>
    </div>
</li>
{/*
 <li className="top-level-link">
  <Link to="/resources" activeStyle={activeLinkStyle}><span>Resources</span></Link>
</li>
*/} 
<li className="top-level-link">
  <Link to="/publications" activeStyle={activeLinkStyle} partiallyActive={true}><span>Publications</span></Link>
</li>
<li className="top-level-link">
<Link to="/onlinelearning/" activeStyle={activeLinkStyle} partiallyActive={true}><span>Online Learning</span></Link>
</li>
  
</ul>
    <div className="h-100 d-lg-none bg-white">
         
 <Search indices={searchIndices} />

      </div>
      </div>
</>
)}

export default NavLinks