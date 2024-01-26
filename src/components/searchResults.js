import React from "react"
import { Link } from "gatsby"
import Highlighter from "react-highlight-words"


const SearchResults = ({ query, results }) => (

  <section aria-label="Search results for all posts">
    {!!results.length && query && (
      <h2
        className="search-results-count"
        id="search-results-count"
        aria-live="assertive"
      >
        Found {results.length} posts on "{query}"
      </h2>
    )}
    {!!results.length && (
      <div className="search-results-list">
        {results.map(({ title, url, date, description }) => (
          <article className="card mb-3" key={title}>
            <h3 className="search-results-list__heading">
              <Link to={url} className="search-results-list__link">
                <Highlighter
                  searchWords={[query]}
                  autoEscape={true}
                  textToHighlight={title}
                />
              </Link>
            </h3>
            <small>{new Date(date).toLocaleString("en-GB")}</small>
            {description && (
              <p>
                <Highlighter
                  searchWords={[query]}
                  autoEscape={true}
                  textToHighlight={description}
                />
              </p>
            )}
          </article>
        ))}
</div>
    )}
  </section>
)

export default SearchResults
