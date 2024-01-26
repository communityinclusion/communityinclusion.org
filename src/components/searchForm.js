import React from "react"
import { navigate } from "gatsby"

const SearchForm = ({ query }) => (
   <div className="mb-3">
  <form role="search" method="GET">
    <label htmlFor="search-input" className="visually-hidden">
      <h1>Search</h1>
    </label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={e =>
        navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
      }
      value={query}
    />
    <button type="submit">Submit</button>
  </form>
  </div>
)

export default SearchForm
