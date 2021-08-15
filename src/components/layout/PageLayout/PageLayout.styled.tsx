import styled from 'styled-components';

export const PageLayoutContainer = styled('div')`
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-areas:
        'header header'
        'aside  main';
    grid-template-rows: max-content auto;
    grid-template-columns: auto 1fr;

    & > aside {
        grid-area: aside;
    }

    & > header {
        grid-area: header;
    }

    & > main {
        grid-area: main;
        transition: width 200ms;
        padding: 1rem;
    }
`;
