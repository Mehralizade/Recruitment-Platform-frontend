import React from 'react'
import { AuthContext } from "../App";

function Researcher_Profile(props) {
  const { state: authState } = React.useContext(AuthContext);
 
    return (
        <div>
            <div style={{marginTop:'10%'}} className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.imgUrl}className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:'left'}}>Username: {authState.username}</h5>
       
        
      </div>
    </div>
  </div>
  </div>
        </div>
    )
        
    
}

export default Researcher_Profile
