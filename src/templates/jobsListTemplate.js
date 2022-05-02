import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'


const JobsPage = ({ data, pageContext,location,title }) => {
  const posts = data.allMarkdownRemark.edges;
  console.log('posts', posts)
  const { currentPage, numPages,  breadcrumb: { crumbs }}
   = pageContext;
   console.log(crumbs);
  const pathPrefix = '/jobs';
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? `${pathPrefix}/`
      : `${pathPrefix}/${(currentPage - 1).toString()}`;
  const nextPage = `${pathPrefix}/${(currentPage + 1).toString()}`;
const customCrumbLabel = location.pathname.toLowerCase()
.replace("jobs", "Jobs")
const crumbLabelArr = customCrumbLabel.split('/');
 

 const label = crumbLabelArr[crumbLabelArr.length - 1]
 const labelArr = label.split('-');
  return (
    <Layout>
       <Seo title="Job Openings at ICI" />
       <section className="main-content">
       <div className="breadcrumbs">
       <Breadcrumb
             title={title}
             crumbs={crumbs}
             crumbLabel={labelArr.join(' ')}      
            />
          </div>
        <h1 className="page-title">Job Openings at ICI</h1>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.node.id} className="post-list__item border-bottom border-1 border-dark">
            <div className="post-list__content">
              <h2><Link className="no-underline underline-hover blue dim" to={post.node.fields.slug}>
                {post.node.frontmatter.title}
                </Link>
                </h2>
              <div className="post-list__excerpt">
                <p>{post.node.frontmatter.description}</p>
                <p className="post-list__date navy">Closes: {post.node.frontmatter.close_date}</p>
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

export default JobsPage;

// Get all markdown files, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`query GetJobsPosts($limit: Int, $skip: Int) {
  allMarkdownRemark(
    limit: $limit
    sort: {fields: [frontmatter___date], order: ASC}
    skip: $skip
    filter: {frontmatter: {posttype: {eq: "jobs"}}}
  ) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          close_date(formatString: "MMMM Do, YYYY")
          tags
          posttype
          description
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