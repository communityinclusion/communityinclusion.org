import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SidebarAbout from "../components/sidebarabout"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
    <section className="mw8 center">
     <h1>{post.frontmatter.title}</h1>
 
 <div className="cf ph2-ns">
     <SidebarAbout />
 
     <div className="fl w-75 pa2">
     
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      </div>
      </section>
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
