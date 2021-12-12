import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div style={{ textAlign: `center`, }}>
      <h1>404: Not Found</h1>
      <p>This page doesn't exist</p>
    </div>
  </Layout>
)

export default NotFoundPage
