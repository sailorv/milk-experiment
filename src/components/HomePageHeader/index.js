import React from "react"

import FeaturedPost from "../FeaturedPost"
import LatestBlogPosts from "../LatestBlogPosts"
import TaxonomyCloud from "../TaxonomyCloud"
import Apod from "../Apod"
import SciFiAdjacentPosts from "../SciFiAdjacentPosts"

const HomePageHeader = () => {
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div className="col-3">
                <h2>A Milk Experiment</h2>
                <p>Rydell got his bag of cornflakes out of the cupboard and carefully unrolled it. About enough for a bowl. He opened the fridge and took out a plastic, snap-top, liter container with a strip of masking-tape across the side. He'd written <strong>MILK EXPERIMENT</strong> on the masking-tape with a heavy marker.</p>
                <p>"What's that?" Hernandez asked.<br />
                "Milk."<br />
                "So why's it say 'experiment'?"<br />
                "So nobody'll drink it."</p>
                <p style={{ textAlign: `right`, }}> &mdash; <em>Virtual Light</em> by William Gibson</p>
                <TaxonomyCloud />
                <Apod />
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
    )
}

export default HomePageHeader