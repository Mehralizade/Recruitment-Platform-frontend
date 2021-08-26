import React, { Component, useState, useEffect, } from "react";
import UserProfile from "./userProfile.component";

export default function MyPage(props) {
    const [toggle, setToggle] = useState(0);
    const toggle0 = () => setToggle(toggle => 0);
    const toggle1 = () => setToggle(toggle => 1);
    const toggle2 = () => setToggle(toggle => 2);
    return (
        <div className = 'my-page'>
            <UserProfile />

            <hr />


            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="nav-link" onClick = {toggle0}>
                                Applied
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick = {toggle1}>
                                Accepted
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick = {toggle2}>
                                Rejected
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <hr />

            {toggle == 0 && 'Applied'}
            {toggle == 1 && 'Accepted'}
            {toggle == 2 && 'Rejected'}

        </div>
    );
}