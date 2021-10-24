import React from "react";
import Researcher_Profile from "./Researcher_Profile";

export default function MyExperiments(props) {
    return (
        <div className = 'my-experiments' style={{marginBottom:'25%'}}>

            <Researcher_Profile />
            
            

            <div className = 'card_list_wrapper2'>
                <h5>My Experiments</h5>
                <hr />
                {props.experimentList}
            </div>

        </div>
    );
}