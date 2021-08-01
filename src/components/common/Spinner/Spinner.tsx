import React from 'react';
import * as Styled from './Spinner.styled';

export const Spinner: React.FC = React.memo(() => {
    return (
        <Styled.Spinner viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
        </Styled.Spinner>
    );
});
