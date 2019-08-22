import React from "react"
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
   <section className="center mw8">
   <SEO title="Areas of Emphasis" />
    <h1>Areas of Emphasis</h1>
   <div className="flex flex-column flex-row-l justify-between">
  <div className="w-100 w-25-l pr4-l mb5 mb0-l">
      <img className = "dib mw-100 h-auto pa1"
   			 alt = "Employment"
            src={employment}
          />
    <h3 className="f5 fw7 mt3 mb4 light-red">
						Employment
					</h3>
					<p className="lh-copy">
          Building a rewarding career in the community should be an expectation for all citizens. With support and planning, people with significant disabilities can thrive in the workplace. 
					</p>
  </div>
  <div className="w-100 w-25-l pr4-l mb5 mb0-l">
  <img className = "dib mw-100 h-auto pa1"
   			 alt = "Education"
            src={education}
          />
   <h3 className="f5 fw7 mt3 mb4 light-red">
						Education
					</h3>
					<p className="lh-copy">
          From pre-K through university, schools are engaging and involving students with a range of disabilities. By building skills early, young people can exit high school prepared to pursue higher education and find jobs that match their interests.
					</p>
  </div>
  <div className="w-100 w-25-l pr4-l mb5 mb0-l">
   <img className = "dib mw-100 h-auto pa1"
   			 alt = "Community"
            src={community}
          />
   <h3 className="f5 fw7 mt3 mb4 light-red">
						Community
					</h3>
					<p className="lh-copy">
          Outside of work and school, people with disabilities are involved in a wide range of activities that make up a satisfying life. Whether it’s volunteering at a music festival, getting involved with a faith community, or attending a sports event, there’s much more to life than a job.					</p>
  </div>
  <div className="w-100 w-25-l pr4-l mb5 mb0-l">
 <img className = "dib mw-100 h-auto pa1"
   			 alt = "Healthcare"
            src={healthcare}
          />
   <h3 className="f5 fw7 mt3 mb4 light-red">
						Health Care
					</h3>
					<p className="lh-copy">
          Accessing quality health care enables us to live productively and to receive support when facing mental, behavioral, or physical challenges. For people with disabilities, equitable health care can require additional advocacy and planning.					</p>
  </div>
</div>

</section>
  </Layout>
)

export default AreasofEmphasis
