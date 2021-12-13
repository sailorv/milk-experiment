import React from "react"
import { Link } from 'gatsby'

const PostThumb = ({ title, excerpt, uri, category, image }) => {
    return (
        <div className="post-thumb">
            <div className="post-image animate-scanline">
                <img src={ image } alt={ title } className="animate-twitch" />
                <div className="fade"></div>
                <div className="green"></div>
            </div>
            <span className="post-category">{ category }</span>
            <h3><Link to={ `/blog${uri}` }>{ title }</Link></h3>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
    )
}

export default PostThumb