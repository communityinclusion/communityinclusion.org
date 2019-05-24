import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SidebarProject from "../components/sidebarproject"
import PropTypes from 'prop-types'


const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
    <section className="mw8 center">
     <h1>{post.frontmatter.title}</h1>
 
 <div className="cf ph2-ns">
     <SidebarProject />
 
     <div className="fl w-75 pa2">
     
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      </div>
      </section>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectPage

export const aboutPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`
