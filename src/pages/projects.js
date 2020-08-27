import React from "react"
import Layout from "../Components/Layout/Layout"
import { ProjectsContainer, ArrowIcon, StyledLink } from "./_projects.styles"
const ProjectsPage = () => {
  return (
    <Layout>
      <ProjectsContainer>
        <h1>
          Check out my <span>projects</span>
          <StyledLink to="/projects/projectsfrontpage">
            <ArrowIcon />
          </StyledLink>
        </h1>
      </ProjectsContainer>
    </Layout>
  )
}

export default ProjectsPage
