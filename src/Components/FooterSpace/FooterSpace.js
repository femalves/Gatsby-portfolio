import React from "react"
import {
  GithubIcon,
  LinkedinIcon,
  FooterSpaceContainer,
} from "./FooterSpace.styles"
const FooterSpace = () => {
  return (
    <FooterSpaceContainer>
      <a
        href="https://github.com/femalves"
        aria-label="Go to github"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/ferdemacedo/"
        aria-label="Go to linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon />
      </a>
    </FooterSpaceContainer>
  )
}

export default FooterSpace
