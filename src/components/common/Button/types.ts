export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    as?: any;
    to?: string;
    variant?: 'solid' | 'outlined';
    disabled?: boolean;
    type?: 'button' | 'reset' | 'submit';
    fullWidth?: boolean;
}
