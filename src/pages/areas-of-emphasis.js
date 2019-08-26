import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import community from '../../images/community.png'
import healthcare from '../../images/healthcare.png'
import education from '../../images/education.png'
import employment from '../../images/employment.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"



const AreasofEmphasis = () => (
  <Layout>
    <Breadcrumb crumbs={ [ 'Home', 'Areas of Emphasis' ] } />
   <section className="center mw8 pa2">
   <SEO title="Areas of Emphasis" />
    <h1>Areas of Emphasis</h1>

    <div className=" w-100 nl2 nr2">
<article className="flex-1 bb b--black-10 ma3 pa3  w-100 ">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-30">
    <img src={employment} className="db" alt = "Employment"/>
  </div>

<div className="w-80-ns pl3-ns">
        <Link className="link dt w-100 mt2 dim blue" to="/areas-of-emphasis/employment">
    <h2 className="f3 fw1 mt0 lh-title">Employment</h2>
       </Link>
    <p className="f6 f5-l lh-copy">Building a rewarding career in the community should be an expectation for all citizens. With support and planning, people with significant disabilities can thrive in the workplace. </p>

   </div>
  </div>

</article>
<article className="flex-1 bb b--black-10  ma3 pa3  w-100 ">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-30">
    <img src={education} className="db" alt = "Education" />
  </div>
<div className="w-80 pl3-ns">
        <Link className="link dt w-100  mt2 dim blue" to="/areas-of-emphasis/education">
    <h2 className="f3 fw1 mt0 lh-title">Education</h2>
       </Link>
    <p className="f6 f5-l lh-copy">From pre-K through university, schools are engaging and involving students with a range of disabilities. By building skills early, young people can exit high school prepared to pursue higher education and find jobs that match their interests.</p>

  </div>
  </div>

</article>

</div>
<div className=" w-100 nl2 nr2">


<article className="flex-1 bb b--black-10 ma3 pa3  w-100 ">

 <div className="flex flex-column flex-row-ns center">
    <div className="pr3-ns mb4  mb0-ns w-30">
    <img src={community} className="db" alt = "Community" />
    </div>

    <div className="w-80 pl3-ns">

        <Link className="link dt w-100 mt2 dim blue" to="/areas-of-emphasis/community">
    <h2 className="f3 fw1 mt0 lh-title">Community</h2>
       </Link>
  <p className="f6 f5-l lh-copy">Outside of work and school, people with disabilities are involved in a wide range of activities that make up a satisfying life. Whether it’s volunteering at a music festival, getting involved with a faith community, or attending a sports event, there’s much more to life than a job.</p>

    </div>
  </div>

</article>
<article className="flex-1 bb b--black-10 ma3 pa3  w-100 ">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-30">
    <img src={healthcare} className="db" alt = "Healthcare" />
  </div>
  <div className="w-80 pl3-ns">
        <Link to="/areas-of-emphasis/healthcare" className="link dt w-100 mt2 dim blue">
    <h2 className="f3 fw1 mt0 lh-title">Healthcare</h2>
       </Link>
    <p className="f6 f5-l lh-copy">Accessing quality health care enables us to live productively and to receive support when facing mental, behavioral, or physical challenges. For people with disabilities, equitable health care can require additional advocacy and planning.</p>

    </div>
  </div>

</article>
</div>



</section>
  </Layout>
)

export default AreasofEmphasis
