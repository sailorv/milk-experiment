import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../components/SEO"
import Layout from "../components/Layout"

const BlogPostTemplate = ({ data }) => {
  const image = getImage(data.post.featuredImage.node.localFile)
  const imageURL = data.post.featuredImage.node.localFile.publicURL

  let categoryURI = data.post.categories.nodes[0].uri
  let category = data.post.categories.nodes[0].name
  let categorydesc

  if (categoryURI === "/category/sci-fi-adjacent/") {
    categorydesc = ": " + data.post.categories.nodes[0].description
  } else {
    categorydesc = " "
  }

  return (
    <Layout>
      <Seo title={data.post.title} />
      <section
        id="post-meta"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div id="post-image" className="col-2">
          <div className="post-image animate-scanline">
            <img src={imageURL} alt={data.post.featuredImage.node.altText} />
            <div class="fade"></div>
            <div class="green"></div>
          </div>
        </div>
        <div id="post-title" className="col-2">
          <div className="post-category">
            {category} {categorydesc}
          </div>
          <h1>{data.post.title}</h1>
          <div
            className="mobile-hide"
            dangerouslySetInnerHTML={{ __html: data.post.excerpt }}
          />
        </div>
      </section>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: data.post.content }}
      />
    </Layout>
  )
}

export default BlogPostTemplate

export const postQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      excerpt
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(formats: JPG, layout: FULL_WIDTH)
              fluid(maxWidth: 800) {
                src
                srcSet
              }
            }
          }
        }
      }
      categories {
        nodes {
          name
          description
          uri
        }
      }
    }
  }
`
