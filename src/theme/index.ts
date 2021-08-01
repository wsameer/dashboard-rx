export type ThemeType = typeof light;

export const light = {
    background: '#f6f7fa',
    text: '#424661',
    button: {
        primary: '#c04808',
        secondary: '#3a3a47'
    }
};

export const dark: ThemeType = {
    background: '#3a3a47',
    text: '#f6f7fa',
    button: {
        primary: '#c04808',
        secondary: '#f6f7fa'
    }
};

const theme = light;
export default theme;
