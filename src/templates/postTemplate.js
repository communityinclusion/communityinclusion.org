import React from "react";
import { graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Img from 'gatsby-image';
// import { kebabCase } from 'lodash';
// import PostTags from "../components/PostTags";


const postTemplate = ({ pageContext, data }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  // Example of dynamically using location prop as a crumbLabel
  //const customCrumbLabel = location.slug.toLowerCase().replace(/-/g, ' ')
  const page = data.markdownRemark
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
        <SEO title="" />
      <section className="mw8 center ph2-ns">
      <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel={page.frontmatter.title}
            
          />
          </div>
        <div>
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
          
        {/*  <Img
             fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
           /> 
<Img
              fluid={page.featuredImage.childImageSharp.fluid}
              placeholderStyle={{ filter: "blur(20px)" }}
              className="card-img-top"
              title={page.title}
              alt={page.title} />


             
<Img sizes={frontmatter.thumbnail.childImageSharp.sizes}  />
     
     
         
            <Img fluid={thumbnailFluid} className="post-image" />
            <Img sizes={page.frontmatter.thumbnail.childImageSharp.sizes} />
     */}
  </div>
  <article className="cf mt3">
  <div className="fl mr4 pb4">
  <Img className="post-image " fixed={page.frontmatter.thumbnail.childImageSharp.fixed} />

  </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
     {/*   <div className="post-meta">
              <PostTags tags={page.tags} />
            {/*  <SocialLinks postPath={slug} postNode={postNode} />
            </div>*/} 

      </section>

    </Layout>
  );
};

export default postTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        posttype
        thumbnail {
          childImageSharp {
              fixed(width: 300, height: 300) {
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
`;