import * as React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"
import community_logo from "../images/community-logo.png"
import healthcare_logo from "../images/healthcare-logo.png"
import employment_logo from "../images/employment-logo.png"
import education_logo from "../images/education-logo.png"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
// import { kebabCase } from 'lodash';

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const allAirtable = data.allAirtable.nodes
  {
    const [staff, setStaff] = React.useState("")

    const handleChange = (event) => {
      setStaff(event.target.value)
    }
    return (
      <HomeLayout location={location} title={siteTitle}>
        <section className="center">
          <h2 className="border-bottom border-2 border-dark pb-3">
            Areas of Emphasis
          </h2>

          <div className="row my-4 ">
            <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
              <div className="card mb-2">
                <div className="card-header bg-green">
                  <img
                    src={employment_logo}
                    className="d-inline-block align-middle"
                    alt="Employment icon"
                  />
                  <h3 className="fs-4 text-white d-inline-block align-middle ps-2">
                    {" "}
                    Employment
                  </h3>
                </div>
                <div className="card-body d-flex flex-column px-0 pb-0">
                  <p className="lh-copy">
                    Building a rewarding career in the community should be an
                    expectation for all citizens. With support and planning,
                    people with significant disabilities can thrive in the
                    workplace.
                  </p>
                  <p className="mt-auto">
                    <Link to="/areas-of-emphasis/employment">
                      {" "}
                      Learn More About Employment &gt;&gt;
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
              <div className="card mb-2">
                <div className="card-header bg-purple">
                  <img
                    src={education_logo}
                    className="d-inline-block align-middle"
                    alt="Education icon"
                  />
                  <h3 className="fs-4 text-white d-inline-block align-middle ps-2">
                    {" "}
                    Education
                  </h3>
                </div>
                <div className="card-body d-flex flex-column px-0 pb-0">
                  <p>
                    From pre-K through university, schools are engaging and
                    involving students with a range of disabilities. By building
                    skills early, young people can exit high school prepared to
                    pursue higher education and find jobs that match their
                    interests.
                  </p>
                  <p className="mt-auto">
                    <Link to="/areas-of-emphasis/education">
                      {" "}
                      Learn More About Education &gt;&gt;
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
              <div className="card mb-2">
                <div className="card-header bg-red">
                  <img
                    src={community_logo}
                    className="d-inline-block align-middle"
                    alt="Community icon"
                  />
                  <h3 className="fs-4 text-white d-inline-block align-middle ps-2">
                    {" "}
                    Community Life
                  </h3>
                </div>
                <div className="card-body d-flex flex-column px-0 pb-0">
                  <p>
                    Outside of work and school, people with disabilities are
                    involved in a wide range of activities that make up a
                    satisfying life. Whether it’s volunteering at a music
                    festival, getting involved with a faith community, or
                    attending a sports event, there’s much more to life than a
                    job.
                  </p>
                  <p className="mt-auto">
                    <Link to="/areas-of-emphasis/community">
                      {" "}
                      Learn More About Community Life &gt;&gt;
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex align-self-stretch bg-white p-1">
              <div className="card mb-2">
                <div className="card-header bg-orange">
                  <img
                    src={healthcare_logo}
                    className="d-inline-block align-middle"
                    alt="Healthcare icon"
                  />
                  <h3 className="fs-4 text-white d-inline-block align-middle ps-2">
                    {" "}
                    Health Care
                  </h3>
                </div>
                <div className="card-body d-flex flex-column px-0 pb-0">
                  <p>
                    Accessing quality health care enables us to live
                    productively and to receive support when facing mental,
                    behavioral, or physical challenges. For people with
                    disabilities, equitable health care can require additional
                    advocacy and planning.
                  </p>
                  <p className="mt-auto">
                    <Link to="/areas-of-emphasis/healthcare">
                      {" "}
                      Learn More About Health Care &gt;&gt;
                    </Link>
                  </p>
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
                {posts.map((post) => (
                  <div
                    key={post.node.id}
                    className="post-list__item border-bottom border-dark "
                  >
                    <div className="post-list__thumbnail">
                      <Link to={post.node.fields.slug} title="link to article">
                        {post.node.frontmatter.thumbnail && (
                          <GatsbyImage
                            image={
                              post.node.frontmatter.thumbnail.childImageSharp
                                .gatsbyImageData
                            }
                            alt={post.node.frontmatter.title}
                          />
                        )}
                      </Link>
                    </div>
                    <div className="post-list__content">
                      <h3 className="h4">
                        {" "}
                        <Link className="blue dim" to={post.node.fields.slug}>
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

              <div className="fr pt2">
                <Link to="/news">View More</Link>
              </div>
            </section>
          </div>

          <div className="col-md-4 bg-white p-3">
            <section className="center">
              <h3 className="border-bottom border-2 border-dark pb-1">
                Featured Project
              </h3>
              <div className="card shadow-sm p-1">
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="/projects/michet">
                      Massachusetts Center for Inclusive Higher Education and
                      Transition{" "}
                    </a>
                  </h4>
                  <p>
                    The Massachusetts Center for Inclusive Higher Education and
                    Transition promotes the advancement of higher education and
                    transition services for people with intellectual and
                    developmental disabilities (IDD) and autism.
                  </p>
                </div>
              </div>
            </section>

            <section className="center mt-4">
              <h3 className="border-bottom border-2 border-dark">Staff</h3>

              <div className="tc">
                <div className="staffDropdown">
                  <FormControl variant="filled" className="formControl ">
                    <InputLabel id="demo-simple-select-label tc">
                      Staff Directory
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={staff}
                      onChange={handleChange}
                    >
                      {allAirtable.map((node) => (
                        <MenuItem key={node.recordId} value={node.data.Name}>
                          <Link to={node.fields.slug}>{node.data.Name}</Link>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </section>
          </div>
        </div>
      </HomeLayout>
    )
  }
}

export const Head = () => <Seo title="Home Page" />
export default IndexPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { posttype: { eq: "news" } } }
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
                gatsbyImageData(
                  width: 200
                  height: 200
                  placeholder: BLURRED
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
    allAirtable(sort: { data: { staff_lname: ASC } }) {
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
