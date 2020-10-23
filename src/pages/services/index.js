import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import cesservices from '../../images/services-ces.png'
import consultingservices from '../../images/services-consulting.png'
import acreservices from '../../images/services-acre_logo.png'
import employmentservices from '../../images/empservices-logo.png'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Helmet } from "react-helmet"

export const Services = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
  <Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Services</title>
        </Helmet>
   <section className="main-content">
   <SEO title="Services" />
   <div className="breadcrumbs">
   <Breadcrumb
            location={location}
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel="Services"   
          />
            </div>
    <h1 className="page-title">Services</h1>
    <div className="flex-l w-100 nl2 nr2 center">
    <article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90 ">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={consultingservices} className="db" alt = "ICI Consulting" />
    </div>

 <div className="w-100 w-70-ns">
 
 <a href="https://ici-consulting.netlify.com/" className="link dt w-100  pb2 mt2 dim dark-blue"> 
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">ICI Consulting	</h2></a>
 
  <p className="f6 f5-l lh-copy mt0">Our experts can help your agency or organization improve your outcomes, track your progress, and reach your goals.</p>

    </div>
  </div>

</article>

<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={employmentservices} className="db" alt = "ICI Employment Services" />
  </div>
<div className="w-100 w-70-ns">
<a href="https://www.communityinclusion.org/employmentservices/" className="link dt w-100  pb2 mt2 dim dark-blue"> 
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">ICI Employment Services</h2></a>
     
    <p className="f6 f5-l mt0 lh-copy">Every day, we support people with disabilities to find and sustain employment at fulfilling jobs in the community.
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
<div className="w-100 w-70-ns">
<a href="https://www.directcourseonline.com/employment-services/" className="link dt w-100  pb2 mt2 dim dark-blue"> 

    <h2 className="f3 fw1 mt0 lh-title bb bw2">College of Employment Services</h2></a>

    <p className="f6 f5-l mt0 lh-copy">This dynamic online suite of courses trains employment professionals to guide people with disabilities toward satisfying careers.
</p>

  </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-2 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={acreservices} className="db" alt = "CES/ACRE"/>
  </div>

<div className="w-100 w-70-ns">
<a href="https://www.communityinclusion.org/cesacre/" className="link dt w-100  pb2 mt2 dim dark-blue"> 
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">	CES/ACRE</h2></a>
    <p className="f6 f5-l mt0 lh-copy">Professionals who complete courses from the College of Employment Services can receive additional instruction to gain ACRE certification. </p>

   </div>
  </div>

</article>

</div>



</section>
  </Layout>
)
  }

export default Services
