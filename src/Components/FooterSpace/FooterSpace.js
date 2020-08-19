import React from "react"
import {
  GithubIcon,
  LinkedinIcon,
  FooterSpaceContainer,
} from "./FooterSpace.styles"
const FooterSpace = () => {
  return (
    <FooterSpaceContainer>
      <a href="https://github.com/femalves" target="_blank" rel="noreferrer">
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/ferdemacedo/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon />
      </a>
    </FooterSpaceContainer>
  )
}

export default FooterSpace
