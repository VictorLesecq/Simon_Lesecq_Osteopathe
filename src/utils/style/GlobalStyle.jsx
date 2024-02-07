import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root{
        display:flex;
        flex-direction:column;
        min-height:100vh;
    }
    .pointer:hover{
        cursor:pointer
    }
    .container--80vw {
        max-width: 80vw;
        margin-inline: auto;
   }
   .nowrap {
        white-space: nowrap;
    }
`;

function GlobalStyle() {
     return <StyledGlobalStyle />;
}

export default GlobalStyle;
