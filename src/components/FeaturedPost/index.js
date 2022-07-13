import React from "react"

import { useLatestBlogPosts } from "../../hooks/useLatestBlogPosts"
import PostThumb from "../PostThumb"

const FeaturedPost = () => {
  const post = useLatestBlogPosts()

  return (
    <div className="posts-wrapper">
      <div className="thumbnail-posts">
        {new Array(2).fill("").map((element, i) => (
          <PostThumb
            key={i}
            title={post.allWpPost.edges[`${i}`].node.title}
            excerpt={post.allWpPost.edges[`${i}`].node.excerpt}
            uri={post.allWpPost.edges[`${i}`].node.uri}
            category={
              post.allWpPost.edges[`${i}`].node.categories.nodes[0].name
            }
            image={
              post.allWpPost.edges[`${i}`].node.featuredImage.node.localFile
                .publicURL
            }
            altText={
              post.allWpPost.edges[`${i}`].node.featuredImage.node.altText
            }
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedPost
