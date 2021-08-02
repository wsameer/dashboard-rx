import React from 'react';
import * as Styled from './Main.styled';

export const Main: React.FC<Props> & WithStyle = props => {
    return (
        <Styled.Main {...props}>
            {props.isLoading && (
                <Styled.Loader>
                    <CircleLoader />
                </Styled.Loader>
            )}
            {props.children}
        </Styled.Main>
    );
};

Main.displayName = 'Main';
Main.Style = Styled.Main;
