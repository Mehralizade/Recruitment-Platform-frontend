import React, { Component } from "react";
import Research_Announcement_Detail from "./Research_Announcement_Detail";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import LongCardList from './longCardList.component';
import UserDetails from "./userDetails.component";

export default class MainPage extends Component {
    render() { 
        return (
            <div className = 'mypage_wrapper'>
                <UserDetails />
                <hr />
                <div ClassName = 'mypage_inner_wrapper'>
                    <LongCardList />
                    <div className = 'details_box'>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path = '/' render = {() => <Research_Announcement_Detail type = 'null' reward = 'null' date = 'null' time = 'null' location = 'null' description = 'null' dataCollected = 'null' applicantNumber = 'null' additionalInfo = 'null'/>} />
                                <Route path = '/details1' render = {() => <Research_Announcement_Detail type = '1' reward = 'null' date = 'null' time = 'null' location = 'null' description = 'null' dataCollected = 'null' applicantNumber = 'null' additionalInfo = 'null'/>} />
                                <Route path = '/details2' render = {() => <Research_Announcement_Detail type = '2' reward = 'null' date = 'null' time = 'null' location = 'null' description = 'null' dataCollected = 'null' applicantNumber = 'null' additionalInfo = 'null'/>} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        );
    }
}