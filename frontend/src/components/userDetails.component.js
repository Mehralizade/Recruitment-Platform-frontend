import React, { Component, useState } from "react";
import { Rating } from 'react-simple-star-rating'
export default function UserDetails(props) {
   
   const [value, setValue] = useState(false)
   const [value2, setValue2] = useState(false)
        function confirmHandler(event){
            event.preventDefault();
            
            
          
            fetch('http://127.0.0.1:8000/api/posts/'+props.postId+'/',
        {
          method: 'PATCH',
          body: JSON.stringify({confirmed_applicants:
            props.id}),
          headers: {
            'Content-type':'application/json',
          } 
        }).then(resp=>console.log(resp)).then(data=>console.log(data))
        
        }
        function declineHandler(event){
            event.preventDefault();
            
            
          
            fetch('http://127.0.0.1:8000/api/posts/'+props.postId+'/',
        {
          method: 'PATCH',
          body: JSON.stringify({declined_applicants:
            props.id}),
          headers: {
            'Content-type':'application/json',
          } 
        }).then(resp=>console.log(resp)).then(data=>console.log(data))
        
        }
        return (
            <div className = 'user-details-wrapper'>

                <th scope='row'>
                   {props.name}
                </th>

                <td >
                   {props.age}
                </td>

                <td>
                    {props.gender}
                </td>

                <td>
                 <Rating ratingValue={props.reputation} />
                </td>
                { !value2 &&
                <td>
                  
                    <form onSubmit={confirmHandler}>
                    <button className='btn btn-primary'   onClick = {() => setValue(true)}> {value ? "Confirmed" : "Confirm"}</button>
                    </form>
                </td>}
                { !value && 
                <td>
                 
                <form onSubmit={declineHandler}>
                    <button className='btn btn-danger'  onClick = {() => setValue2(true)}> {value2 ? "Declined" : "Decline"} </button>
                    </form>
                </td>}
            </div>
        );
    }
