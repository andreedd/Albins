import React from 'react'
import {Link} from "gatsby"

const SearchResults = ({ query, results}) => {
    let slugify = require('slugify')
    return (
        <section aria-label="Search results for all songs">
        {!!results.length && query && 
        <h2
            className="search-results-count"
            id="search-results-count"
            aria-live="assertive"
            >Found {results.length} posts on "{query}"</h2>
        }
        {!!results.length &&
            <ol className="search-results-list">
                {results.map(({
                title,
                url,
                category,
                }
            ) => (
                <li key={title}>
                    <h3 className="search-results-list__heading">
                    <Link to={`/songs/${slugify(url)}`} className="search-results-list__link">
                        {title}
                    </Link>
                    </h3>
                    <h5>{category}</h5>
                </li>
                ))}
            </ol>
            }
      </section>
    )
}

export default SearchResults
