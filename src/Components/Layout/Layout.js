import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import Footer from "../Footer/Footer"
import FooterSpace from "../FooterSpace/FooterSpace"
import { LayoutContainer, ContentContainer } from "./Layout.styles"
import GlobalStyle from "../../styles/globalStyles.js"
import config from "../../../data/config"
import Helmet from "react-helmet"
import "typeface-muli"

const Layout = props => {
  return (
    <LayoutContainer>
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
      </Helmet>
      <GlobalStyle />
      <Sidebar />
      <ContentContainer>{props.children}</ContentContainer>
      <Footer />
      <FooterSpace />
    </LayoutContainer>
  )
}

export default Layout
