import React, { Component } from "react";
import logo from './logo.svg';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            type: this.props.type,
            datetime: this.props.datetime,
            rewardeffort: this.props.rewardeffort
        }
    }
    render() {  
        return (
            <div className = 'card_wrapper'>
                <img src = {logo} width = "100px" height = "100px" />
                <div className = 'in_card_wrapper'>
                    <h5 className = 'cardHeaders'>{this.state.title}</h5>
                    <hr></hr>
                    <h7 className = 'cardHeaders'>{this.state.type}</h7>
                    <h7 className = 'cardHeaders'>{this.state.datetime}</h7>
                    <h7 className = 'cardHeaders'>{this.state.rewardeffort}</h7>
                    <hr></hr>
                    <div className="progress" style = {{height: '10px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        );
    }
}