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
            app_count: this.props.app_count,
            count_required:this.props.participant_number,
        }
    }
    render() {  
        return (
        
           
              
            <div className="card mb-1" style={{width: '98%'}}>
            <div className="row">
                      <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={logo} /></div>
                      <div className="col-md-6 mt-1">
                          <h5>{this.state.title}</h5>
                         
                          <div className="mt-1 mb-1 spec-1"><span>{this.state.type}</span><span className="dot"></span><span>{this.state.time}</span><span className="dot"></span><span>{this.state.location}<br></br></span></div>
                          <div className="mt-1 mb-1 spec-1"><span></span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br></br></span></div>
                          <div className="progress" style = {{height: '10px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: this.state.app_count}} 
                        aria-valuenow={this.state.app_count} aria-valuemin="0" 
                        aria-valuemax={this.state.required_count}></div>
                    </div>
                      </div>
                      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                          <div className="d-flex flex-row align-items-center">
                              <h4 className="mr-1">{this.state.rewardeffort} Won</h4>
                          </div>
                          
                          <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button></div>
                      </div>
                
                   
                    </div>
                    </div>
                   
          
            
        );
    }
}