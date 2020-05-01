import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from 'gatsby-image'
import community_logo from '../images/community-logo.png'
import healthcare_logo from '../images/healthcare-logo.png'
import employment_logo from '../images/employment-logo.png'
import education_logo from '../images/education-logo.png'
// import { kebabCase } from 'lodash';

const IndexPage = ({data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (

  <Layout location={location} title={siteTitle}>
    <Image />
  
         <section className="center bg-gray pa1 ph5-ns">
    <p className="f6 f4-ns tl lh-copy">
     ICI recently celebrated its 50th anniversary as a University Center for Excellence in Developmental Disabilities (UCEDD), started by President Kennedy.
{/*UCEDDs work with people with disabilities, members of their families, state and local government agencies, and community providers in projects that provide
training, technical assistance, service, research, and information sharing, with a focus on building the capacity of communities to sustain all their citizens.*/}
    </p>
  </section>

  <section className="mw9 center ph5-ns">
  <h2 className="bb bw1">Areas of Emphasis</h2>
  <div className="flex-l w-100 ml2 mr2 center">
<article className="flex-1 shadow-4 ma3  w-90 ">
  <div className=" bg-green mv0 ph3 ">
  <img src={employment_logo} className="dib v-mid" alt = "Employment icon" />
  <h3 className="f3 white  dib v-mid pl2">     Employment</h3>
  </div>
  <div className="pa3">
    <p className="f6 f5-ns lh-copy measure mv0">
  Building a rewarding career in the community should be an expectation for all citizens. With support and planning, people with significant disabilities can thrive in the workplace.
    </p>
  </div>
</article>



<article className="flex-1 shadow-4 ma3 w-90 ">
<div className="bg-purple mv0 ph3 ">
<img src={education_logo} className="dib v-mid" alt = "Education icon" /> 
  <h3 className="f3 white dib v-mid pl2"> Education</h3>
  </div>
  <div className="pa3">
    <p className="f6 f5-ns lh-copy measure mv0">
 From pre-K through university, schools are engaging and involving students with a range of disabilities. By building skills early, young people can exit high school prepared to pursue higher education and find jobs that match their interests.
    </p>
  </div>
</article>
</div> 
 <div className="flex-l w-100 ml2 mr2 center">


<article className="flex-1 shadow-4 ma3  w-90 ">
<div className="bg-red mv0 ph3 ">
<img src={community_logo} className="dib v-mid" alt = "Community icon" /> 
  <h3 className="f3 white dib v-mid pl2"> Community</h3>
 </div>
  <div className="pa3">
    <p className="f6 f5-ns lh-copy measure mv0">
 Outside of work and school, people with disabilities are involved in a wide range of activities that make up a satisfying life. Whether it’s volunteering at a music festival, getting involved with a faith community, or attending a sports event, there’s much more to life than a job.
    </p>
  </div>
</article>



<article className="flex-1 shadow-4 ma3  w-90 ">
<div className="bg-orange mv0 ph3 ">
<img src={healthcare_logo} className="dib v-mid" alt = "Healthcare icon" /> 
  <h3 className="f3 white dib v-mid pl2"> Healthcare</h3>
 </div>
  <div className="pa3">
  <p className="f6 f5-l mt0 lh-copy">Accessing quality health care enables us to live productively and to receive support when facing mental, behavioral, or physical challenges. For people with disabilities, equitable health care can require additional advocacy and planning.
    </p>
  </div>
</article>



</div>
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
         <h2> <Link className="no-underline underline-hover blue dim" to={post.node.fields.slug}>
           {post.node.frontmatter.title}
            </Link>
           </h2>
       {/* 
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
              */}
         <div className="post-list__excerpt">
           <p>{post.node.excerpt}</p>
         </div>
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
  query {
    site {
      siteMetadata {
        title
      }
    }
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