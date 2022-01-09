import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"




const contactPage = () => (
  <Layout>
    <Seo title="Page five" />
    <div style={{
      position: `relative`,
      height: `90vh`,
      width: `100vw`,
      zIndex: `0`,}} >
<h1>Hello from the contact page</h1>
    </div>
  </Layout>
)

export default contactPage