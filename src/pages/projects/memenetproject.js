import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Components/Layout/Layout"
import {
  ProjectContainer,
  HeaderContainer,
  ImageContainer,
  ProjectName,
  ProjectDescription,
  ProjectLinks,
  DemoIcon,
  CodeIcon,
} from "./_project.styles"

const MemenetProjectPage = ({ data }) => {
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <ProjectName>Social Network</ProjectName>
          <ProjectDescription>
            Full-stack social network project to share memes. Built with Python,
            Django, Redis. Deployed to Heroku.
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
        <ImageContainer></ImageContainer>
      </ProjectContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "MemenetProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default MemenetProjectPage
