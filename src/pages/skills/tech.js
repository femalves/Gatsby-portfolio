import React from "react"
import Layout from "../../Components/Layout/Layout"
import { frontend } from "../../../data/frontend"
import { backend } from "../../../data/backend"
import { other } from "../../../data/other"
import {
  SkillsContainer,
  Header,
  SectionsContainer,
  ColumnContainer,
  ColumnHeader,
  ColumnContent,
  FrontendIcon,
  BackendIcon,
  OtherIcon,
  Skill,
  CheckIcon,
} from "./_tech.styles.js"
const TechPage = () => {
  return (
    <Layout>
      <SkillsContainer>
        <Header>
          <h4>Skills Overview </h4>
        </Header>
        <SectionsContainer>
          <ColumnContainer>
            <ColumnHeader>
              <FrontendIcon />
              Frontend
            </ColumnHeader>
            <ColumnContent>
              {" "}
              {frontend.map(item => (
                <Skill>
                  <CheckIcon /> {item}
                </Skill>
              ))}
            </ColumnContent>
          </ColumnContainer>
          <ColumnContainer>
            <ColumnHeader>
              {" "}
              <BackendIcon />
              Backend
            </ColumnHeader>
            <ColumnContent>
              {" "}
              {backend.map(item => (
                <Skill>
                  <CheckIcon /> {item}
                </Skill>
              ))}
            </ColumnContent>
          </ColumnContainer>
          <ColumnContainer>
            <ColumnHeader>
              <OtherIcon />
              Others
            </ColumnHeader>
            <ColumnContent>
              {" "}
              {other.map(item => (
                <Skill>
                  <CheckIcon /> {item}
                </Skill>
              ))}
            </ColumnContent>
          </ColumnContainer>
        </SectionsContainer>
      </SkillsContainer>
    </Layout>
  )
}

export default TechPage
