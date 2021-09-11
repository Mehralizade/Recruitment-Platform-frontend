import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: props.type
        }
    }
    render() {
        return (
            <form>
                <h3>{this.state.type} Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Bank account number</label>
                    <input type="email" className="form-control" placeholder="Enter bank account number" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirm password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
            </form>
        );
    }
}