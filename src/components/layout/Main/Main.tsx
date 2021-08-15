import { Spinner } from '@components/common';
import type { WithStyle } from '@utils';
import React from 'react';
import * as Styled from './Main.styled';
import type { MainProps } from './types';

export const Main: React.FC<MainProps> & WithStyle = props => {
    return (
        <Styled.MainContainer {...props}>
            {props.isLoading ? <Spinner /> : props.children}
        </Styled.MainContainer>
    );
};

Main.defaultProps = {
    isLoading: false
};

Main.displayName = 'Main';
Main.Style = Styled.MainContainer;
