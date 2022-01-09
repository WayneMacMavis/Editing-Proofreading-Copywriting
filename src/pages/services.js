import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const servicesPage = () => (
  <Layout>
    <Seo title="Page three" />
    <div style={{position: `relative`, width: `100vw`, height: `90vh`, backgroundImage: `linear-gradient(to right, white , magenta, purple)`,}}>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    </div>
  </Layout>
)

export default servicesPage