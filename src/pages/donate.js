import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

 
  const DonatePage = ({
    pageContext: {
      breadcrumb: { crumbs },
    },
    
  }) => (
  <Layout>
 
      <section className="mw8 center">
       <SEO title="Donate" />
       <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel="Donate"
          />
          </div>
   
   
   
       <div className="w-100 pa2">
       <h1>Donate</h1>
       <h2>To Build Our Impact, We Need Your Support</h2>
<p>For over 50 years, ICI has empowered and collaborated with people with disabilities to ensure their full engagement in workplaces, schools, health care settings, and the community.</p>
<p>Over those decades, much of our work has been funded by state and federal grants, as well as the generosity of individual and corporate sponsors. Your support enables us to continue our efforts on the front lines of disability rights.</p>
<p>Your tax-free donation will allow us to...</p>
<ul>
<li>Train self-advocates with disabilities to lobby policy-makers for legislative change.</li>
<li>Support colleges and universities to include students with intellectual disabilities on their campuses and in their classrooms.</li>
<li>Educate health care professionals about effective communication with and accommodations for patients with disabilities.</li>
<li>Offer technical assistance and consulting to state agencies that support people with disabilities to build fulfilling careers in their communities.</li>
</ul>
<p>Donations in any amount are welcome. Thank you for supporting our mission of equity and inclusion!</p>

<div className="ph3"><Link to="https://securelb.imodules.com/s/1355/boston/giving/17/form.aspx?sid=1355&gid=3&pgid=5411&cid=13247&appealcode=GiveBtn&dids=522&bledit=1" className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" >Donate Today</Link></div>

 
</div>

</section>
  </Layout>
)

export default DonatePage
