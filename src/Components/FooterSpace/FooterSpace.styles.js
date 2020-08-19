import styled from "styled-components"

import {
  LinkedinWithCircle,
  GithubWithCircle,
} from "styled-icons/entypo-social"

export const FooterSpaceContainer = styled.div`
  grid-area: FS;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`

export const GithubIcon = styled(GithubWithCircle)`
  width: 40px;
  height: 40px;
  margin: 5px;

  cursor: pointer;

  color: var(--symbol);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`

export const LinkedinIcon = styled(LinkedinWithCircle)`
  width: 40px;
  height: 40px;
  margin: 5px;

  cursor: pointer;

  color: var(--symbol);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`
