import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import SidebarAbout from "../../components/sidebarabout"
import SEO from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"


class StaffComponent extends React.Component {
  render() {
    const data = this.props.data.allDirectoryXlsxSheet1.edges
    return (
      <Layout>
          <Breadcrumb crumbs={ [ 'Home', 'About', 'Staff' ] } />
      <section className="mw8 center">
       <SEO title="About the ICI" />
      
   
   <div className="cf ph2-ns">
       <SidebarAbout />
   
       <div className="fl w-75 pa2">
       <h1>Staff Directory</h1>
        <table className="collapse ba br2 b--black-10 pv2 ph3 mt4">
          <thead>
            <tr className="striped--near-white ">
              <th className="pv2 ph3 tl f6 fw6 ttu">Name</th>
              <th className="pv2 ph3 tl f6 fw6 ttu">Phone</th>
              <th className="pv2 ph3 tl f6 fw6 ttu">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr className="striped--near-white" key={`${row.node.name} ${i}`}>
                <td className="pv2 ph3">{row.node.name}</td>
                <td className="pv2 ph3">{row.node.phone}</td>
                <td className="pv2 ph3">{row.node.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
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
          name
          phone
          email
        }
      }
    }
  }
`
