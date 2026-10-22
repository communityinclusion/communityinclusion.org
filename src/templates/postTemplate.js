import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Seo from "../components/seo"
import PostTags from "../components/PostTags";

const postTemplate = ({ pageContext,data, location }) => {
    console.log("Page Context:", pageContext);
  console.log("Data:", data);

  if (!data) {
    return <p>Loading...</p>; // Handle case where data is undefined
  }
  if (!data.markdownRemark) {
    return <p>No data found</p>; // Handle case where markdownRemark is undefined
  }
  const {
    breadcrumb: { crumbs },
  } = pageContext
   console.log(crumbs);
  // Example of dynamically using location prop as a crumbLabel
// const customCrumbLabel = location.pathname.toLowerCase().replace(/-/g, ' ')
  const page = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
const { markdownRemark } = data;
const { frontmatter, html } = markdownRemark;

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
  );
};





export const Head = ({ data }) => {
  const { frontmatter, excerpt } = data.markdownRemark
  const { siteUrl } = data.site.siteMetadata

  // https://developers.google.com/search/docs/appearance/structured-data/article
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: frontmatter.title,
    description: frontmatter.description || excerpt,
    image: frontmatter.thumbnail?.publicURL
      ? [`${siteUrl}${frontmatter.thumbnail.publicURL}`]
      : undefined,
    datePublished: frontmatter.isoDate || undefined,
    keywords: frontmatter.tags?.join(", ") || undefined,
    author: {
      "@type": "Organization",
      name: "Institute for Community Inclusion, UMass Boston",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Institute for Community Inclusion, UMass Boston",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/ici_banner-lg.png` },
    },
  }

  return (
    <Seo
      title={frontmatter.title}
      description={frontmatter.description || excerpt}
      type="article"
      image={frontmatter.thumbnail?.publicURL}
      publishedTime={frontmatter.isoDate}
      tags={frontmatter.tags}
      schema={schema}
    />
  )
}

export const pageQuery = graphql`
   query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        tags
        posttype
        date(formatString: "MMMM D, YYYY")
        isoDate: date(formatString: "YYYY-MM-DD")
        description
        thumbnail {
          publicURL
        }
      }
    }
  }
`;

export default postTemplate;