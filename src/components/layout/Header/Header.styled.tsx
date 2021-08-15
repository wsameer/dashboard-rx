import theme from '@theme';
import styled from 'styled-components';

export const HeaderContainer = styled(`header`)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    left: auto;
    background-color: #e44332;
    min-height: 48px;
    align-items: center;
    padding: 0 2rem;
`;

export const FixedDiv = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const RightSide = styled('div')`
    display: flex;
`;
export const LeftSide = styled('div')`
    width: 220px;
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
    color: ${theme.headerText}
`;
