import React from "react"

import { useBytes } from "../../hooks/useBytes"

import FeaturedPost from "../FeaturedPost"
import LatestBlogPosts from "../LatestBlogPosts"
import TaxonomyCloud from "../TaxonomyCloud"
import SciFiAdjacentPosts from "../SciFiAdjacentPosts"
import Byte from "../Byte"

import moon from "../../images/moon-phases-moon.gif"

const HomeDashboard = () => {

    const bytes = useBytes()

    return (
        <>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div className="col-3 mobile-last" style={{ display: `flex`, flexDirection: `column` }}>
                <div className="intro">

                <h2>Metadata</h2>
                <p>Rydell got his bag of cornflakes out of the cupboard and carefully unrolled it. About enough for a bowl. He opened the fridge and took out a plastic, snap-top, liter container with a strip of masking-tape across the side. He'd written <strong>MILK EXPERIMENT</strong> on the masking-tape with a heavy marker.</p>
                <p>"What's that?" Hernandez asked.<br />
                "Milk."<br />
                "So why's it say 'experiment'?"<br />
                "So nobody'll drink it."</p>
                <p style={{ textAlign: `right`, }}> &mdash; <em>Virtual Light</em> by William Gibson</p>

                </div>
                
                <TaxonomyCloud />

                <div className="bytes-wrapper mobile-first">
                    <h2>Bytes</h2>
                    
                        {new Array(1).fill("").map((element, i) => (
                            <Byte 
                                key={i}
                                title={ bytes.allWpPost.edges[7].node.title }
                                author={ bytes.allWpPost.edges[7].node.bytesFields.bytesBookAuthor }
                                excerpt={ bytes.allWpPost.edges[7].node.content }
                                pub={ bytes.allWpPost.edges[7].node.bytesFields.bytesDate }
                            />
                        ))} 
                    <a href="/bytes" className="button">See all bytes</a>
                </div>
            </div>
            <div className="col-3">
                <FeaturedPost />
            </div>
            <div className="col-3">
                <h2>Further Reading</h2>
                <LatestBlogPosts />

                <hr />

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
                <div className="links">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="https://podcasts.apple.com/us/podcast/the-ezra-klein-show/id1548604447?i=1000515001051">Podcast interview with Ted Chiang by Ezra Klein</a></li>
                        <li><a href="https://www.syfy.com/syfy-wire/spacetime-shakes-for-the-first-time-astronomers-see-a-black-hole-eating-a-neutron-star">Spacetime shakes: For the first time, astronomers see a black hole eating a neutron star</a></li>
                        <li><a href="http://www.nausicaa.net/miyazaki/interviews/afternausicaa.html">Interview with Hayao Miyazaki on <em>Nausicaä</em>, from <em>Yom</em> magazine, 1994 </a></li>
                        <li><a href="http://www.isfdb.org/">The Internet Speculative Fiction Database</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-3 mobile-hide">
                <div className="moonphases post-image scanline-vertical" style={{width: `fit-content`, margin: `0 auto`}}>
                    <div className="animate-flicker"><img src={ moon } alt="moon phases" style={{height: `215px`, width: `auto`}} className="animate-twitch" /></div>
                    <div className="green"></div>
                    <div className="fade" style={{ background: `radial-gradient(rgba(0, 0, 0, 0.2), black 100%)` }}></div>
                    <div className="moon-caption" style={{
                            position: `absolute`,
                            top: `50%`,
                            left: `50%`,
                            width: `100%`,
                            transform: `translate(-50%, -50%)`
                    }}>
                        <p>
                            Moon phase: New Moon<br />
                            Time until full moon: 16 days<br />
                            Illumination: 0%
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeDashboard