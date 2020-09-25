import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import SEO from '../components/seo';

const StaffProfile = ({ data, pageContext,location  }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
 // const page = data.airtable
  return (
    <Layout location={location}>
         <SEO
      title={data.airtable.data.Name}
    />
        <section className="main-content">
        <div className="breadcrumbs">
    <Breadcrumb
           crumbs={crumbs}
           crumbSeparator=" / "
            crumbLabel={data.airtable.data.Name}
          />
          </div>
      <div>
      <h1 className="f5 f4-ns fw6 black-70">{data.airtable.data.Name}</h1>
      <h2 className="f6 black-70 fw2 ttu tracked">{data.airtable.data.staff_title}</h2>
      
      <p> {data.airtable.data.staff_ed}</p>
      <p>{data.airtable.data.staff_bio}</p>

      <ul>
        <li>Email: <a href={`mailto:${data.airtable.data.staff_email}`}>{data.airtable.data.staff_email}</a> </li>
          <li>Phone: {data.airtable.data.staff_phone}</li>
          <li>Link: <a href={data.airtable.data.staff_link}>{data.airtable.data.staff_link}</a></li>
      </ul>
      </div>
      </section>
    </Layout>
  )
}
export default StaffProfile

export const pageQuery = graphql`
 query($slug: String!) {
  airtable (fields: { slug: { eq: $slug } }) {
    data {
      Name
      staff_title
      staff_bio
      staff_ed
      staff_email
      staff_link
      staff_phone
      staff_pubs
    }
    id
    fields {
      slug
    }
  }
  }
`;