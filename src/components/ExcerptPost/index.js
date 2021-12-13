import React from "react"
import { Link } from 'gatsby'

const ExcerptPost = ({ title, excerpt, uri, category }) => {
    return (
        <div className="post-thumb">
            <span className="post-category">{ category }</span>
            <h3><Link to={ `/blog${uri}` }>{ title }</Link></h3>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
    )
}

export default ExcerptPost