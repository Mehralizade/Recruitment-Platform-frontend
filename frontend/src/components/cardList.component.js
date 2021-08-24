import React, { Component } from "react";
import logo from './logo.svg';
import Card from "./card.component";

export default class CardList extends Component {
    render() { 
        const numbers = [1, 2, 3, 4, 5, 6 ,7];
        const listItems = numbers.map((number) =>
            <div>
            <Card title = "IC Lab Experiment" type = "Questionarre" datetime = "null" rewardeffort = "null"/>
                <div className = 'horizontal_divider'/>
            </div>
        ); 
        return (
            <div className = 'card_list_wrapper'>
                {listItems}
            </div>
        );
    }
}