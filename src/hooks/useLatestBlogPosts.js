import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPosts = () => {
    const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {

      allWpPost(sort: {fields: date, order: DESC}, filter: {categories: {nodes: {elemMatch: {slug: {nin: "sci-fi-adjacent"}}}}}) {
        edges {
          node {
            title
            uri
            excerpt
            featuredImage {
              node {
                altText
                localFile {
                  publicURL
                  childImageSharp {
                    gatsbyImageData(formats: WEBP)
                  }
                }
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }

    }
    `)

    return data;
}