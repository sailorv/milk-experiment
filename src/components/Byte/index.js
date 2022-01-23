import React from "react"
import { Link } from "gatsby"

const Byte = ({ title, author, image, excerpt, purchaseLink, pub, related }) => {
    let renderImage
    if (image != null) {
        renderImage = <div className="byte-image post-image animate-scanline" style={{ float: `left`, width: `200px`}}><img src={ image } alt={ title } /><div className="fade"><div className="green"></div></div></div>
    } else {
        renderImage = ''
    }

    let relatedLink
    if (related != null) {
        let uri = `/blog${ related.uri }`
        relatedLink = <div className="related-link"><h4 style={{marginBottom: `0`}}>Related Article:</h4> <Link to={ uri }> &gt; { related.title }</Link></div>
    } else {
        relatedLink = null
    }

    let purchaseBookLink
    if (purchaseLink != null) {
        purchaseBookLink = <a href={ purchaseLink } target="_blank" className="button purchase">Purchase this book</a>
    } else {
        purchaseBookLink = null
    }

    return (
        <div className="post-byte">
            { renderImage }
            <h3 style={{marginBottom: 0}}>{ title }</h3>
            <div className="post-byte-content" style={{ position: `relative`}}>
                <div>by { author }, pub. { pub }</div>
                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                { relatedLink }
                { purchaseBookLink }
            </div>
        </div>
    )
}

export default Byte