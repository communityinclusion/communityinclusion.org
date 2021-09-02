import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 - Page Not found" />
      <section className="main-content">
    <h1>404 - Page Not Found</h1>
    <p>Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.</p>
    </section>
  </Layout>
)

export default NotFoundPage
