import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderContainer = styled.div`
  font-weight: bold;
  padding: 3%;
`
export const StyledLink = styled(Link)`
  text-decoration: none;

  color: var(--tertiary);
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
    color: white;
  }
`
