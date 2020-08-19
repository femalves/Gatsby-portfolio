import styled from "styled-components"

export const ContentContainer = styled.div`
  grid-area: CT;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
