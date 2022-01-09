import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const resourcePage = () => (
  <Layout>
    <Seo title="Page four" />
    <div style={{position: `relative`, width: `100vw`, height: `100vh`, backgroundImage: `linear-gradient(to right, white , aqua, orange)`,}}>
    <h1>Hi from the forth page</h1>
    <p>Welcome to page 4</p>
    </div>
  </Layout>
)

export default resourcePage