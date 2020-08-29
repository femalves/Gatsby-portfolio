import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Components/Layout/Layout"
import { Link } from "gatsby"
import {
  ProjectContainer,
  HeaderContainer,
  ImageContainer,
  StyledBackgroundImage,
  ProjectName,
  ProjectDescription,
  ProjectLinks,
  DemoIcon,
  CodeIcon,
  BackIcon,
} from "./_project.styles"

const ClientManagerProjectPage = ({ data }) => {
  const imageData = data.project.childImageSharp.fluid
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <Link to="/projects/projectsfrontpage">
            <BackIcon />
          </Link>
          <ProjectName>Client Manager</ProjectName>
          <ProjectDescription>
            Full-stack project built with React, Redux and Firebase. Deployed to
            Firebase.
          </ProjectDescription>
          <ProjectLinks>
            <a
              href="https://github.com/femalves/fb_officemanager"
              target="_blank"
              rel="noreferrer"
            >
              <DemoIcon />
            </a>
            <a
              href="https://reactofficemanager.firebaseapp.com/login?redirect=%2F"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon />
            </a>
          </ProjectLinks>
        </HeaderContainer>
        <ImageContainer>
          <StyledBackgroundImage Tag="section" fluid={imageData} />
        </ImageContainer>
      </ProjectContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    project: file(relativePath: { eq: "ClientManagerProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ClientManagerProjectPage
