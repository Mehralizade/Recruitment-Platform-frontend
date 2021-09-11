import React from "react";
import Researcher_Profile from "./components/Researcher_Profile";

export default function MyExperiments(props) {
    return (
        <div className = 'my-experiments'>

            <Researcher_Profile />
            
            <hr />

            <div className = 'card_list_wrapper'>
                {props.experimentList}
            </div>

        </div>
    );
}