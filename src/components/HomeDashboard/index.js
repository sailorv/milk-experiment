import React from "react"

import { useBytes } from "../../hooks/useBytes"

import FeaturedPost from "../FeaturedPost"
import LatestBlogPosts from "../LatestBlogPosts"
import TaxonomyCloud from "../TaxonomyCloud"
import SciFiAdjacentPosts from "../SciFiAdjacentPosts"
import Byte from "../Byte"

const HomeDashboard = () => {

    const bytes = useBytes()

    return (
        <>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div className="col-3 mobile-last">
                <h2>Metadata</h2>
                <p>Rydell got his bag of cornflakes out of the cupboard and carefully unrolled it. About enough for a bowl. He opened the fridge and took out a plastic, snap-top, liter container with a strip of masking-tape across the side. He'd written <strong>MILK EXPERIMENT</strong> on the masking-tape with a heavy marker.</p>
                <p>"What's that?" Hernandez asked.<br />
                "Milk."<br />
                "So why's it say 'experiment'?"<br />
                "So nobody'll drink it."</p>
                <p style={{ textAlign: `right`, }}> &mdash; <em>Virtual Light</em> by William Gibson</p>
                <TaxonomyCloud />
                <div className="bytes-wrapper">
                    <h2>Bytes</h2>
                    <p>BYTES are micro-reviews of our recommended books.</p>
                    
                        {new Array(1).fill("").map((element, i) => (
                            <Byte 
                                key={i}
                                title={ bytes.allWpPost.edges[7].node.title }
                                author={ bytes.allWpPost.edges[7].node.bytesFields.bytesBookAuthor }
                                excerpt={ bytes.allWpPost.edges[7].node.content }
                                pub={ bytes.allWpPost.edges[7].node.bytesFields.bytesDate }
                            />
                        ))} 
                    <a href="/bytes" class="button">See all bytes</a>
                </div>
            </div>
            <div className="col-3">
                <FeaturedPost />
            </div>
            <div className="col-3">
                <h2>Further Reading</h2>
                <LatestBlogPosts />

                <SciFiAdjacentPosts />

            </div>
        </div>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div className="col-3">
                <h2 style={{marginBottom: `0`}}>leave a message</h2>
                <a href="/guestbook" className="guestbook" style={{textDecoration: `none`, fontFamily: `monospace`, overflow: `hidden`}}><pre style={{lineHeight: `1.2`}}>{`                         __      
  ____ ___  _____  _____/ /___/|_ 
 / __ \`/ / / / _ \\/ ___/ __/    /
/ /_/ / /_/ /  __(__  ) /_/_ __| 
\\__, /\\__,_/\\___/____/\\__/ |/ __
/___/__/|_ / /_  ____  ____  / /__
     |    / __ \\/ __ \\/ __ \\/ //_/
    /_ __/ /_/ / /_/ / /_/ / , <
     |/ /_.___/\\____/\\____/_/|_|
                `}</pre></a>
            </div>
            <div className="col-3">
                <div class="links">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="https://podcasts.apple.com/us/podcast/the-ezra-klein-show/id1548604447?i=1000515001051">Podcast interview with Ted Chiang by Ezra Klein</a></li>
                        <li><a href="https://www.syfy.com/syfy-wire/spacetime-shakes-for-the-first-time-astronomers-see-a-black-hole-eating-a-neutron-star">Spacetime shakes: For the first time, astronomers see a black hole eating a neutron star</a></li>
                        <li><a href="http://www.nausicaa.net/miyazaki/interviews/afternausicaa.html">Interview with Hayao Miyazaki on <em>Nausicaä</em>, from <em>Yom</em> magazine, 1994 </a></li>
                        <li><a href="http://www.isfdb.org/">The Internet Speculative Fiction Database</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-3">

            </div>
        </div>
        </>
    )
}

export default HomeDashboard