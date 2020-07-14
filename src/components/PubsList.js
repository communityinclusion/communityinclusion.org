import React from "react"
import { graphql} from 'gatsby'


 
class PubsList extends React.Component {
  render() {
    const data = this.props.data.allPubsXlsxSheet1.edges
    return (
      
   
      
          <div >
            {data.map((row) => (
              <ul className="bb list">
                <li className="pv2 ph3"><a href={`${row.node.download_url}`}>{row.node.title}</a></li>
                <li className="pv2 ph3">Author(s): {row.node.authors}</li>
                </ul>
            ))}

</div>
        

    )
  }
}


export default PubsList


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
