import React from "react"

import { useLatestBlogPosts } from "../../hooks/useLatestBlogPosts"
import PostThumb from "../PostThumb"

const LatestBlogPosts = () => {
 const post = useLatestBlogPosts()

 return (
     <div className="posts-wrapper">
         {new Array(6).fill("").map((element, i) => (
             <PostThumb 
                key={i}
                title={ post.wpgraphql.posts.edges[`${i}`].node.title }
                excerpt={ post.wpgraphql.posts.edges[`${i}`].node.excerpt }
                uri={ post.wpgraphql.posts.edges[`${i}`].node.uri }
                category={ post.wpgraphql.posts.edges[`${i}`].node.categories.edges[0].node.name }
            />
         ))}   
     </div>
 )
}

export default LatestBlogPosts;