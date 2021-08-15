type ButtonTheme = {
    primary: string;
    secondary: string;
};

export type AppTheme = {
    background: string;
    text: string;
    headerText: string;
    button: ButtonTheme;
    sidenav: {
        text: string;
        activeText: string;
        activeBackground: string;
    };
};

export const light: AppTheme = {
    background: '#f6f7fa',
    text: '#424661',
    headerText: '#fff',
    button: {
        primary: '#f28b54',
        secondary: '#3a3a47'
    },
    sidenav: {
        text: '#424661',
        activeText: '#fff',
        activeBackground: '#e44332'
    }
};

export const dark: AppTheme = {
    background: '#3a3a47',
    text: '#f6f7fa',
    headerText: '#fff',
    button: {
        primary: '#f28b54',
        secondary: '#f6f7fa'
    },
    sidenav: {
        text: '#424661',
        activeText: '#fff',
        activeBackground: '#e44332'
    }
};

const theme = light;
export default theme;
