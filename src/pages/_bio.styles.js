import styled from "styled-components"
import { KeyboardArrowRight } from "styled-icons/material-rounded/"
import { Link } from "gatsby"
export const BioContainer = styled.div`
  font-size: 0.8em;
  padding-left: 3%;
  span {
    color: var(--quaternary);
  }
`

export const ArrowIcon = styled(KeyboardArrowRight)`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
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
