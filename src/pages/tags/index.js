import * as React from "react"
import { Link, graphql} from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'



const TagsPage = ({ data, pageContext, }) => {
  const allTags = data.allMarkdownRemark.group;
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <Layout>
     <section className="main-content">
  <Seo title="Tags" />
     <div className="breadcrumbs">
      <Breadcrumb
                crumbs={crumbs}
                crumbSeparator=" / "
                crumbLabel="Tags"  
                 />
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

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
       group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`