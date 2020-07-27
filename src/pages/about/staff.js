import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'



class StaffComponent extends React.Component {
  render() {
    const { pageContext, location} = this.props;
    const data = this.props.data.allDirectoryXlsxSheet1.edges
    const { breadcrumb: { crumbs }, } = pageContext
 //  const customCrumbLabel = location.pathname
   // .toLowerCase()
 //   .replace("/", " ")
   // .replace("-", " ")
    return (
      

      
      <Layout location={location}>

        <SEO title="Staff" />
            <section className="main-content">
            <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbLabel="Staff"
          />
          </div>
       <div className="w-100 pa2">
       <h1>Staff Directory</h1>
        <table className="w-100 f6 collapse ba br2 b--black-10 pv2 ph3 mt4">
          <thead>
            <tr className="striped--near-white ">
              <th className="pv2 ph3 tl f6 fw6 ttu bb b--black-20 b">Name</th>
              <th className="pv2 ph3 tl f6 fw6 ttu bb b--black-20 b">Phone</th>
              <th className="pv2 ph3 tl f6 fw6 ttu bb b--black-20 b">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr className="striped--near-white" key={`${row.node.id} ${i}`}>
                <td className="pv2 ph3 bb b--black-20">{row.node.name}</td>
                <td className="pv2 ph3 bb b--black-20">{row.node.phone}</td>
                <td className="pv2 ph3 bb b--black-20"><a href={`mailto:${row.node.email}`}>{row.node.email}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>
  </Layout>
    )
  }
}

export default StaffComponent


export const IndexQuery = graphql`
  query {
    allDirectoryXlsxSheet1 {
      edges {
        node {
          id
          name
          phone
          email
        }
      }
    }
  }
`
