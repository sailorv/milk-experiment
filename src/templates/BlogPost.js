import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/SEO"
import Layout from "../components/Layout"

const BlogPostTemplate = ({ data }) => (
  <Layout>
        <Seo
            title={ data.wpgraphql.post.title }
        />
        <h1>{ data.wpgraphql.post.title }</h1>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} />

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