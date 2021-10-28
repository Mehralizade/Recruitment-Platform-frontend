import React, { useState } from 'react';
import UserDetails from './userDetails.component';
import RatingComp from './rating.component';


export default function UserCard(props) {
    var isConfirmed = false
    return (
        <div className = 'user-card-wrapper'>
            <div className = 'toggler-wrapper'>
                User_ID
            </div>
            <div>
                <UserDetails id={props.id} postId={props.postId} name={props.name} age={props.age} gender={props.gender}
                reputation={props.reputation} />
                {isConfirmed && <RatingComp id={props.id} />}
            </div>
        </div>
    )
}

