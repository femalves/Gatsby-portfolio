import styled from "styled-components"
import { Minutemailer } from "styled-icons/simple-icons"
import { Linkedin } from "styled-icons/remix-line"
import { TextDocument } from "styled-icons/entypo"

export const AboutMeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 7%;
`

export const Header = styled.div`
  font-family: "benchnine", sans-serif;
  font-weight: bold;
  border-left: 6px solid var(--secondary);
  padding-left: 1%;
  @media screen and (max-width: 800px) {
    font-size: 1.2em;
  }
`

export const ParagraphContainer = styled.div`
  text-align: justify;

  margin: 3% 0 3% 0;
  font-size: 0.5em;
  font-weight: lighter;
  color: var(--gray);
  padding: 2% 10%;
  span {
    color: var(--secondary);
  }

  @media screen and (max-width: 800px) {
    font-size: 0.8em;
  }
`

export const ContactMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2%;
`

export const EmailIcon = styled(Minutemailer)`
  width: 20px;
  height: 20px;
  color: var(--secondary);
  margin: 5px;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`

export const LinkedinIcon = styled(Linkedin)`
  width: 20px;
  height: 20px;
  color: var(--secondary);
  margin: 5px;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`

export const ResumeIcon = styled(TextDocument)`
  width: 20px;
  height: 20px;
  color: var(--secondary);
  margin: 5px;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`
