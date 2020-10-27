import React from 'react';
//import { kebabCase } from 'lodash';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'


const NewsPage = ({ data, pageContext,location,title }) => {
  const posts = data.allMarkdownRemark.edges;
  console.log('posts', posts)
  const { currentPage, numPages,  breadcrumb: { crumbs }}
   = pageContext;
   console.log(crumbs);
  const pathPrefix = '/news';
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? `${pathPrefix}/`
      : `${pathPrefix}/${(currentPage - 1).toString()}`;
  const nextPage = `${pathPrefix}/${(currentPage + 1).toString()}`;
const customCrumbLabel = location.pathname.toLowerCase()

const crumbLabelArr = customCrumbLabel.split('/');
 

 const label = crumbLabelArr[crumbLabelArr.length - 1]
 const labelArr = label.split('-');
  return (
    <Layout>

       <SEO title="New at ICI" />
       <section className="main-content">
       <div className="breadcrumbs">
       <Breadcrumb
             title={title}
             crumbs={crumbs}
             crumbLabel={labelArr.join(' ')}  
                    
            />
          </div>
        <h1 className="page-title">New at ICI</h1>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.node.id} className="post-list__item bb b--black-10">
            <div className="post-list__thumbnail">
              <Link to={post.node.fields.slug}>
                <Img
                  fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed}
                />
              </Link>
            </div>
            <div className="post-list__content">
              <h2><Link className="no-underline underline-hover blue dim" to={post.node.fields.slug}>
                {post.node.frontmatter.title}
                </Link>
                </h2>
              <p>{post.node.frontmatter.date}</p>
              <div className="post-list__excerpt">
                <p>{post.node.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="page-navigation">
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`${pathPrefix}/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}

        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </div>
      </section>
    </Layout>
  );
};

export default NewsPage;

// Get all markdown files, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
query GetNewsPosts($limit: Int, $skip: Int) {
  allMarkdownRemark(limit: $limit, sort: {fields: [frontmatter___date], order: DESC}, skip: $skip, filter: {frontmatter: {posttype: {eq: "news"}}}) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "dddd, MMMM DD YYYY")
          tags
          posttype
          thumbnail {
            childImageSharp {
              fixed(width: 200, height: 200) {
                src
                srcSet
                width
                height
              }
            }
          }
        }
        id
        excerpt(pruneLength: 250)
        fields {
          slug
        }
      }
    }
     totalCount
  }
}
`;