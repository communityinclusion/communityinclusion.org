import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import community from '../images/community.png'
import healthcare from '../images/healthcare.png'
import education from '../images/education.png'
import employment from '../images/employment.png'

const AreasofEmphasis = () => (
  <Layout>
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
  </div>
  <div className="w-100 w-25-l pr4-l mb5 mb0-l">
 <img className = "dib mw-100 h-auto pa1"
   			 alt = "Healthcare"
            src={healthcare}
          />
   <h3 className="f5 fw7 mt3 mb4 light-red">
						Healthcare
					</h3>
					<p className="lh-copy">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
  </div>
</div>

</section>
  </Layout>
)

export default AreasofEmphasis
