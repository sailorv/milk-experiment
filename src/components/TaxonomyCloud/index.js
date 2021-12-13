import React from "react"

const TaxonomyCloud = () => {
    return (
        <>
            <div className="tag-cloud cut-corner">
                <h3 style={{ marginBottom: `0`, }}>Tags</h3>
                <a href="http://sailorven.us">cyberpunk</a>
                <a href="http://sailorven.us">dying earth</a>
                <a href="http://sailorven.us">near future</a>
                <a href="http://sailorven.us">space travel</a>
            </div>
            <div className="categories cut-corner">
                <h3 style={{ marginBottom: `0`, }}>Categories</h3>
                <a href="http://sailorven.us">anime &amp; manga</a>
                <a href="http://sailorven.us">books</a>
                <a href="http://sailorven.us">sci-fi adjacent</a>
            </div>
        </>
    )
}

export default TaxonomyCloud