import React, { Component } from "react";

export default class UserDetails extends Component {
    render() {
        return (
            <div className = 'user-details-wrapper'>

                <div>
                    Name
                </div>

                <div>
                    Age
                </div>

                <div>
                    Gender
                </div>

                <div>
                    Reputation
                </div>

            </div>
        );
    }
}