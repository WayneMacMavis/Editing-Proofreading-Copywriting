import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"




const contactPage = () => (
  <Layout>
    <Seo title="Page five" />
    <div style={{position: `relative`, width: `100vw`, height: `100vh`, backgroundImage: `linear-gradient(to right, white , yellow, purple)`,}}>
    <h1>Hi from the fifth page</h1>
    <p>Welcome to page 5</p>
    </div>
  </Layout>
)

export default contactPage