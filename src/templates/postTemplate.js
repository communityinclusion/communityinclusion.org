import React from "react";
import { graphql} from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
// import Img from 'gatsby-image';
import PostTags from "../components/PostTags";


const postTemplate = ({ pageContext, data, location  }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  console.log(crumbs);

  // Example of dynamically using location prop as a crumbLabel
  //const customCrumbLabel = location.slug.toLowerCase().replace(/-/g, ' ')
  const page = data.markdownRemark
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout location={location}>
         <Seo
      title={page.frontmatter.title}
      description={page.frontmatter.description || page.excerpt}
    />
      <section className="posttemplate">
      <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel={page.frontmatter.title}
            
          />
          </div>
          <div className="post">
          <h1 className="f4 f3-l mb1 post-title">{frontmatter.title}</h1>
          <div className="post-date pb-3">{frontmatter.date}</div>

  <article className="cf mt3 post-body">
 {/* <div className="fl mr4 pb4">
   <Img className="post-image mw-100" fixed={page.frontmatter.thumbnail.childImageSharp.fixed} /> 

  </div> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      <div className="post-meta">
           <PostTags className="k--button" tags={frontmatter.tags} />
           
            </div>
            </div>
      </section>

    </Layout>
  );
};

export default postTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        title
        tags
        posttype
    }
   }
  }
`;