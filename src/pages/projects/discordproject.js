import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Components/Layout/Layout"
import { Link } from "gatsby"
import {
  ProjectContainer,
  HeaderContainer,
  ProjectName,
  ProjectDescription,
  ProjectLinks,
  DemoIcon,
  CodeIcon,
  StyledBackgroundImage,
  ImageContainer,
  BackIcon,
} from "./_project.styles"

const DiscordProjectPage = ({ data }) => {
  const imageData = data.project.childImageSharp.fluid
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <Link to="/projects/projectsfrontpage">
            <BackIcon />
          </Link>
          <ProjectName>Discord Clone</ProjectName>
          <ProjectDescription>
            Front-end project built with React, Typescript and
            Styled-components. Deployed to Netlify.
          </ProjectDescription>
          <ProjectLinks>
            <a
              href="https://github.com/femalves/discord-clone-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <DemoIcon />
            </a>
            <a
              href="https://5f2c387b002a820008cc71a2--zealous-heisenberg-ab22ab.netlify.app/"
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
    project: file(relativePath: { eq: "DiscordProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default DiscordProjectPage
