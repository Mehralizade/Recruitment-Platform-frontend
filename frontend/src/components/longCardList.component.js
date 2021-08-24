import React, { Component } from "react";
import logo from './logo.svg';
import LongCard from "./longCard.component";

export default class LongCardList extends Component {
    render() { 
        const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11, 12, 13];
        const listItems = numbers.map((number) =>
            <div>
            <LongCard name = "IC Lab Experiment"/>
                <div className = 'horizontal_divider'/>
            </div>
        ); 
        return (
            <div className = 'long_card_list_wrapper'>
                {listItems}
            </div>
        );
    }
}