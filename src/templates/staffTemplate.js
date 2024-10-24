import * as React from "react";
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Seo from '../components/seo';

const StaffProfile = ({ data, pageContext,location  }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  console.log(crumbs);
//  const page = data.airtable
  return (
    <Layout location={location}>
         <Seo
      title={data.airtable.data.Name}
    />
        <div className="breadcrumbs">
    <Breadcrumb
           crumbs={crumbs}
           crumbSeparator=" / "
            crumbLabel={data.airtable.data.Name}
          />
          </div>
      <div>
        {data.airtable.data.staff_photo
        && (
          <div className="staffphoto">
        <GatsbyImage
          image={data.airtable.data.staff_photo.localFiles[0].childImageSharp.gatsbyImageData}
          alt="" />
</div>
)
}
      <h1>{data.airtable.data.Name}</h1>
      <h2 className=" fs-6 black-70 fw-light text-uppercase">{data.airtable.data.staff_title}</h2>
        
      <p> {data.airtable.data.staff_ed}</p>
      <p>{data.airtable.data.staff_bio}</p>

      <ul className="clearfix">
      {data.airtable.data.staff_email
        && (
        <li><b>Email:</b> <a href={`mailto:${data.airtable.data.staff_email}`}>{data.airtable.data.staff_email}</a> </li>
        )
      }
        {data.airtable.data.staff_phone
        && (
          <li><b>Phone:</b> {data.airtable.data.staff_phone}</li>
          )
        }

{data.airtable.data.staff_link
        && (
          <li><b>Link:</b> <a href={data.airtable.data.staff_link}>{data.airtable.data.staff_link}</a></li>
          )
        }
          </ul>
      </div>
    </Layout>
  );
}
export default StaffProfile

export const pageQuery = graphql`query ($slug: String!) {
  airtable(fields: {slug: {eq: $slug}}) {
    data {
      Name
      staff_title
      staff_bio
      staff_ed
      staff_email
      staff_link
      staff_phone
      staff_pubs
      staff_photo {
        localFiles {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    id
    fields {
      slug
    }
  }
}
`;
