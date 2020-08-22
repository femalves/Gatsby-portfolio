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
          <StyledLink to="/" activeClassName="active">
            <ArrowIcon />
          </StyledLink>
        </p>
        <p>
          <StyledLink
            to="/bio"
            activeStyle={{ color: "var(--quaternary)" }}
            partiallyActive={true}
          >
            WHO
          </StyledLink>
        </p>
        <p>
          <StyledLink
            to="/projects"
            activeStyle={{ color: "var(--quaternary)" }}
            partiallyActive={true}
          >
            WORK
          </StyledLink>
        </p>
        <p>
          <StyledLink
            to="/skills"
            activeStyle={{ color: "var(--quaternary)" }}
            partiallyActive={true}
          >
            WHAT
          </StyledLink>
        </p>
      </ListContainer>
    </SidebarContainer>
  )
}

export default Sidebar
