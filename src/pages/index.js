import React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import Img from 'gatsby-image'
import SEO from '../components/seo';
import community_logo from '../images/community-logo.png'
import healthcare_logo from '../images/healthcare-logo.png'
import employment_logo from '../images/employment-logo.png'
import education_logo from '../images/education-logo.png'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { kebabCase } from 'lodash';

const IndexPage = ({data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const allAirtable = data.allAirtable.nodes;
  {
    const [staff, setStaff] = React.useState('');
  
    const handleChange = (event) => {
      setStaff(event.target.value);
    };
  return (


  <HomeLayout location={location} title={siteTitle}>
  <SEO title="Home" />
     


 
  <div className="alertbox">
     <span className="lh-title f6">To keep our staff and others healthy and safe, the Institute for Community Inclusion is following social distancing protocols issued by UMass Boston and state officials. Our physical office is currently closed. Our staff are working remotely and available via email. Our main phone line will also be monitored regularly: 617-287-4300. Stay well!</span>
</div>

  <h2 className="bb bw1">Areas of Emphasis</h2>
  
  
  <div className="flex-l center">
<article className="flex-1 shadow-4 mr4-l mb4">
  <div className=" bg-green mv0 ph3 ">
  <img src={employment_logo} className="dib v-mid" alt = "Employment icon" />
  <h3 className="f3 white  dib v-mid pl2">     Employment</h3>
  </div>
  <div className="pa3">
    <p className="f6 f5-ns lh-copy">
  Building a rewarding career in the community should be an expectation for all citizens. With support and planning, people with significant disabilities can thrive in the workplace.
    </p>
  </div>
</article>



<article className="flex-1 shadow-4 mb4">
<div className="bg-purple mv0 ph3 ">
<img src={education_logo} className="dib v-mid" alt = "Education icon" /> 
  <h3 className="f3 white dib v-mid pl2"> Education</h3>
  </div>
  <div className="pa3">
    <p className="f6 f5-ns lh-copy">
 From pre-K through university, schools are engaging and involving students with a range of disabilities. By building skills early, young people can exit high school prepared to pursue higher education and find jobs that match their interests.
    </p>
  </div>
</article>
</div> 
 <div className="flex-l center">


<article className="flex-1 shadow-4 mb4 mr4-l">
<div className="bg-red mv0 ph3 ">
<img src={community_logo} className="dib v-mid" alt = "Community icon" /> 
  <h3 className="f3 white dib v-mid pl2"> Community Life</h3>
 </div>
  <div className="pa3">
    <p className="f6 f5-ns lh-copy ">
 Outside of work and school, people with disabilities are involved in a wide range of activities that make up a satisfying life. Whether it’s volunteering at a music festival, getting involved with a faith community, or attending a sports event, there’s much more to life than a job.
    </p>
  </div>
</article>



<article className="flex-1 shadow-4 mb4">
<div className="bg-orange mv0 ph3 ">
<img src={healthcare_logo} className="dib v-mid" alt = "Healthcare icon" /> 
  <h3 className="f3 white dib v-mid pl2"> Health Care</h3>
 </div>
  <div className="pa3">
  <p className="f6 f5-l mt0 lh-copy">Accessing quality health care enables us to live productively and to receive support when facing mental, behavioral, or physical challenges. For people with disabilities, equitable health care can require additional advocacy and planning.
    </p>
  </div>
</article>



</div>



<div className="cf">
<div className="fl w-100-m w-75-ns bg-white pa3">
<section className="center">
        <h2 className="bb bw1">
          New at ICI
        </h2>
      
        
       <div className="post-list">
       {posts.map(post => (
       <div key={post.node.id} className="post-list__item bb b--black-10 ">
       <div className="post-list__thumbnail">
         <Link to={post.node.fields.slug}>
         {
            post.node.frontmatter.thumbnail
            && (
            <Img fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed}
            />
            )
          }
         </Link>
       </div>
       <div className="post-list__content">
         <h2> <Link className="no-underline underline-hover blue dim" to={post.node.fields.slug}>
           {post.node.frontmatter.title}
            </Link>
           </h2>
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
 
      <div className="fl w-100-m w-25-ns tc pa3 mt4 ">
      <div className="staffDropdown">
      <FormControl variant="filled" className="formControl mb3">
        <InputLabel id="demo-simple-select-label tc">Staff Directory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={staff}
          onChange={handleChange}
        >
    { 
		allAirtable.map((node) => (
    
        
          <MenuItem key={node.recordId} value={node.data.Name}><Link to={node.fields.slug}>{node.data.Name}</Link></MenuItem>
       
    
    ))}
</Select>
</FormControl>
            
        </div>
        <div className="twitterWrap">
  <a className="twitter-timeline bg-color-blue" data-height="700" data-dnt="true"  href="https://twitter.com/ICInclusion?ref_src=twsrc%5Etfw">Tweets by ICInclusion</a> <script async src="https://platform.twitter.com/widgets.js" crossOrigin="anonymous" charSet="utf-8"></script>
 </div>
   </div>
   </div>
</HomeLayout>
  )}
}
 

export default IndexPage 

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {posttype: {eq: "news"}}}, limit: 3) {
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
  allAirtable (sort: {fields: data___staff_lname}) {
    nodes {
      recordId
      fields {
        slug
      }
      data {
        Name
        staff_lname
      }
    }
  }
}
 `