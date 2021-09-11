import React, { Component } from "react";
 
export default class UserDetails extends Component {
    

        constructor(props){
            super(props);
            this.state = {
                name: this.props.name,
                age: this.props.age,
                gender: this.props.gender,
                
            }
        }
        render() {
        return (
            <div className = 'user-details-wrapper'>
 
                <div>
                    {this.state.name}
                </div>
 
                <div>
                    {this.state.age}
                </div>
 
                <div>
                    {this.state.gender}
                </div>
 
                <div>
                    Reputation
                </div>
 
            </div>
        );
    }
}