import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const blogPage = () => (
  <Layout>
    <Seo title="Page six" />
    <div style={{position: `relative`, width: `100vw`, height: `100vh`, backgroundImage: `linear-gradient(to right, white , maroon, red)`,}}>
    <h1>Hi from the sixth page</h1>
    <p>Welcome to page 6</p>
    </div>
  </Layout>
)

export default blogPage