
import React from "react";
import { graphql} from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
// import Img from 'gatsby-image';
import PostTags from "../components/PostTags";


const jobsTemplate = ({ pageContext, data, location  }) => {
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
      <section className="jobstemplate">
      <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel={page.frontmatter.title}
            
          />
          </div>
          <div className="post">
          <h1 className="f4 f3-l mb1 post-title">{frontmatter.title}</h1>
        

  <article className="cf mt3 post-body">
 {/* <div className="fl mr4 pb4">
   <Img className="post-image mw-100" fixed={page.frontmatter.thumbnail.childImageSharp.fixed} /> 
  </div> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p><b>Closing Date:</b> <span className="post-date">{frontmatter.close_date}</span></p>
        
        <p><a class="btn btn-primary" role="button" href={frontmatter.umb_post_url}>Learn more and apply</a></p>
        </article>
        
      <div className="post-meta">
           <PostTags className="k--button" tags={frontmatter.tags} />
           
            </div>
            </div>
      </section>

    </Layout>
  );
};

export default jobsTemplate;

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
        umb_post_url
        close_date(formatString: "MMMM Do, YYYY")
    }
   }
  }
`;