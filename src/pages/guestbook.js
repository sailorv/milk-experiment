import React from "react"

import { useComments } from "../hooks/useComments"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const GuestbookPage = () => {

    const entry = useComments()
    const entryNum = entry.allWpPage.edges[0].node.commentCount

    return (
        <Layout>
            <Seo title="Guestbook" />
            <h1>Guestbook</h1>

        <div className="col-wrapper">
            <div className="col-2">
                <iframe src="https://live-milk-experiment.pantheonsite.io/guestbook/" style={{
                    height: `400px`,
                    border: `0`,
                    width: `100%`,
                    overflow: `hidden`,
                }}
                scrolling="no"
                ></iframe>
            </div>

            <div className="col-2">
                {new Array(entryNum).fill("").map((element, i) => (
                    <div className="guestbook-entry cut-corner">
                        
                        <div className="guestbook-entry-author">{ entry.allWpPage.edges[0].node.comments.nodes[`${i}`].author.node.name}</div>
                        <div className="guestbook-entry-content" dangerouslySetInnerHTML={{__html: entry.allWpPage.edges[0].node.comments.nodes[`${i}`].content }}>
                            
                        </div>
                    </div>
                ))}   
            </div>
        </div>
            
        </Layout>
    )
}

export default GuestbookPage