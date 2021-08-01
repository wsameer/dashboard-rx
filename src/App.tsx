import theme from '@theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <h1>Hello Snowpack!</h1>
            </ThemeProvider>
        </>
    );
};

export default App;
