import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        // variaveis de cor usadas em todo react app
        --background: #F0F2F5;
        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933ff;

        --text-title: #363F5F;
        --text-body: #969CB2;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        /* default 16px, media usado para diminuir responsivamente os tamanhos */
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased; // fonte mais nitida
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    
    button {
        cursor: pointer;
    }

    // quando algum button estiver inativo
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
