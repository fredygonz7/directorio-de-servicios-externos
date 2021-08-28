import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { DirectoryListScreen } from '../components/directory/DirectoryListScreen';
import DirectoryScreen from '../components/directory/DirectoryScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={DirectoryListScreen}>
                        {/* {DirectoryScreen} */}
                    </Route>

                    <Route exact path="/register" component={DirectoryScreen}>
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