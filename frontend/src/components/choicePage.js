    import React from "react";
    import Choice from './choice.component';
    import AuthPage from './authPage';
    import { BrowserRouter, Switch, Route } from 'react-router-dom';

    function ChoicePage() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' render = {() => <Choice />} />
                    <Route exact path = '/login-Researcher' render = {() => <AuthPage type = 'researcher' />} />
                    <Route exact path = '/login-Participant' render = {() => <AuthPage type = 'participant' />} />
                </Switch>
            </BrowserRouter>
        )
    }

    export default ChoicePage;