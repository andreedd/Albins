import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ComponentName = ({ data }) => {
    return <Layout>
        <div>
            <Link to="/songs"></Link>
            <h1>single song</h1>
            <h2>{data.song.title}</h2>
            <h3><i>Mel: {data.song.melody}</i></h3>
            {documentToReactComponents(data.song.content.json)}
            <h3>text: {data.song.author}</h3>
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
