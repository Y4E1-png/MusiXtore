import React from "react";
import { SearchForm, SearchInput, SearchButton, SearchField } from "./styles";

const SearchBar = ({ query, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery(query.trim());
  };


  return (
    <SearchForm role="search" onSubmit={handleSubmit}>
      <SearchField>
        <SearchInput
          type="search"
          aria-label="Search the catalog"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search songs, artists, or albums"
        />

        <SearchButton type="submit" aria-label="Search" title="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M16 16L21 21" />
          </svg>
        </SearchButton>
      </SearchField>
    </SearchForm>
  );
};

export default SearchBar;
