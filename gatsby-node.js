const path = require('path')

// create song pages dynamically
exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions
    const result = await graphql(`
    query getSongs {
        songs:allContentfulSong {
          distinct(field: category)
          nodes {
            title
          }
        }
      }      
    `)
    let slugify = require('slugify')
    /*Create song page for songs */
    result.data.songs.nodes.forEach((song) => {
        createPage({
            path:`/songs/${slugify(song.title)}`,
            component: path.resolve(`src/templates/song-template.js`),
            context:{
            slug: song.title,
            },
        })
    })
    /*Create song page for categories */
    result.data.songs.distinct.forEach((category) => {
      createPage({
          path:`/categories/${slugify(category)}`,
          component: path.resolve(`src/templates/category-template.js`),
          context:{
          slug: category
          },
      })
  })
}