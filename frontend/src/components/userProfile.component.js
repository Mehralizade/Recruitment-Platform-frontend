import React, { Component } from "react";
import profile from './profilepic.png';

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
                 <div className="col-md-12">
            <div className="card user-card">
                <div className="card-header">
                    <h5>Profile</h5>
                </div>
                <div className="card-block">
                    <div className="user-image">
                        <img src={profile} className="img-radius" alt="User-Profile-Image" />
                    </div>
                    <h6 className="f-w-600 m-t-25 m-b-10">Alessa Robert</h6>
                    <p class="text-muted">Active | Male | Born 23.05.1992</p>
                    <hr></hr>
                   </div>
                    
            </div>
        </div>

            </div>
        );
    }
}