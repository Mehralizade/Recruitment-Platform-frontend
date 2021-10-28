import React from 'react'
import { AuthContext } from "../App";
import profile from './profilepic.png';

function Researcher_Profile(props) {
  const { state: authState } = React.useContext(AuthContext);
 
    return (
        
            <div className = 'user-profile-wrapper'>
                 <div className="col-md-12">
            <div className="card user-card">
                <div className="card-header">
                    <h5>Profile</h5>
                </div>
                <div className="card-block">
                    <div className="user-image">
                        <img src={profile} className="img-radius" alt="User-Profile-Image" />
                    </div>
                    <h6 className="f-w-600 m-t-25 m-b-10">{authState.username}</h6>
                    <p class="text-muted">TBD</p>
                    <hr></hr>
                   </div>
                    
            </div>
        </div>
</div>
        
      
    )
        
    
}

export default Researcher_Profile
