// const path = require('path');

// exports.createPages = ({graphql, boundActionCreators}) => {
//   const {createPage} = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     const cardTemplate = path.resolve('src/templates/card.js')
//     resolve(
//         graphql(`
//             {
//                 allContentfulCard (limit:1000) {
//                   edges {
//                     node {
//                       id
//                       slug
//                     }
//                   }
//                 }
//             }
//         `).then((result) => {
//             if (result.errors) {
//                 reject(result.errors)
//             }
//             result.data.allContentfulCard.edges.forEach((edge) => {
//                 createPage ({
//                     path: edge.node.slug,
//                     component: cardTemplate,
//                     context: {
//                       slug: edge.node.slug
//                   }
//                 })
//             })
//             return
//         })
//     )
//   })
// }
const webpack = require('webpack');
exports.modifyWebpackConfig = ({ config, stage }) => {
  config.plugin("webpack-define", webpack.DefinePlugin, [{ "global.GENTLY": false }])

  return config;
};

