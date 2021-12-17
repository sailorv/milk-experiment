import React from "react"

import Byte from "../components/Byte"
import Layout from "../components/Layout"

const BytesPage = () => {

    return (
        <Layout>
            <h1>Bytes</h1>
            <Byte title="Stories of your life and others" author="Ted Chiang" excerpt="Ted Chiang's collection of short stories eschews the typical paramaters of the sci-fi genre, his ideas are truly speculative fiction. This book explores time travel, free will, social media, and more. <em>Stories of your Life</em> eventually became the movie <em>Arrival</em>." />
            
            <Byte title="Castle of Days" author="Gene Wolfe" excerpt="Early Gene Wolfe. A collection of short speculative fiction stories, some eerily prescient, others limited by dated gender stereotypes." />
            
            <Byte title="Snow Crash" author="Neil Stephenson" excerpt="Required reading for a lot of Silicon Valley companies, Snow Crash is a highly stylized, hyperactive cyberpunk book that Neuromancer fans will enjoy." /> 
        </Layout>
    )
}

export default BytesPage