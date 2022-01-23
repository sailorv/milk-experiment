import { useStaticQuery, graphql } from "gatsby";

export const useComments = () => {
    const data = useStaticQuery(graphql`
      query CommentsQuery {
        allWpPage(filter: {ancestors: {}, title: {eq: "Guestbook"}}) {
          edges {
            node {
              commentCount
              id
              title
              uri
              comments {
                nodes {
                  id
                  author {
                    node {
                      name
                      url
                    }
                  }
                  content
                }
              }
            }
          }
        }
      }
    `)

    return data;
}