import type { HTMLProps } from 'react';

export type FontWeights = 'Light' | 'Regular' | 'Medium' | 'Strong' | 'ExtraStrong';

type FontSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface TextProps extends HTMLProps<HTMLElement> {
    fontSize?: FontSizes;
    fontWeight?: FontWeights;
    textColor?: string;
}
