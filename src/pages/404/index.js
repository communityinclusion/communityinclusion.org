import * as React from "react"
import { Link } from 'gatsby';
import Layout from "../../components/layout"
import Seo from "../../components/seo"

function NotFoundPage () {
  return (
  <Layout>
      <section className="main-content">
    <h1>404 - Page Not Found</h1>
    <p>Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.</p>
    </section>
  </Layout>
)
  }

export const Head = () => <Seo title="404 - Page Not Found" />

export default NotFoundPage
