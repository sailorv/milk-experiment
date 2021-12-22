import React from "react"

import FeaturedPost from "../FeaturedPost"
import LatestBlogPosts from "../LatestBlogPosts"
import TaxonomyCloud from "../TaxonomyCloud"
import SciFiAdjacentPosts from "../SciFiAdjacentPosts"
import Byte from "../Byte"
import { Link } from "gatsby"

const HomeDashboard = () => {
    return (
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
                
                <h2>Bytes</h2>
                <div className="bytes-wrapper">
                    <Byte title="Binti" author="Nnedi Okorafor" 
                    image="https://i.pinimg.com/564x/cd/d9/5a/cdd95a513dbc63203ffe4006af9820cb.jpg"
                    excerpt={`Winner of the Hugo and Nebula awards. Binti is so moving and so exciting that it's impossible to put down. In fact, I was downright sad to finish this trilogy - I would follow Binti's story through all of spacetime. Ursula K. Le Guin says it best: "There's more vivid imagination in a page of Nnedi Okorafor's work than in whole volumes of ordinary fantasy epics."`} />
                    
                    <div style={{ display: `flex`, clear: `both`, width: `100%`, flexDirection: `row`, alignContent: `center` }}>
                        <p style={{ margin: 0}}>BYTES are micro-reviews of our recommended books.</p>
                        <Link className="button" style={{ width: `30%` }} to="/bytes">See all bytes</Link>
                    </div>

                </div>
            </div>
            <div className="col-3">
                <FeaturedPost />
            </div>
            <div className="col-3">
                <h2>Further Reading</h2>
                <LatestBlogPosts />

                <SciFiAdjacentPosts />

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
        </div>
    )
}

export default HomeDashboard