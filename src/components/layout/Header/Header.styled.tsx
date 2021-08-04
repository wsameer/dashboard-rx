import styled from 'styled-components';

export const HeaderContainer = styled(`header`)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

export const SearchBar = styled('div')`
    display: flex;
`;

export const ActionButtons = styled('ul')`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
`;

export const HeaderItem = styled('li')`
    padding: 0 1em;
`;
