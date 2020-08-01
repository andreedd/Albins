import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "../components/css/songs.module.css"

const ComponentName = ({ data }) => {
    return <Layout>
        <div className={styles.container}>
          <div className={styles.songWrapper}>
              <h2>{data.song.title}</h2>
              <h3><i>Mel: {data.song.melody}</i></h3>
              <div className={styles.songtext}>
              {documentToReactComponents(data.song.content.json)}
              </div>
              {data.song.author != null &&
                <h3>text: {data.song.author}</h3>
              }
          </div>
        </div>
    </Layout>
}

export const query = graphql`
query GetSingleSong($slug:String)
  {
    song: contentfulSong(title: {eq: $slug}) {
      author
      title
      melody
      category
      content {
        json
      }
    }
  }
`

export default ComponentName
