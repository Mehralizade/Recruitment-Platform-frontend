import React, { Component, useState, useEffect } from "react";
import logo from './logo.svg';
import Card from "./card.component";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Filter from "./Filter";
function CardList(props) {
    const [toggle, setToggle] = useState(0)
    const [FilterPosts, setFilterPosts] = useState([])
    function dataHandler(posts){
        setFilterPosts(posts)
        setToggle(1)
        console.log(FilterPosts)
    }
    
        const [announcements, SetAnnouncements] = useState([])
        
        useEffect(() => {
            fetch("http://127.0.0.1:8000/api/posts/")
            .then(response => response.json())
            .then(data => SetAnnouncements(data))
          },[])
          
        const listItems = announcements.map((announcement) =>
            <Link to = {'/details/'+announcement.id}>
                
                    <Card title = {announcement.title} type = {announcement.exp_type} datetime = {announcement.date} 
                    time={announcement.time} location={announcement.location} rewardeffort = {announcement.reward}/>
                    
                
            </Link>
        ); 
        const FilterItems = FilterPosts.map((announcement) =>
        <Link to = {'/details/'+announcement.id}>
           
                    <Card title = {announcement.title} type = {announcement.exp_type} datetime = {announcement.date} 
                    time={announcement.time} location={announcement.location} rewardeffort = {announcement.reward}/>
                    
               
        </Link>
    ); 
        return (
            <div className='container' style={{marginTop:'5%'}}>
            <Filter data={dataHandler} />
            <div className = 'card_list_wrapper' >
                <div className='container'>
                   
                
                </div>
                <BrowserRouter>
                
              {toggle==1 && FilterItems}
              {toggle==0 && listItems}
            
                </BrowserRouter>
            </div>
            </div>
        );
    
}
export default CardList