import React, { useState } from "react";
import UserProfile from "./userProfile.component";
import Card from './components/card.component';


export default function MyPage(props) {
    const [toggle, setToggle] = useState(0);
    const toggle0 = () => setToggle(toggle => 0);
    const toggle1 = () => setToggle(toggle => 1);
    const toggle2 = () => setToggle(toggle => 2);
    const numbers = [0, 1, 2, 3, 4]
    const listApplied = numbers.map((number) =>
        <div>
            <Card title = {'Applied' + number} />
        </div>
    ) 
    const listAccepted = numbers.map((number) =>
        <div>
            <Card title = {'Accepted' + number} />
        </div>
    )
    const listRejected = numbers.map((number) =>
        <div>
            <Card title = {'Rejected' + number} />
        </div>
    )
    return (
        <div className = 'my-page'>
            <UserProfile />

            <hr />

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

            <hr />
            <div className = 'card_list_wrapper'>
                {toggle === 0 && listApplied}
                {toggle === 1 && listAccepted}
                {toggle === 2 && listRejected}
            </div>

        </div>
    );
}