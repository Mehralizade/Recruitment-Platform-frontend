import React from 'react'

function Research_Summary(props) {
    return (
        <div className='container' style={{margin:'auto', width:'50%'}}>
            <div className="card mb-3" style={{maxWidth: '540px', border:'none'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.imgUrl}className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:'left'}}>Title: {props.title}</h5>
        <p className="card-text" style={{textAlign:'left'}}>Type: {props.type}</p>
        <p className="card-text" style={{textAlign:'left'}}>Reward: {props.reward}</p>
        <p className="card-text" style={{textAlign:'left'}}>Date: {props.date}</p>
        <p className="card-text" style={{textAlign:'left'}}>Location: {props.location}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  </div>
        </div>
    )
}

export default Research_Summary
