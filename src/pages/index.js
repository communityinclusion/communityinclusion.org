import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from 'gatsby-image'
import { kebabCase } from 'lodash';

const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  return (

  <Layout>
    <Image />
  
         <section className="center bg-gray pa1 ph5-ns">
    <p className="f6 f4-ns tl lh-copy">
     ICI recently celebrated its 50th anniversary as a University Center for Excellence in Developmental Disabilities (UCEDD), started by President Kennedy.
{/*UCEDDs work with people with disabilities, members of their families, state and local government agencies, and community providers in projects that provide
training, technical assistance, service, research, and information sharing, with a focus on building the capacity of communities to sustain all their citizens.*/}
    </p>
  </section>
<div className="cf">
<div className="fl w-100-m w-70-ns bg-white pa3">
<section className="mw7 center">
        <h2 className="bb bw1">
          New at ICI
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
         {post.node.frontmatter.tags ? (
                <div className="tags-container">
                  <ul className="taglist">
                    {post.node.frontmatter.tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
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
    
  <a className="twitter-timeline" data-height="700" data-dnt="true"  href="https://twitter.com/ICInclusion?ref_src=twsrc%5Etfw">Tweets by ICInclusion</a> <script async src="https://platform.twitter.com/widgets.js" crossOrigin="anonymous" charSet="utf-8"></script>
   </div>
</div>  
</Layout>
  )}


export default IndexPage


export const pageQuery = graphql`
 query  {
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC},
    filter: { frontmatter: {posttype: {eq: "news"}}}
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
          title
          tags
          thumbnail {
            childImageSharp {
              fixed(width: 200, height: 200) {
                width
                height
                src
                srcSet
              } 
            }
          }
        }
      }
    }
  }
 }
 `