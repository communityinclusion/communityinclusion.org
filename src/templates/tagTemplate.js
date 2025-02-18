import * as React from "react";
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Seo from '../components/seo';


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <Layout>
        <Seo 
      title={'Tag: '+ tag}
    />
     <div className="breadcrumbs">
      <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=" / " />
            </div>
      <div>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { title, date } = node.frontmatter;
            const { slug } = node.fields;
            return (
              <li key={slug}>
                <Link to={slug}>
                  {title} ({date})
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  );
};



export const pageQuery = graphql`
  query($tag: String) {
  allMarkdownRemark(
    limit: 2000
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          tags
          posttype
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`;

export default Tags;