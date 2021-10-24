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
          console.log(announcements)
          const initial = announcements[0]
          console.log(initial)
          const routeList = announcements.map(
            (post) =>
            <Route path = {'/login-researcher'+ post.id} render = {() => <Research_Announcement_Detail
                data={post} id={post.id} time={post.time} title={post.title} type={post.exp_type}
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
                    <Card title = {announcement.title} type = {announcement.exp_type} 
                    datetime = {announcement.date} location={announcement.location}
                    app_count={announcement.applicants.length}
                    description={announcement.description} time={announcement.time}
                    rewardeffort = {announcement.reward}
                    participant_number={announcement.participant_number}/>
                    
                </div>
                
            </Link>)}
           </div>
                
                </div>
                
                   <Switch>
                
                   <div className='col'>
                       <div className='row'>
                 {routeList}
                 </div>
                 </div>
                       </Switch>
               </div>
           </div>
           
           </BrowserRouter>
           
        );
    }



export default CardList