const path = require('path')

// create song pages dynamically
exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions
    const result = await graphql(`
    query getSongs {
        songs:allContentfulSong {
          nodes {
            title
          }
        }
      }      
    `)
    let slugify = require('slugify')
    result.data.songs.nodes.forEach((song) => {
        createPage({
            path:`/songs/${slugify(song.title)}`,
            component: path.resolve(`src/templates/song-template.js`),
            context:{
            slug: song.title,
            },
        })
    })
}