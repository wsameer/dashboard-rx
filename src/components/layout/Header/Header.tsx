import React, { useState } from 'react';
import { Bell, Moon, Settings, Sun } from 'react-feather';
import { HeaderContainer, SearchBar, ActionButtons, HeaderItem } from './Header.styled';

export const Header: React.FC = React.memo(() => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    return (
        <HeaderContainer>
            <SearchBar>
                <img src="brand.png" alt="brand logo" height="36" />
                <input placeholder="search" />
            </SearchBar>
            <ActionButtons>
                <HeaderItem>
                    {darkTheme ? <Moon /> : <Sun />}
                </HeaderItem>
                <HeaderItem>
                    <Bell />
                </HeaderItem>
                <HeaderItem>
                    <Settings />
                </HeaderItem>
            </ActionButtons>
        </HeaderContainer>
    );
});

Header.displayName = 'Header';
