import React from "react"
import Layout from "../Components/Layout/Layout"
import { HeaderContainer, StyledLink } from "./_404.styles"
const PageNotFound = () => {
  return (
    <Layout>
      <HeaderContainer>
        Hey there! You look lost. <br />
        <StyledLink to="/">Click here</StyledLink> and I'll take you back home.
      </HeaderContainer>
    </Layout>
  )
}

export default PageNotFound
