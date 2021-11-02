import React, { useState } from 'react';
import UserDetails from './userDetails.component';
import RatingComp from './rating.component';


export default function UserCard(props) {
    const [toggle, setToggle] = useState(true);
    const toggleChecked = () => setToggle(toggle => !toggle);
    return (
        <div className = 'user-card-wrapper'>
            <div className = 'toggler-wrapper' onClick = {toggleChecked}>
                {toggle && 'Applicant Details (Click to rate applicant)'}
                {!toggle && 'Applicant Rating (Click for applicant details)'}
            </div>
            <div>
                {toggle && <UserDetails id={props.id} postId={props.postId} name={props.name} age={props.age} gender={props.gender}
                reputation={props.reputation} />}
                {!toggle && <RatingComp id={props.id} />}
            </div>
        </div>
    )
}

