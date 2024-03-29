import * as React from "react";
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'


const JobsPage = ({ data, pageContext,location,title }) => {
  const posts = data.allMarkdownRemark.edges;
  console.log('posts', posts)
  const { breadcrumb: { crumbs }}
   = pageContext;
   console.log(crumbs);
const customCrumbLabel = location.pathname.toLowerCase()
.replace("jobs", "Jobs")
const crumbLabelArr = customCrumbLabel.split('/');
const label = crumbLabelArr[crumbLabelArr.length - 1]
const labelArr = label.split('-');

 
 if (posts.length === 0) {
  return (
    <Layout>
    <section className="main-content">
    <div className="breadcrumbs">
    <Breadcrumb
          title={title}
          crumbs={crumbs}
          crumbLabel={labelArr.join(' ')}      
         />
       </div>
     <h1 className="page-title">Job Openings at ICI</h1>
      <p className="lead">ICI's job opportunities are listed on <Link className="blue dim" to="https://employmentopportunities.umb.edu/boston/en-us/search/?job-mail-subscribe-privacy=agree&search-keyword=ici">our parent organization's (University of Massachusetts Boston) Careers Page</Link>. Or, <Link className="blue dim" to="https://lp.constantcontactpages.com/su/jlCEExQ/subscribe">subscribe to our newsletter</Link> where we also publicize job openings.</p>
      </section>
    </Layout>
  )
}

  return (
    <Layout>
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
              <h2><Link className="blue dim" to={post.node.fields.slug}>
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
      </section>
    </Layout>
  );
};

export default JobsPage;




// Get all markdown files, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`query ($currentDate: Date!, $limit: Int, $skip: Int) {
  allMarkdownRemark(
    limit: $limit
    sort: {frontmatter: {date: ASC}}
    skip: $skip
    filter: {frontmatter: {posttype: {eq: "jobs"}, close_date: {gte: $currentDate}}}
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