import * as React from "react";
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Seo from '../components/seo';

const staffTemplate = ({ data, pageContext,location  }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  console.log(crumbs);

  // Safely extract the staff data
  const staffData = data.airtable?.data || {};



  return (
    <Layout location={location}>
         <Seo
      title={staffData.Name}
    />
        <div className="breadcrumbs">
    <Breadcrumb
           crumbs={crumbs}
           crumbSeparator=" / "
            crumbLabel={staffData.Name}
          />
          </div>
      <div>
        {staffData.staff_photo
        && (
          <div className="staffphoto">
        <GatsbyImage
          image={staffData.staff_photo.localFiles[0].childImageSharp.gatsbyImageData}
          alt={`Photo of ${staffData.Name}`} />
</div>
)
}

<div className="staff_profile">
      <h1>{staffData.Name}</h1>
      <h2 className=" fs-6 black-70 fw-light text-uppercase">{staffData.staff_title}</h2>
        
           <div className="staff_ed" dangerouslySetInnerHTML={{
            __html: staffData.staff_ed?.childMarkdownRemark?.html || 'No content available',
          }}
        />
     <div dangerouslySetInnerHTML={{
            __html: staffData.staff_bio?.childMarkdownRemark?.html || 'No content available',
          }}
        />

      <ul className="clearfix">
      {staffData.staff_email
        && (
        <li><b>Email:</b> <a href={`mailto:${staffData.staff_email}`}>{staffData.staff_email}</a> </li>
        )
      }
        {staffData.staff_phone
        && (
          <li><b>Phone:</b> {staffData.staff_phone}</li>
          )
        }

  {/*  {staffData.staff_link
        && (
          <li><b>Link:</b> <a href={staffData.staff_link}>{staffData.staff_link}</a></li>
          )
        } */}
          </ul>
      </div>
      </div>
    </Layout>
  );
}


export const pageQuery = graphql`
query ($id: String!) {
  airtable(id: { eq: $id }) {
    data {
      Name
      staff_fname
      staff_lname
      staff_title
      staff_bio {
        childMarkdownRemark {
          html
        }
      }
      staff_ed {
        childMarkdownRemark {
          html
        }
      }
      staff_email
      staff_phone
      staff_photo {
        localFiles {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    id
  }
}
`;

export default staffTemplate