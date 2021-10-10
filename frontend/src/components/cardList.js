import React, { Component, useState, useEffect } from "react";
import logo from './logo.svg';
import Card from "./card.component";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Research_Announcement_Detail from "./Research_Announcement_Detail";

function CardList(props) {


        const [announcements, SetAnnouncements] = useState([])

        useEffect(() => {
            fetch("http://127.0.0.1:8000/api/posts/")
            .then(response => response.json())
            .then(data => SetAnnouncements(data))
          },[])
          const routeList = announcements.map(
            (post) =>
            <Route path = {'/login-researcher'+ post.id} render = {() => <Research_Announcement_Detail
                data={post} id={post.id}  title={post.title} type={post.type}
            reward={post.reward} descripton={post.description} date={post.date} location={post.location} />} />
        )
        return (
            <BrowserRouter>
            <div className='bulletin-container'>
                <div className='row'>
                <div className='col'>
            <div className = 'card_list_wrapper'>

                 {announcements.map((announcement) =>
            <Link to = {'/login-researcher'+announcement.id}>
                <div>
                    <Card title = {announcement.title} type = {announcement.type} datetime = {announcement.date} 
                    rewardeffort = {announcement.reward}/>
                    <div className = 'horizontal_divider'/>
                </div>
                
            </Link>)}
           </div>
                
                </div>
                
                   <Switch>
                 <Route exact  path = '/login-researcher' render = {() => <Research_Announcement_Detail 
                  />} />
                   <div className='col'>
                 {routeList}
                 </div>
                       </Switch>
               </div>
           </div>
           
           </BrowserRouter>
           
        );
    }



export default CardList