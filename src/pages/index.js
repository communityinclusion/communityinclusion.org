import * as React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from '../components/seo';
import community_logo from '../images/community-logo.png'
import healthcare_logo from '../images/healthcare-logo.png'
import employment_logo from '../images/employment-logo.png'
import education_logo from '../images/education-logo.png'
import emp_infograph from "../images/graphic1_ICI_emp.png"
import ed_infograph from "../images/graphic2_ICI_ed.png"
import ek_photo from "../images/stories/CO-Demonstration-2021_crop.jpg"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
 import Select from '@mui/material/Select';
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
       

<section className="center infograph">
<div className="row my-4 ">
<div className="col-md-6 d-flex flex-column justify-content-between bg-white p-4">
<h2 className="h4">The number of people with disabilities who work in competitive jobs is growing.</h2>
<img src={emp_infograph} className="d-inline-block img-fluid align-middle" alt = "Since 1988, Integrated Employment has increased people with disabilities hired for jobs by 325% (33,092 to 140,521)" />
</div>
<div className="col-md-6 d-flex flex-column justify-content-between bg-white p-4">
<h2 className="h4">Career and technical education can improve post-school outcomes for students with disabilities.</h2>
  <img src={ed_infograph} className="d-inline-block align-middle img-fluid " alt = "Individuals with intellectual disability who receive postsecondary ed are 2X more employable, make $406 more income, and require $77 less in SSI, per month" />
</div>


</div>


</section>



<section className="center AoS">
<h2 className="border-bottom border-2 border-dark pb-3">Areas of Success</h2> 
<p className="fs-5 fw-bold">We offer actionable solutions that increase opportunities for people with disabilities to achieve employment in our competitive and vibrant economy. 
</p>
<div className="row my-4 ">
<div className="col-md-3 d-flex align-self-stretch bg-white p-1">
<div className="card mb-2">
<h3 className="fs-4  dark-blue text-center d-inline-block align-middle ps-2 fw-bold"> We promote self-sufficiency.</h3>
<div className="card-body d-flex flex-column px-0 pb-0">
      <p className="lh-copy">
We study and publish the latest trends on employment & economic self-sufficiency for people with intellectual disabilities.
      </p>

    </div>
    </div>
 </div>


 <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
  <div className="card mb-2">
  <h3 className="fs-4 dark-blue text-center d-inline-block align-middle ps-2 fw-bold"> We expand economic opportunities.</h3>
    <div className="card-body d-flex flex-column px-0 pb-0">
      <p>
All people want an opportunity to do paid work. Work is one way people with disabilities contribute to their communities and to the economy.
      </p>
    </div>
    </div>
 </div>

 <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
 <div className="card mb-2">
    <h3 className="fs-4 dark-blue text-center d-inline-block align-middle ps-2 fw-bold">  We engage with businesses.</h3>
    <div className="card-body d-flex flex-column px-0 pb-0">
      <p>
Research has shown that people with disabilities are an untapped, qualified resource in the labor market. Business engagement is a key component in improving employment outcomes.
      </p>
    </div>
    </div>
</div>


 <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
  <div className="card mb-2">
    <h3 className="fs-4 dark-blue d-inline-block align-middle ps-2 fw-bold"> We are committed to academic excellence.</h3>
    <div className="card-body d-flex flex-column px-0 pb-0">
    <p>Our evidence-based research helps inform public policy at the federal, state, and local levels to improve employment and education outcomes.  </p>
    </div>
    </div>
  </div>
 </div>
 </section>

 <section className="center pb-3">
 <div className="bg-light card">
 <h2 className="border-bottom border-2 border-dark pb-3"><span className="display-5 dark-blue">Independence In Action</span>
 <br /><span className="h3">Speaking with Confidence and Humor</span> </h2>
 <div className="row">
    <div className="col-sm-9">
    <p>After undergoing a total laryngectomy that left her with no voice, E.K., a 71-year-old ICU nurse, was referred for an Augmentative Alternative Communication (AAC) evaluation by the Division of Vocational Rehabilitation.</p>

<p>Ms. K. found that the Wego 7A by TalkToMe Technologies supported her communication in several different ways. Through training, Ms. K. learned to use the pre-set word buttons to build novel responses in a conversation, ask and answer questions, and support her social interactions.</p>

<p><strong>Searching for employment has been Ms. K.'s priority.</strong> While waiting for the perfect nursing position, Ms. K. has successfully worked with local food delivery services, communicating regularly with customers, restaurant staff, and her employers using her AAC device. When asked how her AAC device has impacted her daily life, smiling, she uses her AAC device to reply, “I can order food in a drive-thru, and be funny too”. Regarding returning to her career, Ms. K. emphatically demands, “I can do everything I used to be able to do, except talk.”</p>
    </div>
    <div className="col-sm-3"><img className="img-fluid border border-2 border-primary" src={ek_photo} alt="Ms E. K. with her  Augmentative Alternative Communication (AAC) device" />
    <p className="mt-auto"><Link to="/publications/stories/"><strong> More stories about Independence in Action &gt;&gt; </strong></Link></p> </div>
  </div>

 </div>
  </section>




