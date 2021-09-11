    import React from "react";
    import Choice from './choice.component';
    import AuthPage from './authPage';
    import { BrowserRouter, Switch, Route } from 'react-router-dom';

    function ChoicePage() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' render = {() => <Choice />} />
                    <Route path = '/login-Researcher' render = {() => <AuthPage type = 'Researcher' />} />
                    <Route path = '/login-Participant' render = {() => <AuthPage type = 'Participant' />} />
                </Switch>
            </BrowserRouter>
        )
    }

    export default ChoicePage;