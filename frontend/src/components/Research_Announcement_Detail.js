import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router';
import BulletinBoard from './BulletinBoard'
import logo from './logo.svg';
function Research_Announcement_Detail(props) {
    function ApplyHandler(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/posts/'+props.id,
    {
      method: 'PUT',
      body: JSON.stringify({applicants:'2'}),
      headers: {
        'Content-Type':'application/json',
      } 
    })
    }
    const [announcement, SetAnnouncement] = useState([]);
   /* useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/"+id)
        .then(response => response.json())
        .then(data => SetAnnouncement(data))
      },[])*/
    return (
        <div className='container' style={{ maxWidth:'100%', marginTop:'7%', marginRight:'65%', itemAlign:'left'}}>
<img src={logo} style={{height:'120px'}}className="img-fluid rounded-start" alt="..."/>
            <h3>{props.title}</h3>
            <div className='container' style={{margin:'auto', maxWidth:'100%'}}>
            <div className='row'>
                <div className='col-md-3'>
                <button className='btn btn-outline-primary'> {props.type} </button></div>
                <div className='col-md-3'>
                <button className='btn btn-outline-primary'> {props.reward} </button> </div>
                <div className='col-md-3'>
                <button className='btn btn-outline-primary'>{props.date}</button></div>
                <div className='col-md-2'>
                <button className='btn btn-outline-primary'>{props.time}</button></div>
                <div className='col-md-1'>
                <button className='btn btn-outline-primary'>{props.location}</button></div>
               
            <div className='container' style={{marginTop:'3%'}}>
            
            <h6 style={{textAlign:'left'}}>Description:</h6><p style={{textAlign:'left'}}>{props.description}</p>
            <h6 style={{textAlign:'left'}}>Data Collected:</h6><p style={{textAlign:'left'}}>{props.dataCollected}</p>
            <h6 style={{textAlign:'left'}}>Applicants required:</h6><p style={{textAlign:'left'}}>{props.applicantNumber}</p>
            <h6 style={{textAlign:'left'}}>Additional Info:</h6><p style={{textAlign:'left'}}>{announcement.additionalInfo}</p>
            <div>
            <button className='btn btn-success' onSubmit={ApplyHandler}>Apply</button>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Research_Announcement_Detail