type ButtonTheme = {
    primary: string;
    secondary: string;
};

export type AppTheme = {
    background: string;
    text: string;
    button: ButtonTheme;
};

export const light: AppTheme = {
    background: '#f6f7fa',
    text: '#424661',
    button: {
        primary: '#f28b54',
        secondary: '#3a3a47'
    }
};

export const dark: AppTheme = {
    background: '#3a3a47',
    text: '#f6f7fa',
    button: {
        primary: '#f28b54',
        secondary: '#f6f7fa'
    }
};

const theme = light;
export default theme;
