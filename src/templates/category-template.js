import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/categories.module.css"

const ComponentName = ({ data }) => {
    const {allContentfulSong:{nodes:songs}} = data
    let slugify = require('slugify')

    return <Layout>
    <section className={styles.page}>
      <h1>Hello from category template</h1>
      {songs.map((song)=> {
        return <article key={song.id}>
          <Link to={`/songs/${slugify(song.title)}`}>
            <div className={styles.link}>
              <h2>{song.title}</h2>
              <h3><i>{song.melody}</i></h3>
            </div>
          </Link>
        </article>
      })}
    </section>
  </Layout>
}

export const query = graphql`
query getSingleCategorySongs($slug: String) {
    allContentfulSong(filter: {category: {eq: $slug}}) {
        nodes {
          title
          category
          melody
          id
          author
        }
      }
  }
  
`

export default ComponentName
