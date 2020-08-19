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

const ContactManagerProjectPage = ({ data }) => {
  return (
    <Layout>
      <ProjectContainer>
        <HeaderContainer>
          <ProjectName>Contact Manager</ProjectName>
          <ProjectDescription>
            Full-stack project built with React, Context and Bootstrap. Deployed
            to Github Pages.
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
            alt="Contact Manager Project"
          />
        </ImageContainer>
      </ProjectContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "ContactManagerProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactManagerProjectPage
