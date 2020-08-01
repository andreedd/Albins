import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/css/songs.module.css"

const ComponentName = ({ data }) => {
    const {allContentfulSong:{nodes:songs}} = data
    let slugify = require('slugify')

    return <Layout>
    <section className={styles.container}>
      <h1>{data.contentfulSong.category}</h1>
      <div className={styles.containerWrapper}>
      {songs.map((song)=> {
        return <article key={song.id}>
          <Link to={`/songs/${slugify(song.title)}`}>
            <div className={styles.link}>
              <h2 style={{fontWeight: 500}}>{song.title}</h2>
              <h5 style={{fontWeight: 100}}><i>{song.melody}</i></h5>
            </div>
          </Link>
        </article>
      })}
      </div>
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
    contentfulSong(category: {eq: $slug}) {
      category 
    }
  }
  
`

export default ComponentName
