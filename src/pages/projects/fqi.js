import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import fqiLong from '../../images/fqi.png'

const FQIPage = () => (
  <Layout>
      <section className="mw8 center">
       <SEO title="Future Quest Island" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Future Quest Island</h1>
       <img src={fqiLong} className="db" alt = "Future Quest Island" />
  <p> <Link className="link dim blue" to="https://www.futurequestisland.org/">Future Quest Island</Link>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit velit in metus malesuada pretium quis in massa. Etiam quis quam non nisl lobortis scelerisque non porttitor libero. Sed ultrices urna at dolor viverra, nec malesuada enim ullamcorper. Maecenas convallis, neque vitae convallis lacinia, felis leo porttitor tortor, sit amet condimentum urna urna iaculis sapien. Nam viverra diam urna, non suscipit dolor ultrices nec. Praesent eleifend sit amet nisl vestibulum ullamcorper.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit velit in metus malesuada pretium quis in massa. Etiam quis quam non nisl lobortis scelerisque non porttitor libero. Sed ultrices urna at dolor viverra, nec malesuada enim ullamcorper. Maecenas convallis, neque vitae convallis lacinia, felis leo porttitor tortor, sit amet condimentum urna urna iaculis sapien. Nam viverra diam urna, non suscipit dolor ultrices nec. Praesent eleifend sit amet nisl vestibulum ullamcorper.</p>

<p><Link className="link dim blue" to="https://www.futurequestisland.org/">Future Quest Island</Link> blah blah filler text.</p>
</div>
</div>
</section>
  </Layout>
)

export default FQIPage