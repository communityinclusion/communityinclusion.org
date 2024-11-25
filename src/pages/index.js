import React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from '../components/seo';
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
    <Seo title="Home" />
       



    <h2 className="bb bw1 border-bottom border-dark border-2 pb-1">Areas of Emphasis</h2>
    
    
    <div className="row">
  <article className="col-lg-6 col-md-12  d-flex align-self-stretch   mb-4">
  <div className="card">
    <div className="card-header bg-green my-0 px-3 ">
    <img src={employment_logo} className="d-inline-block align-middle" alt = "Employment icon" />
    <h3 className="fs-3 text-white  d-inline-block align-middle ps-2">     Employment</h3>
    </div>
    <div className="card-body">
      <p className="lh-copy">
    Building a rewarding career in the community should be an expectation for all citizens. With support and planning, people with significant disabilities can thrive in the workplace.
      </p>
      <p><Link className="float-end" to="/areas-of-emphasis/employment"> Learn More About Employment &gt;&gt;</Link></p>
    </div>
    </div>
  </article>



  <article className="col-lg-6 col-md-12  d-flex align-self-stretch  mb-4">
  <div className="card">
  <div className="card-header bg-purple mv-0 p-2 ">
  <img src={education_logo} className="d-inline-block align-middle" alt = "Education icon" /> 
  <h3 className="text-white d-inline-block align-middle ps-2"> Education</h3>
    </div>
    <div className="card-body">
      <p>
   From pre-K through university, schools are engaging and involving students with a range of disabilities. By building skills early, young people can exit high school prepared to pursue higher education and find jobs that match their interests.
      </p>
      <p><Link className="float-end" to="/areas-of-emphasis/education"> Learn More About Education &gt;&gt;</Link></p>
    </div>
    </div>
  </article>
  </div> 
  
   <div className="row">


  <article className="col-lg-6 col-md-12  d-flex align-self-stretch  mb-4 ">
    <div className="card">
  <div className="card-header bg-red mv-0 px-3 ">
  <img src={community_logo} className="d-inline-block align-middle" alt = "Community icon" /> 
    <h3 className="fs-3 text-white d-inline-block align-middle ps-2"> Community Life</h3>
   </div>
    <div className="card-body">
      <p>
   Outside of work and school, people with disabilities are involved in a wide range of activities that make up a satisfying life. Whether it’s volunteering at a music festival, getting involved with a faith community, or attending a sports event, there’s much more to life than a job.
      </p>
      <p><Link className="float-end" to="/areas-of-emphasis/community"> Learn More About Community Life &gt;&gt;</Link></p>
    </div>
    </div>
  </article>



  <article className="col-lg-6 col-md-12 d-flex align-self-stretch  mb-4">
  <div className="card">
  <div className="card-header bg-orange mv-0 px-3 ">
  <img src={healthcare_logo} className="d-inline-block align-middle" alt = "Healthcare icon" /> 
    <h3 className="text-white d-inline-block align-middle ps-2"> Health Care</h3>
   </div>
    <div className="card-body">
    <p>Accessing quality health care enables us to live productively and to receive support when facing mental, behavioral, or physical challenges. For people with disabilities, equitable health care can require additional advocacy and planning.
      </p>
      <p><Link className="float-end" to="/areas-of-emphasis/healthcare"> Learn More About Health Care &gt;&gt;</Link></p>
    </div>
    </div>
  </article>



  </div>



  <div className="row my-4 ">
  <div className="col-lg-9 col-md-8 col-sm-12 bg-white p-3">
  <section className="center">
          <h2 className="border-bottom border-2 border-dark">
            New at ICI
          </h2>
        
          
         <div className="post-list">
         {posts.map(post => (
         <div key={post.node.id} className="post-list__item border-bottom border-dark ">
         <div className="post-list__thumbnail">
           <Link to={post.node.fields.slug} title="link to article">
           {
              post.node.frontmatter.thumbnail
              && (
              <GatsbyImage image={post.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData} alt={post.node.frontmatter.title} />
              )
            }
           </Link>
         </div>
         <div className="post-list__content">
           <h3 className="h4"> <Link className="blue dim" to={post.node.fields.slug}>
             {post.node.frontmatter.title}
              </Link>
             </h3>
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
   
        <div className="col-lg-3 col-md-4 col-sm-12 tc">
        <div className="staffDropdown">
        <FormControl variant="filled" className="formControl ">
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
     </div>
     </div>
  </HomeLayout>
  );}
}
 

export default IndexPage 

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {posttype: {eq: "news"}}}
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
              gatsbyImageData(width: 200, height: 200, placeholder: BLURRED, layout: FIXED)
            }
          }
        }
      }
    }
  }
  allAirtable(sort: {fields: data___staff_lname}) {
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
