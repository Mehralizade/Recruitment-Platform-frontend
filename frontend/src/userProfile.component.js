import React, { Component } from "react";

export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: props.age,
            gender: props.gender,
            bankaccnum: props.bankaccnum,
            imgUrl: 'none'
        }
    }
    render() {
        return (
            <div className = 'user-profile-wrapper'>
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={this.state.imgUrl} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign:'left'}}>Name: {this.state.name}</h5>
                        <p className="card-text" style={{textAlign:'left'}}>Age: {this.state.age}</p>
                        <p className="card-text" style={{textAlign:'left'}}>Gender: {this.state.gender}</p>
                        <p className="card-text" style={{textAlign:'left'}}>Bank Account Number: {this.state.bankaccnum}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}