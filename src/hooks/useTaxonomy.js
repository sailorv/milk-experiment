import { useStaticQuery, graphql } from "gatsby"

export const useTaxonomy = () => {
  const data = useStaticQuery(graphql`
    query TaxonomyQuery {
      wpgraphql {
        categories {
          edges {
            node {
              name
              uri
            }
          }
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  `)

  return data
}
