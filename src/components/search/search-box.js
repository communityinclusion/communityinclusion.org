import React from "react"
import { useSearchBox } from "react-instantsearch"
import { Search as SearchIcon } from "@styled-icons/fa-solid"

const SearchBox = ({ className, onFocus, onChange }) => {
  const { query, refine } = useSearchBox()

  return (
    <form className={className}>
       {/* <label className="search-formLabel text-uppercase form-label" htmlFor="searchInput">Search</label> */}
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => {
          refine(e.target.value)
          onChange(e.target.value)
        }}
        value={query}
        onFocus={onFocus}
      />
      
      <SearchIcon className="SearchIcon" />
    </form>
  )
}

export default SearchBox