import React from 'react'
import Helmet from 'react-helmet'
import Catalog from '../Components/Catalog/Catalog'
import Link from 'gatsby-link'

export default function Template({data}) {
  const {markdownRemark: card} = data;
  return (
    <div>
      <h2 dangerouslySetInnerHTML={{__html: card.html}} />
      <Catalog />
      {data.allMarkdownRemark.edges.map(card => (
        <Link
          key={card.node.id}
          to={card.node.frontmatter.path}>
          {card.node.frontmatter.title}
        </Link>
      ))}
    </div>
  )
}

export const cardQuery = graphql`
  query CardByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    },
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

