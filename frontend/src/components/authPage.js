import React from "react";
import Login from "./login.component";
import SignUp from "./signup.component";
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";

function AuthPage(props) {
    return (
    <BrowserRouter>
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                <Link className="navbar-brand" to={"/login-" + props.type}>[CLOSED]</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/login-" + props.type}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/signup-" + props.type}>Sign up</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>

            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Switch>
                        
                        <Route path={"/login-" + props.type} render = {() => <Login type = {props.type} />} />
                        <Route path={"/signup-" + props.type} render = {() => <SignUp type = {props.type} />} />
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
    )
}

export default AuthPage;