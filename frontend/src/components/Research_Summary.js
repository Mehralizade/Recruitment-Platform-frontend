import React from 'react';
import UserCard from './userCard.component';
import {useEffect, useState} from 'react'
import logo from './logo.svg';
function Research_Summary(props) {
  /*const [postData, setPostData] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/"+props.id)
    .then(response => response.json())
    .then(data => setPostData(data))
  },[])*/
  const postId = props.id
  const numbers=props.applicants
    const userCardList = numbers.map((number) => 
      <UserCard postId={postId} id={number.id} name={number.username} 
      age={number.age} gender={number.gender} reputation = {number.reputation} />
    )
    return (
     

      <div className = 'research-summary'>
       
       <div className = 'user-profile-wrapper'>
      <div className="col-md-12">
 <div className="card user-card">
     <div className="card-header">
        
     </div>
     <div className="card-block">
         <div className="user-image">
             <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-radius" alt="User-Profile-Image" />
         </div>
         <h6 className="f-w-600 m-t-25 m-b-10">{props.title}</h6>
         <p class="text-muted">{props.type} | {props.reward} Won | {props.date} {props.time}   |  {props.location}</p>
         
        </div>
         
 </div>
 <h3>Applicants</h3>
 <hr></hr>
</div>

      </div>

        {userCardList}

    
      </div>
     
    )
        }

export default Research_Summary;
