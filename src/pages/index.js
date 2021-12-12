import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import LatestBlogPosts from "../components/LatestBlogPosts"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <LatestBlogPosts />
  </Layout>
)

export default IndexPage
