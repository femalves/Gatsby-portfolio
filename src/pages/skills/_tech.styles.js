import styled from "styled-components"
import { Check } from "styled-icons/bootstrap"
import { DevicesOther, Computer } from "styled-icons/material-outlined"
import { Database } from "styled-icons/fa-solid"

export const SkillsContainer = styled.div`
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

export const SectionsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    font-size: 1.6em;
  }
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% 2%;
  padding: 3%;
  width: 33%;
  height: 90%;
  border-radius: 10px;
  font-size: 0.8em;
  box-shadow: 3px 5px 15px 5px #2b3133;
  font-family: "benchnine", sans-serif;
  justify-content: flex-start;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`

export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3%;
`
export const Skill = styled.div`
  display: flex;

  color: var(--gray);
  font-size: 0.5em;
  font-family: "muli", sans-serif;
  font-weight: lighter;
  margin: 1%;
`

export const FrontendIcon = styled(Computer)`
  width: 40px;
  height: 40px;
  color: var(--secondary);
`
export const BackendIcon = styled(Database)`
  width: 40px;
  height: 40px;
  color: var(--secondary);
`

export const OtherIcon = styled(DevicesOther)`
  width: 40px;
  height: 40px;
  color: var(--secondary);
`

export const CheckIcon = styled(Check)`
  width: 20px;
  height: 20px;
  color: var(--secondary);
`
