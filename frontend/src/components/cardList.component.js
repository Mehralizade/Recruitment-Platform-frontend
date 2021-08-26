import React, { Component, useState, useEffect } from "react";
import logo from './logo.svg';
import Card from "./card.component";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
function CardList(props) {
    
    
        const [announcements, SetAnnouncements] = useState([])
        
        useEffect(() => {
            fetch("http://127.0.0.1:8000/api/posts/")
            .then(response => response.json())
            .then(data => SetAnnouncements(data))
          },[])
        const listItems = announcements.map((announcement) =>
            <Link to = {'/details/'+announcement.id}>
                <div>
                    <Card title = {announcement.title} type = {announcement.type} datetime = {announcement.date} 
                    rewardeffort = {announcement.reward}/>
                    <div className = 'horizontal_divider'/>
                </div>
            </Link>
        ); 
        return (
            <div className = 'card_list_wrapper'>
                <BrowserRouter>
                    {listItems}
                </BrowserRouter>
            </div>
        );
    
}
export default CardList