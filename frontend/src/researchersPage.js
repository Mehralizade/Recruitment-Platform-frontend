import React from "react";
import MyExperiments from "./myExperiments";
import ExperimentDetails from "./components/experimentDetails.component";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Research_Summary from "./components/Research_Summary";
import Card from './components/card.component';

export default function ResearchersPage(props) {
    const numbers = [0, 1, 2, 3];
    const experimentList = numbers.map(
        (number) =>
        <Link to = {'/experiment' + number}>
            <Card title = {'Experiment' + number} />
        </Link>
    )
    const routeList = numbers.map(
        (number) =>
        <Route path = {'/experiment'+ number} render = {() => <Research_Summary />} />
    )
    return (
        <div className = 'researchers-page'>
            <BrowserRouter>

                <Switch>
                    <Route exact path = '/' render = {() => <MyExperiments experimentList = {experimentList}/>} />
                    {routeList}
                </Switch>

            </BrowserRouter>
        </div>
    );
}