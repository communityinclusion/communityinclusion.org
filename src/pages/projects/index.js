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
import cle from '../../images/CLE-square-logo.png'
import bchlend from '../../images/bch-lend-logo.png'
import bchds from '../../images/bch-ds-logo.png'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

export const Projects = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  // Example of dynamically using location prop as a crumbLabel
  const customCrumbLabel = location.pathname
    .toLowerCase()
    .replace("/", " ")
    .replace("-", " ")
  return (
  <Layout>
   <section className="main-content">
   <SEO title="Projects" />
   <div className="breadcrumbs">
   <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel={customCrumbLabel}
          />
            </div>
    <h1>Projects</h1>







 



    <div className="flex-l w-100 nl2 nr2 center">
    <article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90 ">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={thinkcollege} className="db" alt = "ThinkCollege" />
    </div>

 <div className="w-100 w-70-ns pl3-ns">
 
        <Link className="link  w-100  pb2 mt2 dim dark-blue" to="projects/thinkcollege">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">Think College</h2>
       </Link>
  <p className="f6 f5-l lh-copy">Think College develops, expands, and improves inclusive higher education options for people with intellectual and developmental disabilities.</p>

    </div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={nercve} className="db" alt = "NERCVE" />
  </div>
<div className="w-100 w-70-ns pl3-ns">
        <Link to="/projects/nercve" className="link w-100  pb2 mt2 dim dark-blue">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">NERCVE</h2>
       </Link>
    <p className="f6 f5-l lh-copy">The Northeast Resource Center for Vision Education (NERCVE) trains professionals to support people with blindness and low vision in accessing education and living independently.</p>

    </div>
  </div>

</article>


</div>
<div className="flex-l w-100 nl2 nr2 center">
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3 w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={explorevr} className="db" alt = "ExploreVR" />
  </div>
<div className="w-100 w-70-ns pl3-ns">
        <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/explorevr">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">ExploreVR</h2>
       </Link>
    <p className="f6 f5-l lh-copy">Explore VR offers vocational rehabilitation (VR) agencies easy and convenient access to a range of VR research, related data, and tools for planning, evaluation, and decision-making.</p>

  </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={employma} className="db" alt = "EmploymentFirstMA"/>
  </div>

<div className="w-100 w-70-ns pl3-ns">
        <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/employmentfirstma">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">EmploymentFirstMA</h2>
       </Link>
    <p className="f6 f5-l lh-copy">EmploymentFirstMA promotes community-based paid employment for Massachusetts citizens with intellectual and developmental disabilities. </p>

   </div>
  </div>

</article>

</div>
<div className="flex-l w-100 nl2 nr2 center">
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90 ">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src = {thinkwork} className ="db" alt = "Think Work"/>
  </div>
  <div className="w-100 w-70-ns pl3-ns">
                <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/thinkwork">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">ThinkWork!</h2>
       </Link>
    <p className="f6 f5-l lh-copy">ThinkWork! is the hub for an array of programs related to employment for people with intellectual and developmental disabilities.</p>

    </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={statedata} className="db" alt = "StateData.info"/>
  </div>
 <div className="w-100 w-70-ns pl3-ns">
        <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/statedata">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">StateData.info</h2>
       </Link>
    <p className="f6 f5-l lh-copy">StateData.info offers publications and data related to employment and disability. Users can view trends and build charts to help drive systems change.</p>

      </div>
  </div>

</article>
</div>

<div className="flex-l w-100 nl2 nr2 center">
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={seln} className="db" alt = "SELN"/>
  </div>
 <div className="w-100 w-70-ns pl3-ns">
        <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/seln">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">SELN</h2>
       </Link>
    <p className="f6 f5-l lh-copy">The State Employment Leadership Network (SELN) brings together state developmental disability agencies for education and guidance on employment practices and policies.</p>

      </div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90 ">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={catada} className="db" alt = "Catada" />
  </div>
 <div className="w-100 w-70-ns pl3-ns">
        <Link className="link no-underline w-100  pb2 mt2 dim dark-blue" to="projects/catada">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">CATADA</h2>
       </Link>
     <p className="f6 f5-l lh-copy">The Center for Assistive Technology Act Data Assistance (CATADA) provides technical assistance and supports to state assistive technology programs.</p>

    </div>
  </div>

</article>

</div>
<div className="flex-l w-100 nl2 nr2 center">
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90  ">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
<img src={fqi} className="db" alt = "Future Quest Island" />
</div>
<div className="w-100 w-70-ns pl3-ns">
  <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/catada">
<h2 className="f3 fw1 mt0 lh-title bb bw2">Future Quest Island</h2>
 </Link>
<p className="f6 f5-l lh-copy">Future Quest Island is an accessible, game-based college and career readiness tool for middle schoolers. It promotes self-advocacy to help young people plan for future success.  </p>

</div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
<div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
<img src={bchlend} className="db" alt = "LEND Boston" />
</div>
<div className="w-100 w-70-ns pl3-ns">
  <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/lend">
<h2 className="f3 fw1 mt0 lh-title bb bw2"> LEND Boston</h2>
 </Link>
<p className="f6 f5-l lh-copy"> The LEND Program at Boston Children’s Hospital is an interdisciplinary training program that supports health professionals to work with patients with intellectual and developmental disabilities. </p>

</div>
  </div>

</article>

</div>


<div className="flex-l w-100 nl2 nr2 center">
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90 ">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
<img src={bchds} className="db" alt = "Boston Children’s Hospital Down Syndrome Program" />
</div>
<div className="w-100 w-70-ns pl3-ns">
  <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/bchdsp">
<h2 className="f3 fw1 mt0 lh-title bb bw2">Boston Children’s Hospital Down Syndrome Program</h2>
 </Link>
<p className="f6 f5-l lh-copy">The Down Syndrome Program at Boston Children’s Hospital offers specialized services for children with Down syndrome and their families. </p>

</div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={cle} className="db" alt = "Community Life Engagement"/>
  </div>

<div className="w-100 w-70-ns pl3-ns">
        <Link className="link w-100  pb2 mt2 dim dark-blue" to="projects/cle">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">Community Life Engagement</h2>
       </Link>
    <p className="f6 f5-l lh-copy">Community life engagement refers to all the ways that people with intellectual and developmental disabilities participate in their communities outside of employment.</p>

   </div>
  </div>

</article>

</div>



</section>

  </Layout>
)}

export default Projects
