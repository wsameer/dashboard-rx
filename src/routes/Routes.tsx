import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('@pages/Dashboard'));
const Trash = lazy(() => import('@pages/Trash'));

export const Routes: React.FC = () => {
    return (
        <Suspense fallback={<span>Loading ...</span>}>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/trash" exact component={Trash} />
            </Switch>
        </Suspense>
    );
};
