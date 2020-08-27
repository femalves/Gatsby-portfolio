import styled from "styled-components"
import { Link } from "gatsby"
import { KeyboardArrowRight } from "styled-icons/material-rounded/"
export const ProjectsContainer = styled.div`
  font-size: 0.8em;
  span {
    color: var(--quaternary);
  }
`

export const ArrowIcon = styled(KeyboardArrowRight)`
  width: 100px;
  height: 100px;
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