<section className="center">
<h2 className="border-bottom border-2 border-dark pb-3">Areas of Emphasis</h2> 
<p className="fs-5 fw-bold">We investigate real-world problems and challenges through our vast network of research projects, program evaluation, training, consultation, education, policy analysis, and service delivery. </p>
<div className="row my-4 ">
<div className="col-md-3 d-flex align-self-stretch bg-white p-1">
<div className="card mb-2">
<div className="card-header bg-green">
<img src={employment_logo} className="d-inline-block align-middle" alt = "Employment icon" />
<h3 className="fs-4 text-white d-inline-block align-middle ps-2"> Employment</h3>
</div>
    <div className="card-body d-flex flex-column px-0 pb-0">
      <p className="lh-copy">
    Building a rewarding career in the community should be an expectation for all citizens. With support and planning, people with significant disabilities can thrive in the workplace.
      </p>
     <p className="mt-auto"><Link to="/areas-of-emphasis/employment"> Learn More About Employment &gt;&gt;</Link></p>
    </div>
    </div>
 </div>


 <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
  <div className="card mb-2">
  <div className="card-header bg-purple">
  <img src={education_logo} className="d-inline-block align-middle" alt = "Education icon" /> 
  <h3 className="fs-4 text-white d-inline-block align-middle ps-2"> Education</h3>
    </div>
    <div className="card-body d-flex flex-column px-0 pb-0">
      <p>
   From pre-K through university, schools are engaging and involving students with a range of disabilities. By building skills early, young people can exit high school prepared to pursue higher education and find jobs that match their interests.
      </p>
      <p className="mt-auto"><Link to="/areas-of-emphasis/education"> Learn More About Education &gt;&gt;</Link></p>
    </div>
    </div>
 </div>

 <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
 <div className="card mb-2">
  <div className="card-header bg-red">
  <img src={community_logo} className="d-inline-block align-middle" alt = "Community icon" /> 
    <h3 className="fs-4 text-white d-inline-block align-middle ps-2"> Community Life</h3>
   </div>
    <div className="card-body d-flex flex-column px-0 pb-0">
      <p>
   Outside of work and school, people with disabilities are involved in a wide range of activities that make up a satisfying life. Whether it's getting involved with a faith community, attending a sports event, or volunteering at a local charity, people with disabilities participate in their community.
      </p>
      <p className="mt-auto"><Link to="/areas-of-emphasis/community"> Learn More About Community Life &gt;&gt;</Link></p>
    </div>
    </div>
</div>


 <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
  <div className="card mb-2">
  <div className="card-header bg-orange">
 <img src={healthcare_logo} className="d-inline-block align-middle" alt = "Healthcare icon" />
    <h3 className="fs-4 text-white d-inline-block align-middle ps-2">  Health Care</h3>
   </div>
    <div className="card-body d-flex flex-column px-0 pb-0">
    <p>Accessing quality health care enables us to live productively and to receive support when facing mental, behavioral, or physical challenges. For people with disabilities, adequate health care can require additional advocacy and planning.
      </p>
      <p className="mt-auto"><Link to="/areas-of-emphasis/healthcare"> Learn More About Health Care &gt;&gt;</Link></p>
    </div>
    </div>
  </div>
 </div>
 </section>



<div className="row my-4 ">
  <div className="col-md-8 bg-white p-3">
  <section className="center">
          <h2 className="border-bottom border-2 border-dark pb-1">
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

  <div className="col-md-4 bg-white p-3">
  <section className="center">
          <h3 className="border-bottom border-2 border-dark pb-1">
            Featured Project
          </h3>
          <div className="card shadow-sm p-1">
				<div className="card-body">
				<h4 className="card-title"><a href="/projects/thinkwork">
				ThinkWork!  </a>
				</h4>
				<p>ThinkWork serves as the hub for an array of research, training, and technical assistance efforts focused on employment of people with intellectual and developmental disabilities (IDD).</p>
				</div>
	 </div>
  </section>
  


 
  <section className="center mt-4">
          <h3 className="border-bottom border-2 border-dark">
           Staff 
          </h3>
        

  <div className="tc">
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
</section>  
</div>
    </div>
 

<div className="row my-4 ">
  <div className="col-md-12 bg-white p-3">

   <p> <b>Our Mission:</b> The Institute for Community Inclusion (ICI) at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of society. As practitioners, researchers, and teachers, we form partnerships with individuals, families, community organizations, and service agencies. Together, we advocate for personal choice and self-determination. </p>
</div>
</div>
  
  </HomeLayout>
  );}
}
 
export const Head = () => <Seo title="Home" />
export default IndexPage 

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {posttype: {eq: "news"}}}
    limit: 5
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
  allAirtable(sort: {data: {staff_lname: ASC}}) {
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
