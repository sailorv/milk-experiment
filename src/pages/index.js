import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import HomeDashboard from "../components/HomeDashboard"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeDashboard />
  </Layout>
)

export default IndexPage
