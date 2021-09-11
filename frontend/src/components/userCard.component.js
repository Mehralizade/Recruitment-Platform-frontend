import React, { useState } from 'react';
import UserDetails from './userDetails.component';
import RatingComp from './rating.component';


export default function UserCard() {
    const [toggle, setToggle] = useState(true);
    const toggleChecked = () => setToggle(toggle => !toggle);
    return (
        <div className = 'user-card-wrapper'>
            <div className = 'toggler-wrapper' onClick = {toggleChecked}>
                {toggle && 'User_ID Details'}
                {!toggle && 'User_ID Rating'}
            </div>
            <div>
                {toggle && <UserDetails />}
                {!toggle && <RatingComp />}
            </div>
        </div>
    )
}

