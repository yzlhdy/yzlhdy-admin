import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
      margin:0;
      padding:0;
    }
    html,body,#root{
        max-height:100vh;
        max-width:100vw;

        height:100%;
        width:100%;
        box-sizing:border-box;

    }
   
    :root{
    --primary: #06d6a0;
    --secondary: #ffd166;
    --search: #ef476f;
    --white: #fff;
    --gray: #118ab2;
    --outline: #073b4c;
    }

`