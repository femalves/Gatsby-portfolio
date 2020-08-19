import React from "react"
import {
  GithubIcon,
  LinkedinIcon,
  FooterSpaceContainer,
} from "./FooterSpace.styles"
const FooterSpace = () => {
  return (
    <FooterSpaceContainer>
      <GithubIcon>
        <a href="https://github.com/femalves" target="_blank" rel="noreferrer">
          Github
        </a>
      </GithubIcon>
      <LinkedinIcon>
        <a
          href="https://www.linkedin.com/in/ferdemacedo/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </LinkedinIcon>
    </FooterSpaceContainer>
  )
}

export default FooterSpace
