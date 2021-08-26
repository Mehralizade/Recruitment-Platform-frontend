import React, { Component, useState, useEffect, } from "react";
import Researcher_Profile from "./components/Researcher_Profile";

export default function MyExperiments(props) {
    return (
        <div className = 'my-experiments'>

            <Researcher_Profile />
            
            <hr />

            {props.experimentList}

        </div>
    );
}