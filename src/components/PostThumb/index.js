import React from "react"
import { Link } from 'gatsby'

const PostThumb = ({ title, excerpt, uri, category }) => {
    return (
        <div className="post-thumb">
            <span className="post-category">{ category }</span>
            <h2><Link to={ `/blog${uri}` }>{ title }</Link></h2>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
    )
}

export default PostThumb