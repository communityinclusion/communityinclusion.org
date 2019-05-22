import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

class StaffComponent extends React.Component {
  render() {
    const data = this.props.data.allDirectoryXlsxSheet1.edges
    return (
	     <Layout>
  <section className="center mw8">
    <SEO title="staff" />
    <h1>Staff</h1>
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
