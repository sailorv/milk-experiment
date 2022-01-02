import React from "react"

import { useBytes } from "../hooks/useBytes"
import Byte from "../components/Byte"
import Layout from "../components/Layout"

const BytesPage = () => {

    const bytes = useBytes()

    return (
        <Layout>
            <h1>Bytes</h1>
            <p>BYTES are micro-reviews of our recommended books.</p>
            <div className="bytes-page">
            
            {new Array(11).fill("").map((element, i) => (
                
                <Byte 
                    key={i}
                    title={ bytes.allWpPost.edges[`${i}`].node.title }
                    author={ bytes.allWpPost.edges[`${i}`].node.bytesFields.bytesBookAuthor }
                    excerpt={ bytes.allWpPost.edges[`${i}`].node.content }
                    pub={ bytes.allWpPost.edges[`${i}`].node.bytesFields.bytesDate }
                    purchaseLink={ bytes.allWpPost.edges[`${i}`].node.bytesFields.bytesPurchaseLink }
                    related={ bytes.allWpPost.edges[`${i}`].node.bytesFields.bytesRelatedArticle }
                />
                
            ))}   

            </div>
        </Layout>
    )
}

export default BytesPage