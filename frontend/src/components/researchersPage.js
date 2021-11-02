import React, {useEffect, useState} from "react";
import MyExperiments from "./myExperiments";
import ExperimentDetails from "./experimentDetails.component";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Research_Summary from "./Research_Summary";
import Card from './card.component';
import Researcher_Profile from "./Researcher_Profile";
import { AuthContext } from "../App";

export default function ResearchersPage(props) {
    const [posts, setPosts] = useState([])
    const { state: authState } = React.useContext(AuthContext);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/?researcher_id="+authState.userId)
        .then(response => response.json()).then(data => setPosts(data))
      },[])

     
    const experimentList = posts.map(
        (post) =>
        
        <Link to = {'/experiment' + post.id}>
            <Card title = {post.title} datetime={post.date} type={post.exp_type} location={post.location}
            rewardeffort={post.reward} time={post.time} participant_number={post.participant_number} 
            confirmed_applicant={post.confirmed_applicants.length} />
        </Link>
    )

    experimentList.reverse()

    const routeList = posts.map(
        (post) =>
        <Route path = {'/experiment'+ post.id} render = {() => <Research_Summary id={post.id} 
        declined_applicants={post.declined_applicants} confirmed_applicants={post.confirmed_applicants}
      applicants={post.applicants} time={post.time} title={post.title} type={post.exp_type}
        reward={post.reward} date={post.date} location={post.location} />} />
    )
    return (
        <div className = 'researchers-page' style={{marginTop:'5%'}}>
           
            <BrowserRouter>

                <Switch>
                    <Route exact path = '/my-experiments' render = {() => <MyExperiments experimentList = {experimentList}/>} />
                    {routeList}
                </Switch>

            </BrowserRouter>
        </div>
    );
}