import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import cesservices from '../../images/services-ces.png'
import consultingservices from '../../images/services-consulting.png'
import acreservices from '../../images/services-acre.png'
import taservices from '../../images/services-ta.png'
import employmentservices from '../../images/empservices-logo.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const Services = () => (
  <Layout>
    <Breadcrumb crumbs={ [ 'Home', 'Services' ] } />
   <section className="center mw8">
   <SEO title="Services" />
    <h1>Services</h1>
<div className="flex">
  <div className="w-20-ns w-100-m pa2 mr2">
    <img className = "dib mw-100 h-auto"
   			 alt = "ICI Consulting"
            src={consultingservices}
          />
           <h3 className="f5 fw7 mt3 mb4 light-red">
						ICI Consulting
					</h3>
					<p className="lh-copy">
          Our experts can help your agency or organization improve your outcomes, track your progress, and reach your goals.
					</p>

  </div>
  <div className="w-20-ns w-100-m  pa2 mr2">

   <img className = "dib mw-100 h-auto"
   			 alt = "Training and TA"
            src={taservices}
          />
           <h3 className="f5 fw7 mt3 mb4 light-red">
						Training and TA
					</h3>
					<p className="lh-copy">
          Use our customized training and technical assistance services to keep your employees at the top of their game.
					</p>


  </div>
  <div className="w-20-ns w-100-m pa2 mr2">

       <img className = "dib mw-100 h-auto"
   			 alt = "ICI Employment Services"
            src={employmentservices}
          />
           <h3 className="f5 fw7 mt3 mb4 light-red">
						ICI Employment Services
					</h3>
					<p className="lh-copy">
          Every day, we support people with disabilities to find and sustain employment at fulfilling jobs in the community.
					</p>

       </div>
  <div className="w-20-ns w-100-m pa2 mr2">
   <img className = "dib mw-100 h-auto"
   			 alt = "College of Employment Services"
            src={cesservices}
          />
           <h3 className="f5 fw7 mt3 mb4 light-red">
						College of Employment Services
					</h3>
					<p className="lh-copy">
          This dynamic online suite of courses trains employment professionals to guide people with disabilities toward satisfying careers.
					</p>

  </div>
  <div className="w-20-ns w-100-m pa2">
  <img className = "dib mw-100 h-auto"
   			 alt = "CES/ACRE"
            src={acreservices}
          />
           <h3 className="f5 fw7 mt3 mb4 light-red">
						CES/ACRE
					</h3>
					<p className="lh-copy">
          Professionals who complete courses from the College of Employment Services can receive additional instruction to gain ACRE certification.
					</p>

  </div>
</div>
</section>
  </Layout>
)

export default Services
