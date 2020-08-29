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

const RealEstatePage = ({ data }) => {
  const imageData = data.project.childImageSharp.fluid
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <Link to="/projects/projectsfrontpage">
            <BackIcon />
          </Link>
          <ProjectName>Real Estate Agency</ProjectName>
          <ProjectDescription>
            Full-stack website built with Django, Bootstrap and PostgreSQL.
            Deployed to Digital Ocean.
          </ProjectDescription>
          <ProjectLinks>
            <a
              href="https://github.com/femalves/realestate_django"
              target="_blank"
              rel="noreferrer"
            >
              <DemoIcon />
            </a>
            <a href="http://www.bthomes.me/" target="_blank" rel="noreferrer">
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
    project: file(relativePath: { eq: "RealEstateProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default RealEstatePage
