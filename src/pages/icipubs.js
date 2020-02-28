import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import cat from '../images/cat.jpeg'


class ICIPubsComponent extends React.Component {
  render() {
    const data = this.props.data.allPubsXlsxSheet1.edges
    return (
      

      
      <Layout>
        <SEO title="ICI Pubs" />
            <section className="mw8 center">
       <div className="w-100 pa2">
       <h1>ICI Pubs</h1>


       <div className="w-100 nl2 nr2 center">
    <article className=" bt bb b--black-10 shadow-4 ma3 pa3  w-90 ">

 <div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-15-ns">
    <i class="fas fa-file-pdf fa-7x"></i>
    </div>

 <div className="w-100 w-85-ns">
 
	    <a className="link dt w-100 mt2 dim dark-blue" href="https://www.thinkwork.org/power-disability-employment-impact-arizonas-economy">
	       <h2 className="f3 fw1 mt0 lh-copy bb bw2">The Power of Disability Employment: The Impact to Arizona’s Economy</h2>
	          </a>
  <p className="f6 f5-l mt0 lh-copy">The Arizona Developmental Disabilities Planning Council (ADDPC) contracted with the Institute for Community Inclusion (ICI) at the University of Massachusetts Boston to explore the economic impacts for Arizona of increasing the employment of individuals with disabilities and to analyze how the state can improve its efforts.</p>

    </div>
  </div>

</article>

<article className="bt bb b--black-10 shadow-4 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={cat} className="db" alt = "Cat" />
  </div>
<div className="w-100 w-70-ns">
        <Link to="/areas-of-emphasis/education" className="link dt w-100 mt2 dim dark-blue">
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">Education</h2>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">From pre-K through university, schools are engaging and involving students with a range of disabilities. By building skills early, young people can exit high school prepared to pursue higher education and find jobs that match their interests.
</p>

    </div>
  </div>

</article>


 
<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <i className="fas fa-file-pdf 5x"></i>
  </div>
<div className="w-100 w-70-ns">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/areas-of-emphasis/community">
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">Community</h2>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">Outside of work and school, people with disabilities are involved in a wide range of activities that make up a satisfying life. Whether it’s volunteering at a music festival, getting involved with a faith community, or attending a sports event, there’s much more to life than a job.
</p>

  </div>
  </div>

</article>
<article className="flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90">

<div className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4  mb0-ns w-100 w-30-ns">
    <img src={cat} className="db" alt = "Healthcare"/>
  </div>

<div className="w-100 w-70-ns">
        <Link className="link dt w-100 mt2 dim dark-blue" to="/areas-of-emphasis/healthcare">
    <h2 className="f3 fw1 mt0 lh-copy bb bw2">	Healthcare</h2>
       </Link>
    <p className="f6 f5-l mt0 lh-copy">Accessing quality health care enables us to live productively and to receive support when facing mental, behavioral, or physical challenges. For people with disabilities, equitable health care can require additional advocacy and planning. </p>

   </div>
  </div>

</article>

</div>







      

          <div >
            {data.map((row) => (
              <ul className="ba">
                <li className="pv2 ph3"><a href={`${row.node.download_url}`}>{row.node.title}</a></li>
                <li className="pv2 ph3">{row.node.authors}</li>
                </ul>
            ))}

</div>
        
        </div>
      </section>
  </Layout>
    )
  }
}

export default ICIPubsComponent


export const IndexQuery = graphql`
  query {
    allPubsXlsxSheet1{
      edges {
        node {
          title
          abstract
          authors
          download_url
        }
      }
    }
  }
`
