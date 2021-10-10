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
            <Card title = {post.title + post.id} />
        </Link>
    )
    const routeList = posts.map(
        (post) =>
        <Route path = {'/experiment'+ post.id} render = {() => <Research_Summary title={post.title} type={post.type}
        reward={post.reward} date={post.date} location={post.location} />} />
    )
    return (
        <div className = 'researchers-page' style={{marginTop:'12%'}}>
           
            <BrowserRouter>

                <Switch>
                    <Route exact path = '/my-experiments' render = {() => <MyExperiments experimentList = {experimentList}/>} />
                    {routeList}
                </Switch>

            </BrowserRouter>
        </div>
    );
}