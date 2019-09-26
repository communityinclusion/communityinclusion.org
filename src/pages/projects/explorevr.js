import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import explorevrLong from '../../images/explorevr-long.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const ExplorevrPage = () => (
  <Layout>
         <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'ExploreVR'] } />
      <section className="mw8 center">
       <SEO title="ExploreVR" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>ExploreVR</h1>
       <img src={explorevrLong} className="db" alt = "ExploreVR" />
  <p><a className="link dim blue" href="https://www.explorevr.org/">ExploreVR</a> gives vocational rehabilitation (VR) agencies easy and convenient access to a range of VR research, related data, and tools for planning, evaluation, and decision-making. Users can watch videos highlighting success stories of VR clients who have found fulfilling work in their communities. A range of toolkits provide resources on topics such as business engagement and labor market information.</p>

<p>ICI conducts a wide range of research related to VR, such as the <a className="link dim blue" href="https://www.explorevr.org/returntoworkssdi">Substantial Gainful Activity (SGA) project</a>, which focused on improving the wage outcomes of people receiving Social Security Disability Insurance. Members of the SGA team implemented a model demonstration rigorously testing a rapid engagement coordinated team approach in Kentucky and Minnesota.</p>

<p>Learn how <a className="link dim blue" href="https://www.explorevr.org/">Explore VR supports research and innovation around employment</a>. </p>
</div>
</div>
</section>
  </Layout>
)

export default ExplorevrPage