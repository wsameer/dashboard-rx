import React from 'react';
import { Home, Trash2 } from 'react-feather';
import * as Styled from './SideNav.styled';

export const SideNav: React.FC = () => {
    return (
        <Styled.SideNavContainer>
            <Styled.SideNavList>
                <Styled.NavListItem>
                    <Styled.NavListItemIcon>
                        <Home size="18" />
                    </Styled.NavListItemIcon>
                    <Styled.NavListItemText>
                        <span>Home</span>
                    </Styled.NavListItemText>
                </Styled.NavListItem>
                <Styled.NavListItem>
                    <Styled.NavListItemIcon>
                        <Trash2 size="18" />
                    </Styled.NavListItemIcon>
                    <Styled.NavListItemText>
                        <span>Trash</span>
                    </Styled.NavListItemText>
                </Styled.NavListItem>
            </Styled.SideNavList>
        </Styled.SideNavContainer>
    );
};
