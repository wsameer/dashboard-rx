import { PageLayout } from '@components/layout';
import theme from '@theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '@routes/Routes';
import { Header } from '@components/layout/Header/Header';
import { GlobalStyle } from '@utils/styles';

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Router>
                    <PageLayout>
                        <Header />
                        <Routes />
                    </PageLayout>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
