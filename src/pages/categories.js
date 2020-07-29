import React from "react"
import Layout from "../components/Layout"
import styles from "../components/categories.module.css"
import {Link,graphql} from "gatsby"

const ComponentName = ({ data }) => {
  const {allContentfulSong:{nodes:songs}} = data
  let slugify = require('slugify')

/*Get unique categories*/
function getUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}

const uniqueCategories = getUniqueListBy(songs, 'category')

  return <Layout>
    <section className={styles.page}>
      <h1>Hello from categoriess</h1>
      {uniqueCategories.map((song)=> {
        return <article key={song.id}>
          <Link to={`/categories/${slugify(song.category)}`}>
            <div className={styles.link}>
              <h2>{song.category}</h2>
            </div>
          </Link>
        </article>
      })}
    </section>
  </Layout>
}

export const query = graphql`
{
  allContentfulSong {
    nodes {
      id
      category
    }
  }
}
`

export default ComponentName
