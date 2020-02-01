import React from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'



const TagsPage = ({ data, pageContext, }) => {
  const allTags = data.allMarkdownRemark.group;
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <Layout>
     <section className="center mw8">
  <SEO title="Tags" />
     <div className="breadcrumbs">
      <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=" / " />
            </div>
      <div>
        <h1>Tags</h1>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </section>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
