import React, { Component, useState, useEffect, } from "react";

import Research_Announcement_Detail from "./Research_Announcement_Detail";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Filter from "./Filter";
import UploadForm from "./UploadForm";
import MyExperiments from "./myExperiments";
import MyPage from "./myPage"
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
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/login-" + props.type}>NoARA</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                        {!authState.isAuthenticated ?
                        <><li className="nav-item">
                            <Link className="nav-link" to={"/login-" + props.type}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/signup-" + props.type}>Sign up</Link>
                        </li></>
                        :<div></div>
                        }

                {authState.is_researcher ?
                <> <li className="nav-item">
                        <Link className="nav-link" to={"/my-experiments"}>My Page</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link" to={"/upload"}>Upload</Link>
                    </li></> :   <li className="nav-item">
                        <Link className="nav-link" to={"/login-myPage"}> My Page</Link>
                    </li> }
                        </ul>
                    </div>
                    </div>
        </nav>
        <Switch>
            <Route  exact path={"/login-researcher" }  render = {() => <div> <Filter />   <CardList /></div> }/>
            <Route  exact path={"/login-undefined" }  render = {() =>   <div> <Filter />   <CardList /></div>}/>
            <Route  exact path={"/login-participant" }  render = {() =>   <div> <Filter />   <CardList /></div>}/>
            <Route path={"/upload"} render = {() => <UploadForm />} />
            <Route path={"/my-experiments"} render = {() => <ResearchersPage />} />
            <Route path={"/login-myPage"} render = {() => <MyPage />} />
        </Switch>
  </BrowserRouter>
        
    </div>
    )
}

export default BulletinBoard