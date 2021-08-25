import React from 'react'

function Research_Announcement_Detail(props) {
    return (
        <div className='container' style={{margin:'auto', maxWidth:'65%', itemAlign:'left'}}>
<img src={props.imgUrl} className="img-fluid rounded-start" alt="..."/>
            <h3>{props.title}</h3>
            <div className='container' style={{margin:'auto', maxWidth:'65%'}}>
            <div className='row'>
                <div className='col-md-2'>
                <p>{props.type}</p></div>
                <div className='col-md-2'>
                <p>{props.reward}</p></div>
                <div className='col-md-2'>
                <p>{props.date}</p></div>
                <div className='col-md-2'>
                <p>{props.time}</p></div>
                <div className='col-md-2'>
                <p>{props.location}</p></div>
               
            
            
            <h5 style={{textAlign:'left'}}>Description:</h5><p style={{textAlign:'left'}}>{props.description}</p>
            <h5 style={{textAlign:'left'}}>Data Collected:</h5><p style={{textAlign:'left'}}>{props.dataCollected}</p>
            <h5 style={{textAlign:'left'}}>Applicants required:</h5><p style={{textAlign:'left'}}>{props.applicantNumber}</p>
            <h5 style={{textAlign:'left'}}>Additional Info:</h5><p style={{textAlign:'left'}}>{props.additionalInfo}</p>
            <div>
            <button className='btn btn-success'>Apply</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Research_Announcement_Detail
