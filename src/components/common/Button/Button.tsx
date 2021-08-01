import React from 'react';
import type { ButtonProps } from './types';
import { StyledButton } from './Button.styled';
import type { WithStyle } from '@utils';

export const Button: React.FC<ButtonProps> & WithStyle = React.memo(
    React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
        return (
            <button ref={ref} {...props}>
                {React.Children.map(props.children, c => c)}
            </button>
        );
    })
);

Button.defaultProps = {
    type: 'button',
    variant: 'solid',
    disabled: false,
    fullWidth: false
};

Button.displayName = 'Button';
Button.Style = StyledButton;
