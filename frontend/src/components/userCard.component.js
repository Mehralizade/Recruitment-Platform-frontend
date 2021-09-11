<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import UserDetails from './userDetails.component';
import RatingComp from './rating.component';


export default function UserCard() {
    const [toggle, setToggle] = useState(true);
    const toggleChecked = () => setToggle(toggle => !toggle);
    return (
        <div className = 'user-card-wrapper'>
>>>>>>> cc5c9727b3408ecaa17239d5aa7575413f573332
            <div className = 'toggler-wrapper' onClick = {toggleChecked}>
                {toggle && 'User_ID Details'}
                {!toggle && 'User_ID Rating'}
            </div>
            <div>
<<<<<<< HEAD
                {toggle && applicants}
=======
                {toggle && <UserDetails />}
>>>>>>> cc5c9727b3408ecaa17239d5aa7575413f573332
                {!toggle && <RatingComp />}
            </div>
        </div>
    )
<<<<<<< HEAD
}
=======
}

>>>>>>> cc5c9727b3408ecaa17239d5aa7575413f573332
