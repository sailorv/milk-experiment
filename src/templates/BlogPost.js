import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/SEO"
import Layout from "../components/Layout"

const BlogPostTemplate = ({ data }) => (
  <Layout>
        <Seo
            title={ data.wpgraphql.post.title }
        />
        <section id="post-meta" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

        }}
        >
            <div id="post-image" className="col-2">
            <div className="post-image animate-scanline">
                <img src={ data.wpgraphql.post.featuredImage.node.sourceUrl } />
                <div class="fade"></div>
                <div class="green"></div>
            </div>
            </div>
            <div id="post-title" className="col-2">
                <h1>{ data.wpgraphql.post.title }</h1>
                <div dangerouslySetInnerHTML={{__html: data.wpgraphql.post.excerpt }} />
            </div>
        </section>
        
        <div className="post-content" style={{maxWidth:`960px`, margin: `0 auto`,}} dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} />

  </Layout>
)

export default BlogPostTemplate

export const pageQuery = graphql`
query($id: ID = "cG9zdDoxOTk=") {
    wpgraphql {
        post(id: $id) {
        id
        title
        excerpt
        content
        featuredImage {
            node {
                altText
                sourceUrl
            }
        }
        }
    }
}  
`