import React from "react"
import Layout from "../Components/Layout/Layout"
import { SkillsContainer, ArrowIcon, StyledLink } from "./_skills.styles"
const SkillsPage = () => {
  return (
    <Layout>
      <SkillsContainer>
        <h1>
          <span>What</span> I use{" "}
          <StyledLink to="/">
            <ArrowIcon />
          </StyledLink>
        </h1>
      </SkillsContainer>
    </Layout>
  )
}

export default SkillsPage
