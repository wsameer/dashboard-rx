import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Notes = lazy(() => import('@pages/Notes'));
const Trash = lazy(() => import('@pages/Trash'));

export const Routes: React.FC = () => {
    return (
        <Suspense fallback={<span>Loading ...</span>}>
            <Switch>
                <Route path="/" exact component={Notes} />
                <Route path="/trash" exact component={Trash} />
            </Switch>
        </Suspense>
    );
};
