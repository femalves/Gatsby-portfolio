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
  BackIcon,
} from "./_project.styles"

const PortfolioPage = ({ data }) => {
  const imageData = data.project.childImageSharp.fluid
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <Link to="/projects/projectsfrontpage">
            <BackIcon />
          </Link>
          <ProjectName>Portfolio</ProjectName>
          <ProjectDescription>
            Vanilla front-end portfolio project built entirely with HTML and
            CSS. Fully responsive. Deployed to Github Pages.
          </ProjectDescription>
          <ProjectLinks>
            <a
              href="https://github.com/femalves/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <DemoIcon />
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
    project: file(relativePath: { eq: "OldPortfolioProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default PortfolioPage
