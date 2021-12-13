import React from "react"
import { Link } from 'gatsby'

const PostThumb = ({ title, excerpt, uri, category }) => {
    return (
        <div className="post-thumb">
            <div class="post-image">
                <img src="https://cdn.vox-cdn.com/thumbor/ZnMbbqrtw52Z59HCfnA1lKJQf3g=/0x0:1400x940/920x613/filters:focal(666x193:890x417):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54741663/2f92a390250d11e5a8c61f50de9a02d4_content_large.0.jpg" alt={ title } />
                <div class="fade"></div>
                <div class="green"></div>
            </div>
            <span className="post-category">{ category }</span>
            <h3><Link to={ `/blog${uri}` }>{ title }</Link></h3>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
    )
}

export default PostThumb