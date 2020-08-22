import React from "react"
import Layout from "../../Components/Layout/Layout"
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
              <Skill>
                <CheckIcon /> HTML / CSS / SASS
              </Skill>
              <Skill>
                <CheckIcon /> React / Redux
              </Skill>
              <Skill>
                <CheckIcon /> Styled-components
              </Skill>
              <Skill>
                <CheckIcon /> Bootstrap
              </Skill>
              <Skill>
                <CheckIcon /> Material / Materialize
              </Skill>
              <Skill>
                <CheckIcon /> UIKit / Skeleton
              </Skill>
              <Skill>
                <CheckIcon /> Responsive Design
              </Skill>
              <Skill>
                <CheckIcon /> Accessibility
              </Skill>
            </ColumnContent>
          </ColumnContainer>
          <ColumnContainer>
            <ColumnHeader>
              {" "}
              <BackendIcon />
              Backend
            </ColumnHeader>
            <ColumnContent>
              <Skill>
                <CheckIcon /> Python / Django
              </Skill>
              <Skill>
                <CheckIcon /> Javascript (ES6+)
              </Skill>
              <Skill>
                <CheckIcon /> Typescript
              </Skill>
              <Skill>
                <CheckIcon /> Gatsby
              </Skill>
              <Skill>
                <CheckIcon /> Java
              </Skill>
              <Skill>
                <CheckIcon /> SQL / PostgreSQL
              </Skill>
              <Skill>
                <CheckIcon /> Restful APIs
              </Skill>
              <Skill>
                <CheckIcon /> GraphQL
              </Skill>
            </ColumnContent>
          </ColumnContainer>
          <ColumnContainer>
            <ColumnHeader>
              <OtherIcon />
              Others
            </ColumnHeader>
            <ColumnContent>
              <Skill>
                <CheckIcon /> Data Structures
              </Skill>
              <Skill>
                <CheckIcon /> Algorithms
              </Skill>
              <Skill>
                <CheckIcon /> Firebase
              </Skill>
              <Skill>
                <CheckIcon /> Figma
              </Skill>
              <Skill>
                <CheckIcon /> Git
              </Skill>
              <Skill>
                <CheckIcon /> Bash
              </Skill>
              <Skill>
                <CheckIcon /> PWA
              </Skill>
              <Skill>
                <CheckIcon /> Npm / Yarn
              </Skill>
              <Skill>
                <CheckIcon /> Webpack
              </Skill>
            </ColumnContent>
          </ColumnContainer>
        </SectionsContainer>
      </SkillsContainer>
    </Layout>
  )
}

export default TechPage
