import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from 'gatsby-image';


const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  return (

  <Layout>
    <Image />
  
         <section className=" mt1 center bg-gray pa3 ph5-ns">
    <p className="f6 tl lh-copy">
     ICI recently celebrated its 50th anniversary as a University Center for Excellence in Developmental Disabilities (UCEDD), started by President Kennedy.
UCEDDs work with people with disabilities, members of their families, state and local government agencies, and community providers in projects that provide
training, technical assistance, service, research, and information sharing, with a focus on building the capacity of communities to sustain all their citizens.
    </p>
  </section>
<div className="cf">
  {/*<div className="fl w-100-m w-70-ns bg-white pa3">
<section className="mw7 center">
  <h2 className="fw1 ph3 ph0-l">News</h2>
  <article className="bt bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
           <img className = "dib mw-100 h-auto"
   			 alt = "cat"
            src={cat}
          />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f3 fw1 mt0 lh-title">#ICI50</h1>
          <p className="f6 f5-l lh-copy">
           The ICI recently celebrated 50 years of promoting inclusion through its research and training activities. To see a recap of our festivities, view an interactive historical timeline of the institute, and see videos of the ICI community speaking about Inclusion, visit our #ICI50 page.
          </p>

        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img className = "dib mw-100 h-auto"
   			 alt = "cat"
            src={cat}
          />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 mt0 lh-title">2019-20 Gopen and Crocker Fellowships</h1>
          <p className="f6 f5-l lh-copy">
          The application process is now open for the 2019-20 Gopen and Crocker Fellowships. The deadline to apply is Tuesday, April 23rd.
          </p>

        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
           <img className = "dib mw-100 h-auto"
   			 alt = "cat"
            src={cat}
          />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 mt0 lh-title">CES ACRE Supplement Now Available</h1>
          <p className="f6 f5-l lh-copy">
        Offered through Direct Course, the College of Employment Services (CES) curriculum can help your staff advance their careers as employment professionals. Now they can access even more intensive career development, through the CES ACRE Supplement offered by the Institute for Community at the University of Massachusetts Boston.
          </p>

        </div>
      </div>
    </a>
  </article>
</section>
</div>
*/}
<div className="fl w-100-m w-70-ns bg-white pa3">
<section className="mw7 center">
        <h2 className="bb bw1">
          News
        </h2>
      
        
       <div className="post-list">
       {posts.map(post => (
       <div key={post.node.id} className="post-list__item bb b--black-10 ">
       <div className="post-list__thumbnail">
         <Link to={post.node.fields.slug}>
           <Img
             fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed}
           />
         </Link>
       </div>
       <div className="post-list__content">
         <h2>{post.node.frontmatter.title}</h2>
         <p>{post.node.frontmatter.date}</p>
         <div className="post-list__excerpt">
           <p>{post.node.excerpt}</p>
         </div>
         <Link className="button button--small" to={post.node.fields.slug}>
           Read More
         </Link>
       </div>
     </div>

        ))}
</div>
      
        <div className="fr pt2"><Link to="/news">View More</Link></div>
      </section>
      </div>
 
  <div className="fl w-100-m w-25-ns tc pa3 mt4 bg-dark-blue ">
    
<a className="twitter-timeline" data-height="700" href="https://twitter.com/ICInclusion?ref_src=twsrc%5Etfw">Tweets by ICInclusion</a>
 </div>
</div>  
</Layout>
  )}


export default IndexPage


export const pageQuery = graphql`
 query  {
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
     limit: 3
     ) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YY")
          title
          thumbnail {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
        }
      }
    }
  }
 }
 `