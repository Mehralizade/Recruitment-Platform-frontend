import React, { Component, useState, useEffect, } from "react";

import Research_Announcement_Detail from "./Research_Announcement_Detail";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Filter from "./Filter";
import UploadForm from "./UploadForm";
import MyExperiments from "./myExperiments";
import { AuthContext } from "../App";
import Researcher_Profile from "./Researcher_Profile";
import ResearchersPage from  "./researchersPage"
import CardList from "./cardList";
function BulletinBoard(props) {
    const { state: authState } = React.useContext(AuthContext);

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
      <Link className="navbar-brand" to={"/login-" + props.type}>{authState.username}</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
              {!authState.isAuthenticated ?
          <><li className="nav-item">
                                    <Link className="nav-link" to={"/login-" + props.type}>Login</Link>
                                </li><li className="nav-item">
                                        <Link className="nav-link" to={"/signup-" + props.type}>Sign up</Link>
                                    </li></>
          : <li className="nav-item">
          <Link className="nav-link" to={"/my-page" + props.type}>Welcome {authState.username}</Link>
      </li> 
}
{authState.is_researcher ?
   <> <li className="nav-item">
          <Link className="nav-link" to={"/my-experiments"}>My experiments</Link>
      </li> 
      <li className="nav-item">
          <Link className="nav-link" to={"/upload"}>Upload</Link>
      </li></> :   <li className="nav-item">
          <Link className="nav-link" to={"/login-" + props.type}> Applied Experiments</Link>
      </li> }
          </ul>
      </div>
      </div>
  </nav>
  <Switch>
                        <Route  exact path={"/login-researcher" }  render = {() =>   <CardList />}/>
                        <Route  exact path={"/login-undefined" }  render = {() =>   <CardList />}/>
                        <Route  exact path={"/login-participant" }  render = {() =>   <CardList />}/>
                        <Route path={"/upload"} render = {() => <UploadForm />} />
                        <Route path={"/my-experiments"} render = {() => <ResearchersPage />} />
                      
                    </Switch>
  </BrowserRouter>
        <div className = 'main_page_wrapper'>
            <div className='container'>
          
           </div>
            <div className = 'detail_box'>
               
           
         <div className='container' style={{marginTop:'18%', width:'100%', marginRight:'80%'}}>
      
       </div> 
         
          
         
            </div>
        </div>
        </div>
    )
}

export default BulletinBoard