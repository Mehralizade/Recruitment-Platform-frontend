import React, { Component, useState, useEffect, useRef, } from "react";

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
import Cardlist2 from "./cardlist2";

function BulletinBoard(props) {
    const { state: authState } = React.useContext(AuthContext);
    
    const [bulletinAnnouncements, SetBulletinAnnouncements] = useState([])
    
  useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
        .then(response => response.json())
        .then(data => SetBulletinAnnouncements(data))
      },[]) 
      const AscendingRef=useRef();
  const SettingRef = useRef();
  const ValueRef = useRef();
  
  const [setting, setSetting] = useState('')
  const [date, setDate] = useState('')
  const [reward, setReward] = useState('')

      
  function Handler(event){
    
    event.preventDefault();
    SetBulletinAnnouncements([])
    const enteredAscending = AscendingRef.current.value
   const  enteredOnline = SettingRef.current.value
    const enteredValue = ValueRef.current.value
  setSetting(enteredOnline)
  setDate(enteredValue)
  setReward(enteredAscending)
    const FilterData = {
      setting: enteredOnline,
      date: enteredValue,
      reward: enteredAscending,
      
  }}
  console.log('http://127.0.0.1:8000/api/posts?reward='+reward+"&"+"setting="+setting+"&date="+date)
  useEffect(() => {
  fetch('http://127.0.0.1:8000/api/posts?reward='+reward+"&"+"setting="+setting).
  then(response => response.json()).then(data=>SetBulletinAnnouncements(data)) }, [])
    console.log(bulletinAnnouncements)
    
    return (
      <div>
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/login-" + props.type}><h3>[CLOSED]</h3></Link>
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
                        <Link className="nav-link" to={"/upload"}>New announcement</Link>
                    </li></> :   <li className="nav-item">
                        <Link className="nav-link" to={"/login-myPage"}> My Page</Link>
                    </li> }
                        </ul>
                    </div>
                    </div>
        </nav> 
        
        <div className='container' style={{marginTop:'4%', height:'2px'}}>
            
          
            <form onSubmit={Handler}>
            <div className='col-12'>
              
            <div className='row'>
            
               
           
                <div className='col-md-4'>
                
               <div className='btn-group'>

                <select class="form-select" ref={SettingRef} aria-label="Default select example">
  
  <option value="Online" >Online</option>
  <option value="All">All</option>
</select>
</div>
</div>
 <div className='col-md-4'>
<div className="btn-group">

  <select class="form-select" aria-label="Default select example">
  
  <option value="3" ref={ValueRef}>3 days</option>
  <option value="7" ref={ValueRef}>One week</option>
  
</select>
  </div>
</div>
<div className='col-md-4'>
<div className="btn-group">
  
  
 
  <select class="form-select" ref={AscendingRef} aria-label="Default select example">
  <option selected>Reward</option>
  <option value="Ascending" >Ascending</option>
  <option value="Descending" ref={AscendingRef}>Descending</option>
</select>
<button className='btn btn-success'>Apply</button>
  </div>
</div>
</div>
</div>
</form>

</div>
        <Switch>
            <Route  exact path={"/login-researcher" }  render = {() =>    <CardList /> }/>
            <Route  exact path={"/login-undefined" }  render = {() =>   <CardList />}/>
            <Route  exact path={"/login-participant" }  render = {() =>   <div> <Cardlist2 posts={bulletinAnnouncements} /></div>}/>
            <Route path={"/upload"} render = {() => <UploadForm />} />
            <Route path={"/my-experiments"} render = {() => <ResearchersPage />} />
            <Route path={"/login-myPage"} render = {() => <MyPage />} />
        </Switch>
  </BrowserRouter>
        
    </div>
    )
}

export default BulletinBoard