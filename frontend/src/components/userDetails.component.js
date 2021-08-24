import React, { Component } from "react";
import pfp from './default.jpg'

export default class UserDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            age: this.props.age,
            bankacc: this.props.bankacc,
            rep: this.props.rep
        }
    }
    render() { 
        return (
            <div className = 'user_details_wrapper'>
                <img src = {pfp} /> 
                <div className = 'details_box'>
                    <h3 className = 'details_headers'>{this.state.name}</h3>
                    <hr />
                    <h3 className = 'details_headers'>{this.state.age}</h3>
                    <hr />
                    <h3 className = 'details_headers'>{this.state.bankacc}</h3>
                    <hr />
                    <h3 className = 'details_headers'>{this.state.rep}</h3>
                </div>
            </div>
        );
    }
}