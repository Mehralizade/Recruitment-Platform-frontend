import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default class Choice extends Component {
    render() {
        return (
            <div className = 'choice-outer-wrapper'>
                <BrowserRouter>
                    <div className = 'choice-wrapper'>
                        <Link className = 'choice-link-left' to = "/login-Researcher">
                            <button type="submit" className="custom btn btn-primary btn-block">Recruit participants</button>
                        </Link>
                        <h1>What do you want to do?</h1>
                        <Link className = 'choice-link-right' to = "/login-Participant">
                            <button type="submit" className="custom btn btn-primary btn-block">Join experiments</button>
                        </Link>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}