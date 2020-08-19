import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Components/Layout/Layout"
import {
  ProjectContainer,
  HeaderContainer,
  StyledImg,
  ImageContainer,
  ProjectName,
  ProjectDescription,
  ProjectLinks,
  DemoIcon,
  CodeIcon,
} from "./_project.styles"

const DiscordProjectPage = ({ data }) => {
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <ProjectName>Discord Clone</ProjectName>
          <ProjectDescription>
            Front-end project built with React, Typescript and
            Styled-components. Deployed to Netlify.
          </ProjectDescription>
          <ProjectLinks>
            <a
              href="https://github.com/femalves"
              target="_blank"
              rel="noreferrer"
            >
              <DemoIcon />
            </a>
            <a
              href="https://github.com/femalves"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon />
            </a>
          </ProjectLinks>
        </HeaderContainer>
        <ImageContainer>
          <StyledImg
            fluid={data.file.childImageSharp.fluid}
            alt="Discord Project"
          />
        </ImageContainer>
      </ProjectContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "DiscordProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default DiscordProjectPage
