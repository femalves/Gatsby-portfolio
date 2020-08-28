import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
// import blog from "../../images/SkewedBlogProject.png"
export const ProjectsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 7%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Header = styled.div`
  font-family: "benchnine", sans-serif;
  font-weight: bold;
  border-left: 6px solid var(--secondary);
  padding-left: 1%;
  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`
export const Row = styled.div`
  display: flex;
  margin-top: 2%;
  width: 100%;
  height: 60vh;
  align-items: center;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 2%;

  &:hover {
    transition: background-color 0.5s;
    background-color: var(--secondary);
    border-radius: 50% 5% 50% 50%;
  }
`

export const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: contain;
  padding: 2%;
  width: 90%;
  height: 90%;
`
