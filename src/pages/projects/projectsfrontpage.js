import React from "react"
import Layout from "../../Components/Layout/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import {
  ProjectsContainer,
  Header,
  StyledBackgroundImage,
  ImageContainer,
  Row,
} from "./_projectsfrontpage.styles.js"
const ProjectsFrontPage = data => {
  return (
    <Layout>
      <ProjectsContainer>
        <Header>Projects</Header>
        <Row>
          <ImageContainer>
            <Link to="/projects/portfolioproject">
              <StyledBackgroundImage
                Tag="section"
                fluid={data.data.oldPortfolio.childImageSharp.fluid}
              ></StyledBackgroundImage>
            </Link>
          </ImageContainer>
          <ImageContainer>
            <Link to="/projects/discordproject">
              <StyledBackgroundImage
                Tag="section"
                fluid={data.data.discord.childImageSharp.fluid}
              ></StyledBackgroundImage>
            </Link>
          </ImageContainer>
        </Row>
        <Row>
          <ImageContainer>
            <Link to="/projects/clientmanagerproject">
              <StyledBackgroundImage
                Tag="section"
                fluid={data.data.clientManager.childImageSharp.fluid}
              ></StyledBackgroundImage>
            </Link>
          </ImageContainer>
          <ImageContainer>
            <Link to="/projects/contactmanagerproject">
              <StyledBackgroundImage
                Tag="section"
                fluid={data.data.contactManager.childImageSharp.fluid}
              ></StyledBackgroundImage>
            </Link>
          </ImageContainer>
        </Row>
        <Row>
          <ImageContainer>
            <Link to="/projects/recyclingproject">
              <StyledBackgroundImage
                Tag="section"
                fluid={data.data.recycle.childImageSharp.fluid}
              ></StyledBackgroundImage>
            </Link>
          </ImageContainer>
          <ImageContainer>
            <Link to="/projects/memenetproject">
              <StyledBackgroundImage
                Tag="section"
                fluid={data.data.memenet.childImageSharp.fluid}
              ></StyledBackgroundImage>
            </Link>
          </ImageContainer>
        </Row>
        <Row>
          <ImageContainer>
            <Link to="/projects/blogproject">
              <StyledBackgroundImage
                Tag="section"
                fluid={data.data.blog.childImageSharp.fluid}
              ></StyledBackgroundImage>
            </Link>
          </ImageContainer>
          <ImageContainer>
            <Link to="/projects/realestateproject">
              <StyledBackgroundImage
                Tag="section"
                fluid={data.data.realEstate.childImageSharp.fluid}
              ></StyledBackgroundImage>
            </Link>
          </ImageContainer>
        </Row>
      </ProjectsContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    blog: file(relativePath: { eq: "BlogProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientManager: file(relativePath: { eq: "ClientManagerProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contactManager: file(relativePath: { eq: "ContactManagerProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discord: file(relativePath: { eq: "DiscordProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    memenet: file(relativePath: { eq: "MemenetProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oldPortfolio: file(relativePath: { eq: "OldPortfolioProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    realEstate: file(relativePath: { eq: "RealEstateProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recycle: file(relativePath: { eq: "RecycleProject.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectsFrontPage
