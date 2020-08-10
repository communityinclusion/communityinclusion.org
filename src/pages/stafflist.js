import React from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'



const StaffListPage = ({ data, pageContext, }) => {
  const allStaff = data.allAirtable.group;
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <Layout>
     <section className="center mw8">
  <SEO title="Staff List" />
     <div className="breadcrumbs">
      <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=" / " />
            </div>
      <div>
        <h1>Staff List</h1>
        <ul>
          {allStaff.map(Name => (
            <li key={Name.fieldValue}>
              <Link to={`/${kebabCase(Name.fieldValue)}/`}>
                {Name.fieldValue}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </section>
    </Layout>
  );
};

export default StaffListPage;

export const pageQuery = graphql`
query MyQuery {
  allAirtable {
    group(field: data___Name) {
      fieldValue
      nodes {
        fields {
          slug
        }
      }
    }
  }
}
`