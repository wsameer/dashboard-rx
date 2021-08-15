import React from 'react';
import { Home, Trash2 } from 'react-feather';

import * as Styled from './SideNav.styled';

export const SideNav: React.FC = () => {
    return (
        <Styled.SideNavContainer>
            <Styled.SideNavList>
                <Styled.NavListItem>
                    <Styled.NavLink exact to="/" activeClassName="any">
                        <Styled.NavListItemIcon>
                            <Home size="18" />
                        </Styled.NavListItemIcon>
                        <Styled.NavListItemText>
                            <span>Dashboard</span>
                        </Styled.NavListItemText>
                    </Styled.NavLink>
                </Styled.NavListItem>
                <Styled.NavListItem>
                    <Styled.NavLink exact to="/trash" activeClassName="any">
                        <Styled.NavListItemIcon>
                            <Trash2 size="18" />
                        </Styled.NavListItemIcon>
                        <Styled.NavListItemText>
                            <span>Trash</span>
                        </Styled.NavListItemText>
                    </Styled.NavLink>
                </Styled.NavListItem>
                <hr />
            </Styled.SideNavList>
        </Styled.SideNavContainer>
    );
};
