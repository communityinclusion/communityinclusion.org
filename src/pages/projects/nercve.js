import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import nercveLong from '../../images/nercve-2019-long.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"


const NercvePage = () => (
  <Layout>
         <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'NERCVE'] } />
      <section className="mw8 center">
       <SEO title="NERCVE" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Northeast Resource Center for Vision Education</h1>
       <img src={nercveLong} className="db" alt = "Nercve" />
  <p>The <a className="link dim blue" href="https://www.nercve.org/">Northeast Resource Center for Vision Education</a> (NERCVE) is committed to improving education for people with blindness and low vision. We offer in-person and online training in three main areas: Teacher of Students with Visual Impairments, Orientation and Mobility, and Vision Rehabilitation Therapy.</p>

<p>Graduates of our programs are trained to help people with visual disabilities access high-quality education, seek employment, and travel independently. Learners can access our courses and complete their master of education degree in vision studies from anywhere in the world. We are affiliated with the <a className="link dim blue" href="https://globalinclusion.umb.edu/academics/graduate-programs/vision-studies-med">Vision Studies Program</a> within UMass Boston’s <a className="link dim blue" href="https://globalinclusion.umb.edu/">School for Global Inclusion and Social Development</a>.</p>

<p><a className="link dim blue" href="https://www.nercve.org/">Learn more about how NERCVE trains</a> vision professionals.</p>
</div>
</div>
</section>
  </Layout>
)

export default NercvePage