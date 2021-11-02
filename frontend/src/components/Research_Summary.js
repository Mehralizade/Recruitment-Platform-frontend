import React from 'react';
import UserCard from './userCard.component';
import { PieChart } from 'react-minimal-pie-chart';
import {useEffect, useState} from 'react'
import logo from './logo.svg';
import experiment from './experimental.svg'
function Research_Summary(props) {
  /*const [postData, setPostData] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/"+props.id)
    .then(response => response.json())
    .then(data => setPostData(data))
  },[])*/
  const [mCount, setmCount] = useState(0)
  const postId = props.id
  const numbers=props.applicants
  const mCount2 = numbers.filter(item => item.gender === 'M')
  const oneRep = numbers.filter(item => item.reputation === 1)
  const twoRep = numbers.filter(item => item.reputation === 2)
  const threeRep = numbers.filter(item => item.reputation === 3)
  const fourRep = numbers.filter(item => item.reputation === 4)
  const fiveRep = numbers.filter(item => item.reputation === 5)
console.log(twoRep,oneRep,threeRep,fourRep,fiveRep)
  const moviesCount = mCount2.length;
  console.log(moviesCount)
    const userCardList = numbers.map((number) => 
      <UserCard postId={postId} id={number.id} name={number.username} 
      age={number.age} gender={number.gender} reputation = {number.reputation} />
    )
    var d=0
    numbers.map(number=>{
    return()=>{
      if(number.gender==='M'){
        d=d+1
        setmCount(d)
      }
    }

    });
    console.log(d)
    return (
     

      <div className = 'research-summary'>
       
       <div className = 'user-profile-wrapper'>
      <div className="col-md-12">
 <div className="card user-card">
     <div className="card-header">
        
     </div>
     <div className="card-block">
         
             <img style={{textAlign:'left', height:'170px',}}className="img-fluid rounded-start" alt="..." src={logo}  />
         
         <h6 className="f-w-600 m-t-25 m-b-10">{props.title}</h6>
         <p class="text-muted">{props.type} | {props.reward} Won | {props.date} {props.time}   |  {props.location}</p>
         
        </div>
         
 </div>
 <h3>Applicant Statistics</h3>
 <hr></hr>
 <div className='row'>
 <div className='col-2'></div>
   <div className='col-3'>
    Applicant gender
 <PieChart
  data={[
    { title: 'Male', value: moviesCount, color: '#33FF7D' },
    { title: 'Female', value: numbers.length-moviesCount, color: '#FF3399' },
    
  ]}
  />
  </div>
  <div className='col-2'></div>
  <div className='col-3'>
Applicant Reputation
 <PieChart
 
  data={[
    { title: '1', value: oneRep.length, color: '#FF3352' },
    { title: '2', value: twoRep.length, color: '#FFFF33' },
    { title: '3', value: threeRep.length, color: '#33FF7D' },
    { title: '4', value: fourRep.length, color: '#FF3399' },
    { title: '5', value: fiveRep.length, color: '#33F0FF' },
    
  
  ]}
  />
  </div>
  <div className='col-3'></div>
 
  </div>
  <div className='container' style={{marginTop:'3%'}}></div>
 <h3>Applicants</h3>
 <hr></hr>
</div>

      </div>

        {userCardList}

    
      </div>
     
    )
        }

export default Research_Summary;
