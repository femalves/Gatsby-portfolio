import React from "react"
import Layout from "../Components/Layout/Layout"
import { SkillsContainer, ArrowIcon, StyledLink } from "./_skills.styles"
const SkillsPage = () => {
  return (
    <Layout>
      <SkillsContainer>
        <h1>
          Take a look at the <span>tech</span> I use
          <StyledLink to="/skills/tech">
            <ArrowIcon />
          </StyledLink>
        </h1>
      </SkillsContainer>
    </Layout>
  )
}

export default SkillsPage
