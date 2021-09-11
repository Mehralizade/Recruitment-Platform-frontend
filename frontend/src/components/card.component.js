import React, { Component } from "react";
import logo from './logo.svg';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            type: this.props.exp_type,
            datetime: this.props.datetime,
            rewardeffort: this.props.rewardeffort,
            location: this.props.location,
            time: this.props.time, 
        }
    }
    render() {  
        return (
        
           
               <div className="card mb-1" style={{maxWidth: '540px;', border:'1px gray solid'}}>
  <div className="row g-0">
    <div className="col-md-4">
                <img src = {logo} width = "100px" height = "100px" />
                </div>
                <div className ='col-md-8'>
                <div className = 'in_card_wrapper'>
                    <h5 style={{textAlign:'left'}}>{this.state.title}</h5>
                    <hr></hr>
                    <h6 className = 'cardHeaders' style={{textAlign:'left', color:'black'}}>Type: {this.state.type}</h6>
                    <h6 className = 'cardHeaders' style={{textAlign:'left', color:'black'}}>Date: {this.state.datetime}</h6>
                    <h6 className = 'cardHeaders' style={{textAlign:'left', color:'black'}}>Time: {this.state.time}</h6>
                    <h6 className = 'cardHeaders' style={{textAlign:'left', color:'black'}}>Location: {this.state.location}</h6>
                    <h6 className = 'cardHeaders' style={{textAlign:'left', color:'black'}}>Reward: {this.state.rewardeffort} Won</h6>
                    <hr></hr>
                    <div className="progress" style = {{height: '10px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
          
            
        );
    }
}