import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const News = ({data}) => (
  <Layout>
         <Breadcrumb crumbs={ [ 'Home', 'News' ] } />
   <section className="center mw8">
   <SEO title="News" />
    <h1>News</h1>

 

<div className="bg-white pa3">
   
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug} >
              <h2 className="f3 fw1 mt0 lh-title">
                {node.frontmatter.title}{" "}
                
              </h2>
              </Link>
              <p>{node.excerpt}</p>
          
          </div>
        ))}
      </div>

</section>
</Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default News