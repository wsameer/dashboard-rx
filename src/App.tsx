import { PageLayout } from '@components/layout';
import theme from '@theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <PageLayout></PageLayout>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
