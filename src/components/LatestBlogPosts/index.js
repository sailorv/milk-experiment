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
                    title={ post.wpgraphql.posts.edges[`${i + 2}`].node.title }
                    excerpt={ post.wpgraphql.posts.edges[`${i + 2}`].node.excerpt }
                    uri={ post.wpgraphql.posts.edges[`${i + 2}`].node.uri }
                    category={ post.wpgraphql.posts.edges[`${i + 2}`].node.categories.edges[0].node.name }
                />
            ))}   
         </div>
     </div>
 )
}

export default LatestBlogPosts;