import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default class Choice extends Component {
    render() {
        return (
            <div className = 'choice-outer-wrapper'>
                <BrowserRouter>
                    <div className = 'choice-wrapper'>
                        <h1>What do you want to do?</h1>
                        <div className = 'choice-link-left' to = "/login-Researcher">
                            <button type="submit" className="custom btn btn-primary btn-block"><a style={{color:'white'}} href='http://localhost:3000/login-researcher'>Recruit participants</a> </button>
                        </div>
                        <div className = 'choice-link-right' to = "/login-Researcher">
                            <button type="submit" className="custom btn btn-primary btn-block"><a style={{color:'white'}} href='http://localhost:3000/login-participant'>Join experiments</a> </button>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}