import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>
      <Link to="profile/">Go to profile</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
