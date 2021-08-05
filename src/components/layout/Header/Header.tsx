import React, { useState } from 'react';
import { Bell, Moon, Settings, Sun } from 'react-feather';
import * as Styled from './Header.styled';

export const Header: React.FC = React.memo(() => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    return (
        <Styled.HeaderContainer>
            <Styled.LeftSide>
                <img src="brand.png" alt="brand logo" height="36" />
            </Styled.LeftSide>
            <Styled.RightSide>
                <Styled.ActionButtons>
                    <Styled.HeaderItem>{darkTheme ? <Moon size="20" /> : <Sun size="20" />}</Styled.HeaderItem>
                    <Styled.HeaderItem>
                        <Bell size="20" />
                    </Styled.HeaderItem>
                    <Styled.HeaderItem>
                        <Settings size="20" />
                    </Styled.HeaderItem>
                </Styled.ActionButtons>
            </Styled.RightSide>
        </Styled.HeaderContainer>
    );
});

Header.displayName = 'Header';
