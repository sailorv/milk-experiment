import React from "react"

import { useLatestBlogPosts } from "../../hooks/useLatestBlogPosts"
import ExcerptPost from "../ExcerptPost"

const LatestBlogPosts = () => {
  const post = useLatestBlogPosts()

  return (
    <div className="posts-wrapper">
      <div className="excerpt-posts">
        {new Array(3).fill("").map((element, i) => (
          <ExcerptPost
            key={i}
            title={post.allWpPost.edges[`${i + 2}`].node.title}
            excerpt={post.allWpPost.edges[`${i + 2}`].node.excerpt}
            uri={post.allWpPost.edges[`${i + 2}`].node.uri}
            category={
              post.allWpPost.edges[`${i + 2}`].node.categories.nodes[0].name
            }
          />
        ))}
      </div>
    </div>
  )
}

export default LatestBlogPosts
