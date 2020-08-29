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

const RecyclingProjectPage = ({ data }) => {
  const imageData = data.project.childImageSharp.fluid
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <Link to="/projects/projectsfrontpage">
            <BackIcon />
          </Link>
          <ProjectName>Recycling</ProjectName>
          <ProjectDescription>
            Full-stack project built with React, Typescript and Node.
          </ProjectDescription>
          <ProjectLinks>
            <a
              href="https://github.com/femalves/recycle"
              target="_blank"
              rel="noreferrer"
            >
              <DemoIcon />
            </a>
            <a
              href="https://ecoleta-oficial.netlify.app/"
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
    project: file(relativePath: { eq: "RecycleProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default RecyclingProjectPage
