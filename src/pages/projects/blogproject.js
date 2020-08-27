import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Components/Layout/Layout"
import { Link } from "gatsby"
import {
  ProjectContainer,
  HeaderContainer,
  ImageContainer,
  ProjectName,
  ProjectDescription,
  ProjectLinks,
  StyledBackgroundImage,
  DemoIcon,
  CodeIcon,
  BackIcon,
} from "./_project.styles"

const BlogProjectPage = ({ data }) => {
  const imageData = data.project.childImageSharp.fluid
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <Link to="/projects/projectsfrontpage">
            <BackIcon />
          </Link>
          <ProjectName>Blog</ProjectName>
          <ProjectDescription>
            Full-stack project built with Python, Django and PostgreSQL.
            Deployed to Heroku.
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
          <StyledBackgroundImage Tag="section" fluid={imageData} />
        </ImageContainer>
      </ProjectContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    project: file(relativePath: { eq: "BlogProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BlogProjectPage
