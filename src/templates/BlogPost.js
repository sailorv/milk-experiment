import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/SEO"
import Layout from "../components/Layout"

const BlogPostTemplate = ({ data }) => (
  <Layout>
        <Seo
            title={ data.wpgraphql.post.title }
        />
        <h1 style={{textAlign: `center`, maxWidth: `300px`, margin: `.5em auto`}}>{ data.wpgraphql.post.title }</h1>
        <hr style={{maxWidth: `600px`, margin: `0 auto 2em auto`}} />
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
        }
    }
}  
`