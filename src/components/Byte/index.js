import React from "react"

const Byte = ({ title, author, image, excerpt }) => {
    let renderImage
    if (image != null) {
        renderImage = <div className="byte-image post-image animate-scanline" style={{ float: `left`, width: `200px`}}><img src={ image } alt={ title } /><div className="fade"><div className="green"></div></div></div>
    } else {
        renderImage = ''
    }


    return (
        <div className="post-byte">
            { renderImage }
            <h3 style={{marginBottom: 0}}>{ title }</h3>
            <div>{ author }</div>
            <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </div>
    )
}

export default Byte