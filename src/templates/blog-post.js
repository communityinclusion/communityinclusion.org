import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb/breadcrumb"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <Breadcrumb crumbs={ [ 'Home', 'News' ] } />
        <SEO title="Education" />
 
      <div className="center mw8 center ph2-ns">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
