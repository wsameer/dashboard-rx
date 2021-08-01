import React, { HTMLProps } from 'react';
import { PageLayoutContainer } from './PageLayout.styled';

export const PageLayout: React.FC<HTMLProps<HTMLDivElement>> = React.memo(({ children }) => (
    <PageLayoutContainer>{children}</PageLayoutContainer>
));

PageLayout.displayName = 'PageLayout';
