import React, { Component, useState, useEffect, } from "react";
import CardList from "./cardList.component";
import Research_Announcement_Detail from "./Research_Announcement_Detail";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Filter from "./Filter";
function BulletinBoard(props) {

    const [bulletinAnnouncements, SetBulletinAnnouncements] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
        .then(response => response.json())
        .then(data => SetBulletinAnnouncements(data))
      },[])
      
    
    
    return (
      <div>
        <BrowserRouter><nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
      <Link className="navbar-brand" to={"/login-" + props.type}>NoARA</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link" to={"/login-" + props.type}>Login</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to={"/signup-" + props.type}>Sign up</Link>
          </li>
          </ul>
      </div>
      </div>
  </nav>
  </BrowserRouter>
        <div className = 'main_page_wrapper'>
            
            <CardList />
           
            <div className = 'detail_box'>
               
           
         <div className='container' style={{marginTop:'18%', width:'100%', marginRight:'80%'}}>
       <Research_Announcement_Detail type={'Questionnaire'}  location={'N4'}
       applicantNumber={44} date={'2022-04-25'} time={'09:00'} dataCollected={'Some info'}
        description={'Lorem ipsum dolor sit amet, aliquip ex ea commodo in. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} title={'Social Science Experiment'} reward={'2500 Won'}/>
       </div> 
         
          
         
            </div>
        </div>
        </div>
    )
}

export default BulletinBoard