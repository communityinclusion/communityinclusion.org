import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import thinkcollege from '../../images/thinkcollege.png'
import nercve from '../../images/nercve.png'
import explorevr from '../../images/explorevr.png'
import employma from '../../images/employmentfirstma.png'
import thinkwork from '../../images/thinkwork.png'
import statedata from '../../images/statedata.png'
import seln from '../../images/seln.png'
import catada from '../../images/catada.png'
import fqi from '../../images/fqi.png'

const Projects = () => (
  <Layout>
   <section className="center mw8">
   <SEO title="Projects" />
    <h1>Projects</h1>







 




<article className="bt bb b--black-10 shadow-2 mb3 pa3">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={thinkcollege} className="db" alt = "ThinkCollege" />
    </div>

 <div className="w-100 w-70-ns pl3-ns">
 
        <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/thinkcollege">
    <h2 className="f3 fw1 mt0 lh-title">Think College</h2>
       </Link>
  <p className="f6 f5-l lh-copy">Think College is a national organization dedicated to developing, expanding, and improving inclusive higher education options for people with intellectual disability.</p>

    </div>
  </div>

</article>

<article className="bt bb b--black-10 shadow-2 mb3 pa3">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={nercve} className="db" alt = "NERCVE" />
  </div>
<div className="w-100 w-70-ns pl3-ns">
        <Link to="/projects/nercve" className="link dt w-100  pb2 mt2 dim blue">
    <h2 className="f3 fw1 mt0 lh-title">NERCVE</h2>
       </Link>
    <p className="f6 f5-l lh-copy">The Northeast Resource Center for Vision Education (NERCVE) is committed to improving education for people with visual disabilities.</p>

    </div>
  </div>

</article>

<article className="bt bb b--black-10 shadow-2 mb3 pa3">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={explorevr} className="db" alt = "ExploreVR" />
  </div>
<div className="w-100 w-70-ns pl3-ns">
        <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/explorevr">
    <h2 className="f3 fw1 mt0 lh-title">ExploreVR</h2>
       </Link>
    <p className="f6 f5-l lh-copy">ExploreVR offers vocational rehabilitation (VR) agencies easy and convenient access to a range of VR research, related data, and tools for planning, evaluation, and decision-making.</p>

  </div>
  </div>

</article>
 <article className="bt bb b--black-10 shadow-2 mb3 pa3">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={employma} className="db" alt = "EmploymentFirstMA"/>
  </div>

<div className="w-100 w-70-ns pl3-ns">
        <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/employmentfirstma">
    <h2 className="f3 fw1 mt0 lh-title">EmloymentFirstMa</h2>
       </Link>
    <p className="f6 f5-l lh-copy">Promoting inclusive employment in Massachusetts.</p>

   </div>
  </div>

</article>
 <article className="bt bb b--black-10 shadow-2 mb3 pa3">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src = {thinkwork} className ="db" alt = "Think Work"/>
  </div>
  <div className="w-100 w-70-ns pl3-ns">
                <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/thinkwork">
    <h2 className="f3 fw1 mt0 lh-title">ThinkWork</h2>
       </Link>
    <p className="f6 f5-l lh-copy">ThinkWork is the hub for an array of programs related to employment for people with IDD at the Institute for Community Inclusion at the University of Massachusetts Boston.</p>

    </div>
  </div>

</article>
 <article className="bt bb b--black-10 shadow-2 mb3 pa3">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={statedata} className="db" alt = "StateData.info"/>
  </div>
 <div className="w-100 w-70-ns pl3-ns">
        <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/statedata">
    <h2 className="f3 fw1 mt0 lh-title">StateData.info</h2>
       </Link>
    <p className="f6 f5-l lh-copy">StateData.info promotes Employment First and systems change efforts nationwide by supporting outcome-based management and planning.</p>

      </div>
  </div>

</article>


 <article className="bt bb b--black-10 shadow-2 mb3 pa3">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={seln} className="db" alt = "SELN"/>
  </div>
 <div className="w-100 w-70-ns pl3-ns">
        <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/seln">
    <h2 className="f3 fw1 mt0 lh-title">SELN</h2>
       </Link>
    <p className="f6 f5-l lh-copy">The State Employment Leadership Network (SELN) brings together state developmental disability agencies for sharing, educating and providing guidance on practices and policies around employment to its members.</p>

      </div>
  </div>

</article>

  <article className="bt bb b--black-10 shadow-2 mb3 pa3">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={catada} className="db" alt = "Catada" />
  </div>
 <div className="w-100 w-70-ns pl3-ns">
        <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/catada">
    <h2 className="f3 fw1 mt0 lh-title">CATADA</h2>
       </Link>
     <p className="f6 f5-l lh-copy">The Center for Assistive Technology Act Data Assistance (CATADA) provides technical assistance and supports to State Assistive Technology (AT) Programs.</p>

    </div>
  </div>

</article>
<article className="bt bb b--black-10 shadow-2 mb3 pa3">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
<img src={fqi} className="db" alt = "Future Quest Island" />
</div>
<div className="w-100 w-70-ns pl3-ns">
  <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/catada">
<h2 className="f3 fw1 mt0 lh-title">Future Quest Island</h2>
 </Link>
<p className="f6 f5-l lh-copy">>Future Quest Island (FQI) is an accessible game-based college and career readiness tool for all middle school youth that aligns 21st century technology skills with college and career readiness goals to promote self-awareness, self-knowledge, self-advocacy, and organization for middle school youth with disabilities. FQI is aimed at middle school general and special education teachers as well as technology professionals, counselors, administrators, and transition professionals who are interested in advancing engagement and transition plans of youth with and without disabilities in middle school in college and career activities. </p>

</div>
  </div>

</article>



</section>

  </Layout>
)

export default Projects
