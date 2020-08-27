import styled from "styled-components"
import { CodeSlash } from "styled-icons/bootstrap"
import { Preview } from "styled-icons/material-outlined"
import { ChevronBackCircle } from "styled-icons/ionicons-sharp"
import BackgroundImage from "gatsby-background-image"

// import { KeyboardArrowRight } from
export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 30vw 50vw;
  grid-template-rows: 90vh;
  grid-template-areas: "HC IC";
  box-sizing: border-box;
  margin: 0;
`

export const HeaderContainer = styled.div`
  grid-area: HC;
  display: flex;
  flex-direction: column;
  padding: 3%;
  align-content: center;
  justify-content: center;
`

export const ProjectName = styled.div`
  font-weight: bold;
`
export const ProjectDescription = styled.div`
  font-size: 0.5em;
  color: var(--gray);
`
export const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  color: var(--secondary);
`
export const DemoIcon = styled(CodeSlash)`
  width: 30px;
  height: 30px;
  margin: 5px;

  cursor: pointer;

  color: var(--symbol);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`

export const CodeIcon = styled(Preview)`
  width: 30px;
  height: 30px;
  margin: 5px;

  cursor: pointer;

  color: var(--symbol);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`

export const BackIcon = styled(ChevronBackCircle)`
  width: 30px;
  height: 30px;

  color: var(--symbol);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`
export const ImageContainer = styled.div`
  grid-area: IC;
  display: flex;
`
export const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 98%;
  height: 98%;
`
