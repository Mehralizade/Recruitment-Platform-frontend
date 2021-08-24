import React, { Component } from "react";
import CardList from "./cardList.component";

export default class MainPage extends Component {
    render() { 
        return (
            <div className = 'main_page_wrapper'>
                <CardList />
                <div className = 'details_box'>

                </div>
            </div>
        );
    }
}