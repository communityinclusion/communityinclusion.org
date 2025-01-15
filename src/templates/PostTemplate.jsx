import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Seo from "../components/Seo"
import PostTags from "../components/PostTags"

const PostTemplate = ({ pageContext, data, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  console.log(crumbs)
  // Example of dynamically using location prop as a crumbLabel
  // const customCrumbLabel = location.pathname.toLowerCase().replace(/-/g, ' ')
  const page = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout location={location}>
      <section className="posttemplate">
        <div className="breadcrumbs">
          <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel={page.frontmatter.title}
          />
        </div>
        <div className="post">
          <h1 className="page-title">{frontmatter.title}</h1>
          {/*  <span>{frontmatter.date}</span> */}

          <article className="cf mt3 post-body">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
          <div className="post-meta">
            <PostTags className="k--button" tags={frontmatter.tags} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PostTemplate

export const Head = () => <Seo />

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`
