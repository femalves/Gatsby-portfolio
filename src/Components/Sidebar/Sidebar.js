import React from "react"
import "typeface-benchnine"
import {
  SidebarContainer,
  StyledLink,
  ArrowIcon,
  ListContainer,
} from "./Sidebar.styles"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ListContainer>
        <p>
          <StyledLink to="/">
            <ArrowIcon />
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/bio">WHO</StyledLink>
        </p>
        <p>
          <StyledLink to="/projects">WORK</StyledLink>
        </p>
        <p>
          <StyledLink to="/skills">WHAT</StyledLink>
        </p>
      </ListContainer>
    </SidebarContainer>
  )
}

export default Sidebar
