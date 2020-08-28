import styled from "styled-components"
import { Link } from "gatsby"
import { ArrowheadUpOutline } from "styled-icons/evaicons-outline"

export const SidebarContainer = styled.div`
  grid-area: SD;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`

export const StyledLink = styled(Link)`
  text-decoration: none;

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

  color: var(--secondary);

  &.active {
    color: var(--quaternary);
  }
`
export const ArrowIcon = styled(ArrowheadUpOutline)`
  width: 30px;
  height: 30px;
  padding-right: 7%;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin-left: -3px;
  }
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 7%;
  font-size: 3vw;
  font-family: "benchnine", sans-serif;
  font-weight: bold;
  align-items: flex-end;
  @media screen and (max-width: 600px) {
    align-items: flex-start;
    padding: 3%;
    font-size: 4vw;
  }
`
