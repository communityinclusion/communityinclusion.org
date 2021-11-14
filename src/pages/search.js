import React from "react"
import { Link, graphql } from "gatsby"
import { Index } from "lunr"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SearchForm from "../components/searchForm"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const SearchPage = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title

  // We can read what follows the ?q= here
  // While you could install some external library
  // (or should if you care about IE users),
  // URLSearchParams provides a native way to get URL params
  // location.search.slice(1) gets rid of the "?"
  const params = new URLSearchParams(location.search.slice(1))
  const q = params.get("q") || ""
  // LunrIndex is available via page query
  const { store } = data.LunrIndex
  // lunr in action here
  const index = Index.load(data.LunrIndex.index)

  let results = []
  try {
    // search is a lunr method
    results = index.search(q).map(({ ref }) => {
      // Map search results to an array of {slug, title, excerpt} objects
      return {
        slug: ref,
        ...store[ref],
      }
    })
  } catch (error) {
    console.log(error)
  }
  const { currentPage, numPages,  breadcrumb: { crumbs }}
   = pageContext;
   console.log(crumbs);
 //  const pathPrefix = 'search';
  // const isFirst = currentPage === 1;
 //  const isLast = currentPage === numPages;
 //  const prevPage =
 //    currentPage - 1 === 1
  //    ? `${pathPrefix}/`
  //    : `${pathPrefix}/${(currentPage - 1).toString()}`;
 // const nextPage = `${pathPrefix}/${(currentPage + 1).toString()}`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Search results" />
      <section className="main-content">
      <div className="breadcrumbs">
    <Breadcrumb
           crumbs={crumbs}
           crumbSeparator=" / "
            crumbLabel={currentPage}
          />
          </div>
      {q ? <h1>Search results</h1> : <h1>What are you looking for?</h1>}
      <SearchForm initialQuery={q} />
      <>
            <h2 className="mt-4 mb-4">{results.length} search result{results.length !== 1 ? 's' : ''} for "{q}"</h2>
          </>
      {results.length ? (
         results.map((result, index) => {
          return (
            <article className="card mb-3" key={result.slug}>
              <h3>
                <Link to={result.slug}>{result.title || result.slug}</Link>
              </h3>
              <p>{result.excerpt}</p>
             {/*  {index !== 0 && <hr />} */}
            </article>
          )
        })
      ) : (
        <p>Nothing found.</p>
      )}
      {/*   // Failed attempt at pagination
      
      <div className="page-navigation">
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`${pathPrefix}/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}

        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
        </div> */}
      </section>
    </Layout>
  )
}
export default SearchPage
export const pageQuery = graphql`
  query {
  site {
    siteMetadata {
      title
    }
  }
    LunrIndex
}
`