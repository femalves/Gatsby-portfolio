import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     max-height: 100vh;
 }


 html, body, #root {
    height: 100vh;

}

*, button, input {
    border: 0;
    outline: 0;
}


:root {

    --primary: #36393F;
    --secondary: #A3EEF5;
    --tertiary: #C7FDC4;
    --quaternary: #FA9E9F;
    --symbol: #74777A;
    --white: #FFF;
    --gray: #C4C4C4;
    --gray-background: #CAD4DB;

 }
 `

export default GlobalStyle
