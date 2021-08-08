import React from 'react';
import type { TextProps } from './types';

export const Text: React.FC<TextProps> = React.memo(
    React.forwardRef(({ children, ...restProps }, ref) => {
        return (
            <StyledText {...restProps} ref={ref} >
                {children}
            </StyledText>
        );
    })
);
