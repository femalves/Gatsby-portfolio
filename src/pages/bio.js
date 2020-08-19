import React from "react"
import Layout from "../Components/Layout/Layout"
import { BioContainer, ArrowIcon, StyledLink } from "./_bio.styles"
const BioPage = () => {
  return (
    <Layout>
      <BioContainer>
        <h1>
          <span>Who </span>I am
          <StyledLink to="/who">
            <ArrowIcon />
          </StyledLink>
        </h1>
      </BioContainer>
    </Layout>
  )
}

export default BioPage
