import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import Footer from "../Footer/Footer"
import FooterSpace from "../FooterSpace/FooterSpace"
import { LayoutContainer, ContentContainer } from "./Layout.styles"
import GlobalStyle from "../../styles/globalStyles.js"

import "typeface-muli"

const Layout = props => {
  console.log(props)
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Sidebar />
      <ContentContainer>{props.children}</ContentContainer>
      <Footer />
      <FooterSpace />
    </LayoutContainer>
  )
}

export default Layout
