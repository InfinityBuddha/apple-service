import React from 'react'
import Link from 'gatsby-link'
import Catalog from '../Components/Catalog/Catalog'


export default ({data}) => {
  return (
    <Catalog data={data.allContentfulCard.edges} />
  )
}

export const pageQuery = graphql`
    query pageQuery {
        allContentfulCard {
            edges {
                node {
                  id
                  title
                  price
                  photo {
                    file {
                      url
                      fileName
                      contentType
                    }
                  }
                  }
                }
            }
        }
`