import React from 'react'

function Researcher_Profile(props) {
    return (
        <div className='user-profile-wrapper'>
            <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.imgUrl}className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:'left'}}>Username: {props.username}</h5>
        <p className="card-text" style={{textAlign:'left'}}>Experiments: {props.experimentNumber}</p>
        
      </div>
    </div>
  </div>
  </div>
        </div>
    )
        
    
}

export default Researcher_Profile
