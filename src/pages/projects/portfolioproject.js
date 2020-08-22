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

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <ProjectName>Portfolio</ProjectName>
          <ProjectDescription>
            Vanilla front-end portfolio project built entirely with HTML and
            CSS. Fully responsive. Deployed to Github Pages.
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
    file(relativePath: { eq: "OldPortfolioProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default PortfolioPage
