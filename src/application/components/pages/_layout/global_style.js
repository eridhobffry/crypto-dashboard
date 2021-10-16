import { createGlobalStyle } from 'styled-components'
import 'application/styles/normalize.css'

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: ${p => p.theme.color.body};
        color: ${p => p.theme.color.text};
    }
    #root {
        display: flex;
    }
    div {
        box-sizing: border-box;
    }
    * {
        font-family: 'Lato', sans-serif;
    }
    ::-webkit-scrollbar {
    width: 8px;
    }
    ::-webkit-scrollbar-track {
    background: transparent #cecece ;
    }
    ::-webkit-scrollbar-thumb {
    background-color:  #cecece ;
    border-radius: 10px;
    border: 2px solid #cecece;
    }
`