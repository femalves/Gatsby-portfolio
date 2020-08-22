import React from "react"
import Layout from "../../Components/Layout/Layout"
import {
  AboutMeContainer,
  Header,
  ParagraphContainer,
  ContactMeContainer,
  EmailIcon,
  LinkedinIcon,
  ResumeIcon,
} from "./_aboutme.styles.js"
const AboutMePage = () => {
  return (
    <Layout>
      <AboutMeContainer>
        <Header>
          <h4>About me </h4>
        </Header>
        <ParagraphContainer>
          Hello, my name is Fernanda de Macedo. I have been coding off and on as
          a hobby for a <span>few years</span> now and I recently decided to
          transition into Software Engineering.
          <br />I hold a <span>Bachelor's degree in Engineering</span> and
          briefly studied Computer Science at <span>Cornell University</span>,
          where I picked up all of my CS foundational knowledge.
          <br />I currently specialize in <span>full-stack</span> web
          development with Javascript and Python Frameworks such as{" "}
          <span>React and Django</span>, and I occasionally dabble in{" "}
          <span> designing</span> applications as well.
          <br />I am absolutely passionate about Software Engineering so I am
          always <span>willing to learn </span>
          new technologies and tools. In fact, I am looking forward to
          collaborating with companies that <span>encourage learning</span>.
          <br />
          <br />
          You can connect with me on the <span>links below</span>. Feel free to
          send me a message!
          <ContactMeContainer>
            <a href="mailto:fer.de.macedo@gmail.com" target="_top">
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/ferdemacedo/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a href="Resume.pdf" title="Resume" download>
              <ResumeIcon />
            </a>
          </ContactMeContainer>
        </ParagraphContainer>
      </AboutMeContainer>
    </Layout>
  )
}

export default AboutMePage
