import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import SidebarAbout from "../../components/sidebarabout"
import SEO from "../../components/seo"

class StaffComponent extends React.Component {
  render() {
    const data = this.props.data.allDirectoryXlsxSheet1.edges
    return (
      <Layout>
      <section className="mw8 center">
       <SEO title="About the ICI" />
      
   
   <div className="cf ph2-ns">
       <SidebarAbout />
   
       <div className="fl w-75 pa2">
       <h1>Staff Directory</h1>
        <table>
          <thead>
            <tr>
              <th colSpan="3">Directory</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.name} ${i}`}>
                <td>{row.node.name}</td>
                <td>{row.node.phone}</td>
                <td>{row.node.email}</td>
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
