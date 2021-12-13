import React from "react"

import { useSciFiAdjacentPosts } from "../../hooks/useSciFiAdjacentPosts"
import ExcerptPost from "../ExcerptPost"


const SciFiAdjacentPosts = () => {
 const post = useSciFiAdjacentPosts()

 return (
     <div className="posts-wrapper cut-corner">
         <h2>Not Quite Sci-Fi</h2>
         <div className="excerpt-posts">
         {new Array(2).fill("").map((element, i) => (
                <ExcerptPost 
                    key={i}
                    title={ post.wpgraphql.posts.edges[`${i}`].node.title }
                    excerpt={ post.wpgraphql.posts.edges[`${i}`].node.excerpt }
                    uri={ post.wpgraphql.posts.edges[`${i}`].node.uri }
                    category={ post.wpgraphql.posts.edges[`${i}`].node.categories.edges[0].node.name }
                />
            ))}   
         </div>
     </div>
 )
}

export default SciFiAdjacentPosts;