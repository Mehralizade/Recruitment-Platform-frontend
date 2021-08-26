import React, { Component, useState, useEffect, } from "react";
import CardList from "./cardList.component";
import Research_Announcement_Detail from "./Research_Announcement_Detail";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
 
function BulletinBoard(props) {

    const [bulletinAnnouncements, SetBulletinAnnouncements] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
        .then(response => response.json())
        .then(data => SetBulletinAnnouncements(data))
      },[])
    
    return (
        <div className = 'main_page_wrapper'>
            
            <CardList />
           
            <div className = 'container'>
           { bulletinAnnouncements.map((announcement)=>{<BrowserRouter>
          
       <Route path={'/details/1'}><Research_Announcement_Detail title={announcement.title}/></Route>
       
         </BrowserRouter> })}
          
         
            </div>
        </div>
    )
}

export default BulletinBoard