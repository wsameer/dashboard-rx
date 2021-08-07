import { PageLayout } from '@components/layout';
import theme from '@theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '@routes/Routes';
import { Header } from '@components/layout/Header/Header';
import { GlobalStyle } from '@utils/styles';
import { SideNav } from '@components/layout/SideNav/SideNav';
import FontStyles from '@theme/fonts/fonts';

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <FontStyles />
                <GlobalStyle />
                <Router>
                    <PageLayout>
                        <Header />
                        <SideNav />
                        <Routes />
                    </PageLayout>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
