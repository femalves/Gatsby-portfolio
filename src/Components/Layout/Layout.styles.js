import styled from "styled-components"

/*
  CT CT SD
  CT CT SD
  FT FT FS
*/
export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 10vw 70vw auto;
  grid-template-rows: 15vh 75vh auto;
  grid-template-areas:
    "CT CT SD"
    "CT CT SD"
    "FT FT FS";
  height: 100vh;

  background-color: var(--primary);
`

export const ContentContainer = styled.div`
  grid-area: CT;
  display: flex;
  align-items: center;
  font-family: "muli", sans-serif;
  font-size: 40px;
  color: var(--secondary);
`
