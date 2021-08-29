import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { DirectoryListScreen } from '../components/directory/DirectoryListScreen';
import DirectoryRegisterScreen from '../components/directory/DirectoryRegisterScreen';
import { LoginScreen } from '../components/auth/LoginScreen';

import AuthRouter from './AuthRouter';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                <Route
                        exact
                        path="/"
                        component={LoginScreen}>
                        {/* {DirectoryScreen} */}
                    </Route>

                    <Route
                        exact
                        path="/directorio"
                        component={DirectoryListScreen}>
                        {/* {DirectoryScreen} */}
                    </Route>

                    <Route exact path="/register" component={DirectoryRegisterScreen}>
                        {/* {DirectoryScreen} */}
                    </Route>

                    <Route path="/auth"
                        component={AuthRouter}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
export { AppRouter };