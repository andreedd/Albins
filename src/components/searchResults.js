import React from 'react'
import {Link} from "gatsby"
import styles from "./css/search.module.css"

const SearchResults = ({ query, results}) => {
    let slugify = require('slugify')
    return (
        <section className={styles.container} aria-label="Search results for all songs">
        {!!results.length && query && 
        <h2
            className={styles.searchResultsCount}
            id="search-results-count"
            aria-live="assertive"
            >Found {results.length} songs on "{query}"</h2>
        }
        {!!results.length &&
            <ol className={styles.searchResultsList}>
                {results.map(({
                title,
                url,
                category,
                melody
                }
            ) => (
                <li key={title}>
                    
                    <Link to={`/songs/${slugify(url)}`} className={styles.SearchResultsListLink}>
                        <div className={styles.link}>
                            <h3 className={styles.searchResultsListHeading}>
                                {title}
                            </h3>
                            <h5 style={{fontWeight: 100}}>
                                Mel: {melody}<br/>Category: {category}
                            </h5>
                        </div>
                    </Link>

                </li>
                ))}
            </ol>
            }
      </section>
    )
}

export default SearchResults
