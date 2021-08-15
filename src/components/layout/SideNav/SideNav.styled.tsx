import styled from 'styled-components';
import theme from '@theme';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const SideNavContainer = styled('aside')`
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: start;
    width: 220px;
    padding: 0 1rem;
`;

export const SideNavList = styled('ul')`
    padding: 0;
    width: 100%;
`;

export const NavListItem = styled('li')`
    align-items: center;
    margin-bottom: 5px;
    display: flex;
    flex-grow: 1;

    &:hover {
        color: ${theme.sidenav.activeText};
    }
`;

export const NavListItemIcon = styled('div')`
    display: inline-flex;
    min-width: 26px;
`;

export const NavListItemText = styled('div')`
    flex: 1 1 auto;
    min-width: 0px;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.334em;
`;

export const NavLink = styled(RouterNavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    text-align: left;
    border-radius: 12px;
    padding: 12px 16px;
    color: ${theme.sidenav.text};

    &.${props => props.activeClassName} {
        color: ${theme.sidenav.activeText};
        background-color: ${theme.sidenav.activeBackground};
    }
`;
