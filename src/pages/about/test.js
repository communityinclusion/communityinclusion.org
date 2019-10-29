import React from 'react'
import Layout from "../../components/layout"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

export const Test = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  // Example of dynamically using location prop as a crumbLabel
  const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ')

  return (
    <div>
      <Layout>
        <main>
          <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" - "
            crumbLabel={customCrumbLabel}
          />
          <p>This is a sentance</p>
        </main>
      </Layout>
    </div>
  )
}