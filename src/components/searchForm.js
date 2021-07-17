import React from 'react'
import { navigate } from 'gatsby';

const searchForm = ({ query }) => {
    return (
        <form role="search" method="GET">
            <input
            type="search"
            placeholder="Search..."
            autoComplete="off"
            id="search-input"
            name="keywords"
            onChange={(e) => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
            value={query}
            />
        </form>
    )
}

export default searchForm
