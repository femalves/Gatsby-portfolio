import styled from "styled-components"

/*
  CT CT SD
  CT CT SD
  FT FT FS
*/
export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 10vw 70vw 20vw;
  grid-template-rows: 15vh 75vh auto;
  grid-template-areas:
    "CT CT SD"
    "CT CT SD"
    "FT FT FS";
  height: 100vh;
  width: 100vw;

  background-color: var(--primary);
`

export const ContentContainer = styled.div`
  grid-area: CT;
  display: flex;
  font-size: 3vw;
  align-items: center;
  font-family: "muli", sans-serif;
  color: var(--secondary);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`
