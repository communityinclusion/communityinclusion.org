import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import cesservices from '../../images/services-ces.png'
import consultingservices from '../../images/services-consulting.png'
import acreservices from '../../images/services-acre_logo.png'
import employmentservices from '../../images/empservices-logo.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const Services = () => (
  <Layout>
    <Breadcrumb crumbs={ [ 'Home', 'Services' ] } />
   <section className="center mw8">
   <SEO title="Services" />
    <h1>Services</h1>
    <div className="flex-l w-100 nl2 nr2 center">
    <article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90 ">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={consultingservices} className="db" alt = "ICI Consulting" />
    </div>

 <div className="w-100 w-70-ns pl3-ns">
 
        <Link className="link dt w-100  pb2 mt2 dim dark-blue" to="projects/thinkcollege">
    <h2 className="f3 fw1 mt0 lh-title bb bw2"><a href="https://ici-consulting.netlify.com/">ICI Consulting</a>	</h2>
       </Link>
  <p className="f6 f5-l lh-copy">Our experts can help your agency or organization improve your outcomes, track your progress, and reach your goals.</p>

    </div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={employmentservices} className="db" alt = "ICI Employment Services" />
  </div>
<div className="w-100 w-70-ns pl3-ns">
        <Link to="/projects/nercve" className="link dt w-100  pb2 mt2 dim dark-blue">
    <h2 className="f3 fw1 mt0 lh-title bb bw2"><a href="https://www.communityinclusion.org/employmentservices/">ICI Employment Services</a></h2>
       </Link>
    <p className="f6 f5-l lh-copy">Every day, we support people with disabilities to find and sustain employment at fulfilling jobs in the community.
</p>

    </div>
  </div>

</article>


</div>
<div className="flex-l w-100 nl2 nr2 center">
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3 w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={cesservices} className="db" alt = "College of Employment Services" />
  </div>
<div className="w-100 w-70-ns pl3-ns">
        <Link className="link dt w-100  pb2 mt2 dim dark-blue" to="projects/explorevr">
    <h2 className="f3 fw1 mt0 lh-title bb bw2"><a href="https://www.directcourseonline.com/employment-services/">College of Employment Services</a></h2>
       </Link>
    <p className="f6 f5-l lh-copy">This dynamic online suite of courses trains employment professionals to guide people with disabilities toward satisfying careers.
</p>

  </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={acreservices} className="db" alt = "CES/ACRE"/>
  </div>

<div className="w-100 w-70-ns pl3-ns">
        <Link className="link dt w-100  pb2 mt2 dim dark-blue" to="projects/employmentfirstma">
    <h2 className="f3 fw1 mt0 lh-title bb bw2">	<a href="https://www.communityinclusion.org/cesacre/">CES/ACRE</a></h2>
       </Link>
    <p className="f6 f5-l lh-copy">Professionals who complete courses from the College of Employment Services can receive additional instruction to gain ACRE certification. </p>

   </div>
  </div>

</article>

</div>



</section>
  </Layout>
)

export default Services
