import React from "react"
import Layout from "../Components/Layout/Layout"
import { ProjectsContainer, ArrowIcon, StyledLink } from "./_projects.styles"
const ProjectsPage = () => {
  return (
    <Layout>
      <ProjectsContainer>
        <h1>
          Know my <span>work</span>
          <StyledLink to="/projects/discordproject">
            <ArrowIcon />
          </StyledLink>
        </h1>
      </ProjectsContainer>
    </Layout>
  )
}

export default ProjectsPage
