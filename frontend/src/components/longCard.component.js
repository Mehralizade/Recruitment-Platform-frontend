import React, { Component } from "react";
import logo from './logo.svg';
import Status from "./status.component";

export default class LongCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    render() {  
        return (
            <div className = 'long_card_wrapper'>
                <img src = {logo} width = "50px" height = "50px" className = 'flex-items'/>
                <div className = 'flex-items'>
                    {this.state.name}
                </div>
                <Status />
            </div>
        );
    }
}