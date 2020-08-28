import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;

  font-weight: bold;
  color: var(--secondary);
  font-family: "Mulish", sans-serif;
  max-height: 100%;
  h1 {
    padding: 3%;
  }

  .developer {
    color: var(--white);
  }
  .design {
    color: var(--tertiary);
  }
`
