import styled from 'styled-components';

export const SideNavContainer = styled('aside')`
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: start;
    width: 220px;
    padding: 0 1rem;
`;

// export const FixedItems = styled('div')`
//     margin-bottom: 1.6rem;
// `;

// export const CustomItems = styled('div')`
//     border-top: 1px solid black;
// `;

export const SideNavList = styled('ul')`
    padding: 0;
    width: 100%;
`;

export const NavListItem = styled('li')`
    align-items: center;
    margin-bottom: 5px;
    display: flex;
    flex-grow: 1;
    text-align: left;
    border-radius: 12px;
    padding: 12px 16px;

    &:hover {
        color: rgb(94, 53, 177);
        background-color: rgb(237, 231, 246);
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
