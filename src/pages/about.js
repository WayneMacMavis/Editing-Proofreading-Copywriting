import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const aboutPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div style={{position: "relative", width: "100vw", height: "90vh", background: `red`,}}>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        </div>
    
  </Layout>
)

export default aboutPage
