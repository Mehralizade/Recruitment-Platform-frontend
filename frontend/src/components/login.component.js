import React, { Component } from "react";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: props.type
        }
    }
    render() {
        return (
            <form>
                <h3>{this.state.type} Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
               
            </form>
        );
    }
}