import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }
    main {
        display: block;
    }
`;
