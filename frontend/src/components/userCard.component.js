import React, { useState } from 'react';
import UserDetails from './userDetails.component';


export default function UserCard() {
    return (
        <div>
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

