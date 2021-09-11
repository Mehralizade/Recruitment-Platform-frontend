import React, { Component } from "react";

export default class ExperimentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
    }
    render() {
        return (
            <div className = 'experiment-details-wrapper'>

                <div>
                    {this.state.title}
                </div>

            </div>
        );
    }
}