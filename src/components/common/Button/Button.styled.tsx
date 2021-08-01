import styled from 'styled-components';
import type { ButtonProps } from './types';

export const StyledButton = styled('button')<ButtonProps>`
    border: none;
    position: relative;
    user-select: none;
    font-family: inherit;
    text-decoration: none;
    transition: all 100ms ease-out;
    padding: 1.6rem;
    width: ${({ fullWidth }) => fullWidth && '100%'};
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
