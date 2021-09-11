import React, { useState, useEffect } from 'react';
import UserDetails from './userDetails.component';
import RatingComp from './rating.component';
 
 
export default function UserCard() {
    const [toggle, setToggle] = useState(true);
    const toggleChecked = () => setToggle(toggle => !toggle);
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/study_subjects/")
        .then(response => response.json())
        .then(data => setUsers(data))
      },[])

      const applicants = users.map((user)=>
            <UserDetails name={user.username} age={user.age} gender={user.gender} />
      );
    return (
        <div>
            <div className = 'toggler-wrapper' onClick = {toggleChecked}>
                {toggle && 'User_ID Details'}
                {!toggle && 'User_ID Rating'}
            </div>
            <div>
                {toggle && applicants}
                {!toggle && <RatingComp />}
            </div>
        </div>
    )
}