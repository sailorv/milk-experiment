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
                    title={ post.wpgraphql.posts.edges[`${i}`].node.title }
                    excerpt={ post.wpgraphql.posts.edges[`${i}`].node.excerpt }
                    uri={ post.wpgraphql.posts.edges[`${i}`].node.uri }
                    category={ post.wpgraphql.posts.edges[`${i}`].node.categories.edges[0].node.name }
                    image={ post.wpgraphql.posts.edges[`${i}`].node.featuredImage.node.sourceUrl }
                />
            ))}   
         </div>
     </div>
 )
}

export default FeaturedPost;