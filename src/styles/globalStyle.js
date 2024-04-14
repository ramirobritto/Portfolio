import { createGlobalStyle } from "styled-components";
import img from '../assets/background.jpg'

 const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        
        background-image: url(${img});
        background-size: cover;
        font-family: Helvetica, sans-serif;
        
        
        
    }
    li{
        list-style: none;
    }
`
export default GlobalStyle