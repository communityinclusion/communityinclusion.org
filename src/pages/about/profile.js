import React from "react"
import {  Link, graphql } from "gatsby"
import Layout from "../../components/layout"

export default ({data}) => {

    const allAirtable = data.allAirtable.nodes;
    return (
        <Layout>
   
        <section className="main-content">
        <div>
            {
                allAirtable.map((node) => (
                    <ul>
                       
                       <li> <Link to={`/${node.fields.slug}`}>{node.data.Name}</Link></li>
                    </ul>
                ))
            }
        </div>
        </section>
        </Layout>
    )
}

export const query = graphql`
    query {
        allAirtable {
            nodes {
           recordId
           fields {
             slug
                 }
            data {
              Name
            staff_title
                }
             }
        }
    }
`
