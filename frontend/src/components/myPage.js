import React, { useState, useEffect} from "react";
import UserProfile from "./userProfile.component";
import Card from './card.component';
import { AuthContext } from "../App";

export default function MyPage(props) {
    const [toggle, setToggle] = useState(0);
    const { state: authState } = React.useContext(AuthContext);
    const toggle0 = () => setToggle(toggle => 0);
    const toggle1 = () => setToggle(toggle => 1);
    const toggle2 = () => setToggle(toggle => 2);
    const numbers = [0, 1, 2, 3, 4]
    
    const [posts, setPosts] = useState([])
    const [confirmedList, setConfirmedList] = useState([])
    const [declinedList, setDeclinedList] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts?applied="+authState.userId)
        .then(response => response.json())
        .then(data => setPosts(data))
      },[])
      useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts?confirmed="+authState.userId)
        .then(response => response.json())
        .then(data => setConfirmedList(data))
      },[])
      useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts?declined="+authState.userId)
        .then(response => response.json())
        .then(data => setDeclinedList(data))
      },[])
      console.log(posts)
      const listApplied = posts.map((post) =>
      <div>
          <Card title = {post.title} />
      </div>
  ) 
    const listAccepted = confirmedList.map((post) =>
        <div>
            <Card title = {post.title} />
        </div>
    )
    const listRejected = declinedList.map((post) =>
        <div>
            <Card title = {post.title} />
        </div>
    )
    return (
        <div className = 'my-page'>
            <UserProfile />


            <div className='container'>
            <div className = 'user-profile-filter-panel'>
                <div className="nav-link" onClick = {toggle0}>
                    Applied
                </div>
                <div className="nav-link" onClick = {toggle1}>
                    Accepted
                </div>
                <div className="nav-link" onClick = {toggle2}>
                    Rejected
                </div>
            </div>


            <div className = 'card_list_wrapper2'>
                {toggle === 0 && listApplied}
                {toggle === 1 && listAccepted}
                {toggle === 2 && listRejected}
            </div>
            </div>
        </div>
    );
}