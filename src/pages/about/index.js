import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'


const AboutPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
    <SEO title="About the ICI" />
    <section className="mw8 center">
    <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel="About"
          />
          </div>
 
    



    <div className="w-100 pa2">
    <h1>About</h1>
    <p> ICI recently <a href="http://50.communityinclusion.org/">celebrated our 50th anniversary</a> as a <a href="https://www.aucd.org/template/index.cfm">University Center for Excellence in Developmental Disabilities (UCEDD)</a>. President John F. Kennedy launched the UCEDD network in 1963, and today UCEDDs are located at public universities in every U.S. state and territory. </p>
    <p>These 67 UCEDDs collaborate with people with disabilities, members of their families, state and local government agencies, and service providers. The goal is to empower all citizens, with and without disabilities, to fully participate in community settings. This includes workplaces, health care facilities, schools, and everywhere else where people engage with one another.</p> 
    <p>As a member of the UCEDD network, ICI provides training, technical assistance, service, research, and information sharing, with a focus on ending disability-based discrimination and exclusion, and building the capacity of communities to sustain all their citizens.</p>

    </div>


    <div className="flex-l w-100 nl2 nr2 center">
    <article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90 ">

 <div className="flex flex-column flex-row-ns">


 <div className="w-100 w-70-ns">
 
	    <Link className="link dt w-100 mt2 dim dark-blue" to="/about/history">
	       <h2 className="f3 fw1 mt0 lh-copy bb bw2">History</h2>
	          </Link>
  <p className="f6 f5-l mt0 lh-copy">filler text</p>

    </div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
  
<div className="w-100 w-70-ns">
        <Link to="/about/mission" className="link dt w-100 mt2 dim dark-blue">
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">Mission and Vision</h2>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">Filler Text
</p>

    </div>
  </div>

</article>


</div>
<div className="flex-l w-100 nl2 nr2 center">
<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90">

<div className="flex flex-column flex-row-ns">
   
<div className="w-100 w-70-ns">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/about/staff">
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">Staff</h2>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">Filler Text
</p>

  </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
  

<div className="w-100 w-70-ns">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/about/directions">
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">Directions</h2>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">Filler Text </p>

   </div>
  </div>

</article>

</div>


<div className="flex-l w-100 nl2 nr2 center">
<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90">

<div className="flex flex-column flex-row-ns">
   
<div className="w-100 w-70-ns">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/about/contact">
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">Contact</h2>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">Filler Text
</p>

  </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
  

<div className="w-100 w-70-ns">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/about/directions">
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">Directions</h2>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">Filler Text </p>

   </div>
  </div>

</article>

</div>




</section>
  </Layout>
)


export default AboutPage