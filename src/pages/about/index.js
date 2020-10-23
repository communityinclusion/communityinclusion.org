import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'


export const AboutPage = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

 
  return (
    <Layout location={location}>
    <SEO title="About the ICI" />
    <section className="main-content">
    <div className="breadcrumbs">
    <Breadcrumb
            location={location}
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel='About'
          />
          </div>
 
    



    <div className="w-100 pa2">
    <h1 className="page-title">About</h1>
    <p> In 2018, ICI <a href="http://50.communityinclusion.org/">celebrated our 50th anniversary</a> as a <a href="https://www.aucd.org/template/index.cfm">University Center for Excellence in Developmental Disabilities (UCEDD)</a>. President John F. Kennedy launched the UCEDD network in 1963, and today UCEDDs are located at public universities in every U.S. state and territory. </p>
    <p>These 67 UCEDDs collaborate with people with disabilities, members of their families, state and local government agencies, and service providers. The goal is to empower all citizens, with and without disabilities, to fully participate in community settings. This includes workplaces, health care facilities, schools, and everywhere else where people engage with one another.</p> 
    <p>As a member of the UCEDD network, ICI provides training, technical assistance, service, research, and information sharing, with a focus on ending disability-based discrimination and exclusion, and building the capacity of communities to sustain all their citizens.</p>

    </div>


    <div className="flex-l w-100 nl2 nr2 center">
    <article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90 ">

 <div className="flex flex-column flex-row-ns">


 <div className="w-100">
 
	    <Link className="link dt w-100 mt2 dim dark-blue" to="/about/history">
	       <h3 className="fw1 mt0 lh-copy bb bw2">History</h3>
	          </Link>
  <p className="f6 f5-l mt0 lh-copy">Learn about our history and explore our interactive timeline.</p>   

    </div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
  
<div className="w-100">
        <Link to="/about/mission" className="link dt w-100 mt2 dim dark-blue">
    <h3 className="fw1 mt0 lh-copy bb bw2">Mission and Vision</h3>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">From our founding to today, these core principles drive us.</p>  

    </div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90">

<div className="flex flex-column flex-row-ns">
   
<div className="w-100">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/about/staff-directory">
    <h3 className="fw1 mt0 lh-copy bb bw2">Staff</h3>
       </Link>
   <p className="f6 f5-l mt0 lh-copy">View our staff directory.
</p> 

  </div>
  </div>

</article>
</div>
<div className="flex-l w-100 nl2 nr2 center">

<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
  

<div className="w-100">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/about/directions">
    <h3 className="fw1 mt0 bb bw2">Directions</h3>
       </Link>
     <p className="f6 f5-l mt0 lh-copy">Get to our office by car or public transportation. </p>  

   </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90">

<div className="flex flex-column flex-row-ns">
   
<div className="w-100">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/about/contact">
    <h3 className="fw1 mt0 lh-copy bb bw2">Contact</h3>
       </Link>
   <p className="f6 f5-l mt0 lh-copy">Get in touch or ask our staff a question. </p>

  </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
  

<div className="w-100">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/about/glossary">
    <h3 className="fw1 mt0 lh-copy bb bw2">Glossary</h3>
       </Link>
       <p className="f6 f5-l mt0 lh-copy">Your guide to common terms related to disability.</p>  

   </div>
  </div>

</article>
</div>





</section>
  </Layout>
)
  }


export default AboutPage