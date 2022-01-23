import React from "react"

import { useBytes } from "../hooks/useBytes"
import Byte from "../components/Byte"
import Layout from "../components/Layout"

const BytesPage = () => {

    const bytes = useBytes()

    const totalBytes = bytes.allWpPost.totalCount

    return (
        <Layout>
            <div style={{textAlign: `center`}}><pre style={{display: `inline-block`, marginBottom: `0`}}>{`     __          __           
    / /_  __  __/ /____  _____
   / __ \\/ / / / __/ _ \\/ ___/
  / /_/ / /_/ / /_/  __(__  ) 
 /_.___/\\__, /\\__/\\___/____/  
       /____/                 `}</pre></div>
            <p style={{textAlign: `center`, marginBottom: `2em`}}>BYTES are micro-reviews of our recommended books.</p>
            <div className="bytes-page">
            
            {new Array(totalBytes).fill("").map((element, i) => (
                
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