import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import HomePageHeader from "../components/HomePageHeader"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomePageHeader />
  </Layout>
)

export default IndexPage
