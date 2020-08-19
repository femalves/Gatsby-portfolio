import React from "react"
import Layout from "../Components/Layout/Layout"

import { HeaderContainer } from "./_index.styles"
const IndexPage = () => {
  return (
    <Layout>
      <HeaderContainer>
        <h1>
          Hi there, I’m Fernanda. <br />
          Full stack <span className="developer">developer</span> and{" "}
          <span className="design">design</span> enthusiast.
        </h1>
      </HeaderContainer>
    </Layout>
  )
}

export default IndexPage
