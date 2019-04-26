import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import thinkcollege from '../images/thinkcollege.png'
import nercve from '../images/nercve.png'
import explorevr from '../images/explorevr.png'
import employma from '../images/employma.png'
import thinkwork from '../images/thinkwork.png'
import statedata from '../images/statedata.png'
import seln from '../images/seln.gif'
import catada from '../images/catada-logo.png'


const Projects = () => (
  <Layout>
   <section className="center mw8">
   <SEO title="Projects" />
    <h1>Projects</h1>







   <article class="bb b--black-10 pa2 pa3-ns">

      <div class="dtc w5 v-mid">
        <img src={thinkcollege} className="db w-100" alt = "ThinkCollege" />
      </div>
      <div class="dtc v-top pl3">
	          <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/thinkcollege">
        <h2 class="f6 f5-ns fw6 lh-title mv0">Think College</h2>
           </Link>
        <span class="f6 fw4 mt2 mb0 black-60">Think College is a national organization dedicated to developing, expanding, and improving inclusive higher education options for people with intellectual disability.</span>

      </div>

  </article>

    <article class="bb b--black-10 pa2 pa3-ns">

      <div class="dtc w5 v-mid">
        <img src={nercve} className="db w-100" alt = "NERCVE" />
      </div>
      <div class="dtc v-top pl3">
	          <Link to="/projects/nercve" className="link dt w-100  pb2 mt2 dim blue">
        <h2 class="f6 f5-ns fw6 lh-title mv0">NERCVE</h2>
           </Link>
        <span class="f6 fw4 mt2 mb0 black-60">The Northeast Resource Center for Vision Education (NERCVE) is committed to improving education for people with visual disabilities.</span>

      </div>

  </article>

    <article class="bb b--black-10 pa2 pa3-ns">

      <div class="dtc w5 v-mid">
        <img src={explorevr} className="db w-100" alt = "ExploreVR" />
      </div>
      <div class="dtc v-top pl3">
	          <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/explorevr">
        <h2 class="f6 f5-ns fw6 lh-title mv0">ExploreVR</h2>
           </Link>
        <span class="f6 fw4 mt2 mb0 black-60">ExploreVR offers vocational rehabilitation (VR) agencies easy and convenient access to a range of VR research, related data, and tools for planning, evaluation, and decision-making.</span>

      </div>

  </article>
    <article class="bb b--black-10 pa2 pa3-ns">

      <div class="dtc w5 v-mid">
        <img src={employma} className="db w-100" alt = "EmploymentFirstMA"/>
      </div>
      <div class="dtc v-top pl3">
	          <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/employmentfirstma">
        <h2 class="f6 f5-ns fw6 lh-title mv0">EmloymentFirstMa</h2>
           </Link>
        <span class="f6 fw4 mt2 mb0 black-60">Promoting inclusive employment in Massachusetts.</span>

      </div>

  </article>
    <article class="bb b--black-10 pa2 pa3-ns">

      <div class="dtc w5 v-mid">
        <img src = {thinkwork} className ="db w-100" alt = "Think Work"/>
      </div>
      <div class="dtc v-top pl3">
	          <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/thinkwork">
        <h2 class="f6 f5-ns fw6 lh-title mv0">ThinkWork</h2>
           </Link>
        <span class="f6 fw4 mt2 mb0 black-60">ThinkWork is the hub for an array of programs related to employment for people with IDD at the Institute for Community Inclusion at the University of Massachusetts Boston.</span>

      </div>

  </article>
    <article class="bb b--black-10 pa2 pa3-ns">

      <div class="dtc w5 v-mid">
        <img src={statedata} className="db w-100" alt = "StateData.info"/>
      </div>
      <div class="dtc v-top pl3">
	          <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/statedata">
        <h2 class="f6 f5-ns fw6 lh-title mv0">StateData.info</h2>
           </Link>
        <span class="f6 fw4 mt2 mb0 black-60">StateData.info promotes Employment First and systems change efforts nationwide by supporting outcome-based management and planning.</span>

      </div>

  </article>


     <article class="bb b--black-10 pa2 pa3-ns">

      <div class="dtc w5 v-mid">
        <img src={seln} className="db w-100" alt = "SELN"/>
      </div>
      <div class="dtc v-top pl3">
	          <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/seln">
        <h2 class="f6 f5-ns fw6 lh-title mv0">SELN</h2>
           </Link>
        <span class="f6 fw4 mt2 mb0 black-60">The State Employment Leadership Network (SELN) brings together state developmental disability agencies for sharing, educating and providing guidance on practices and policies around employment to its members.</span>

      </div>

  </article>

     <article class="bb b--black-10 pa2 pa3-ns">

      <div class="dtc w5 v-mid">
        <img src={catada} className="db w-100" alt = "Catada" />
      </div>
      <div class="dtc v-top pl3">
	          <Link className="link dt w-100  pb2 mt2 dim blue" to="projects/catada">
        <h2 class="f6 f5-ns fw6 lh-title mv0">CATADA</h2>
           </Link>
        <span class="f6 fw4 mt2 mb0 black-60">The Center for Assistive Technology Act Data Assistance (CATADA) provides technical assistance and supports to State Assistive Technology (AT) Programs.</span>

      </div>

  </article>




</section>

  </Layout>
)

export default Projects
