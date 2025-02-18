import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'


const pageTemplate = ({ pageContext,location, data}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
 
  // Example of dynamically using location prop as a crumbLabel
// const customCrumbLabel = location.pathname.toLowerCase().replace(/-/g, ' ')

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
return (
  <Layout location={location}>
      <section className="pagetemplate">
      <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel={frontmatter.title}
            
          />
          </div>
        <div className="page">
          <h1 className="page-title">{frontmatter.title}</h1>
         {/*  <span>{frontmatter.date}</span> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  );
};






export const Head = ({ data }) => (
     <Seo title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description || data.markdownRemark.frontmatter.excerpt}>
    {/* Additonal values here */}
  
  </Seo>
)

export const pageQuery = graphql`
  query PageBySlug($slug: String!)  {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        tags
        posttype
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;

export default pageTemplate;