import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"



class ICIPubsComponent extends React.Component {
  render() {
    const data = this.props.data.allPubsXlsxSheet1.edges
    return (
      

      
      <Layout>
        <SEO title="ICI Pubs" />
            <section className="mw8 center">
       <div className="w-100 pa2">
       <h1>ICI Pubs</h1>
        <table className="w-100 f6 collapse ba br2 b--black-10 pv2 ph3 mt4">
          <thead>
            <tr className="striped--near-white ">
              <th className="pv2 ph3 tl f6 fw6 ttu bb b--black-20 b">Tite</th>
              <th className="pv2 ph3 tl f6 fw6 ttu bb b--black-20 b">Author(s)</th>
              <th className="pv2 ph3 tl f6 fw6 ttu bb b--black-20 b">Download</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr className="striped--near-white" key={`${row.node.title} ${i}`}>
                <td className="pv2 ph3 bb b--black-20">{row.node.title}</td>
                <td className="pv2 ph3 bb b--black-20">{row.node.authors}</td>
                 <td className="pv2 ph3 bb b--black-20">{row.node.download_url}</td>
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

export default ICIPubsComponent


export const IndexQuery = graphql`
  query {
    allPubsXlsxSheet1{
      edges {
        node {
          title
          abstract
          authors
          download_url
        }
      }
    }
  }
`
