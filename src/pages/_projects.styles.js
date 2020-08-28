import styled from "styled-components"
import { Link } from "gatsby"
import { KeyboardArrowRight } from "styled-icons/material-rounded/"
export const ProjectsContainer = styled.div`
  padding: 3%;
  font-size: 0.8em;
  span {
    color: var(--quaternary);
  }
`

export const ArrowIcon = styled(KeyboardArrowRight)`
  width: 100px;
  height: 100px;
  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;

  color: var(--secondary);
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:active,
  &:hover {
    transition: color 0.2s;
    color: var(--quaternary);
  }
`
