import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router';
import BulletinBoard from './bulletinBoard'
import logo from './logo.svg';
import { AuthContext } from "../App";
function Research_Announcement_Detail(props) {
  console.log(props.data)
  const { state: authState } = React.useContext(AuthContext);
    function ApplyHandler(event){
        event.preventDefault();
        
        props.data.applicants.push(authState.userId)
        var updated_data = props.data
                 
        console.log(updated_data)
      
        fetch('http://127.0.0.1:8000/api/posts/'+props.id+'/',
    {
      method: 'PATCH',
      body: JSON.stringify({applicants:
        authState.userId}),
      headers: {
        'Content-type':'application/json',
      } 
    }).then(resp=>console.log(resp)).then(data=>console.log(data))
    
    }
    const [announcement, SetAnnouncement] = useState([]);
   /* useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/"+id)
        .then(response => response.json())
        .then(data => SetAnnouncement(data))
      },[])*/
      
      const [value, setValue] = useState(false)

    return (
      
        <div className='container-list' style={{
        maxWidth:'90%', marginRight:'10%', marginTop:'5%', marginBottom:'45%',  itemAlign:'left'}}>
<img src={logo} style={{textAlign:'left', height:'120px',}}className="img-fluid rounded-start" alt="..."/>
         
         <div className='row'> <div className='col-4'><h3 style={{textAlign:'left'}}>{props.title}</h3></div>
            <div className='col-1'>{!authState.is_researcher ?
            <form onSubmit={ApplyHandler}>
            <button className='btn btn-success' style={{width:'100px', borderRadius:'4px'}}
             onClick = {() => setValue(true)}> {value ? "Applied" : "Apply"} 
            </button></form> :
            <div></div>  }</div>  
              
              </div>
           <ul className="list-inline" style={{textAlign:'left'}}>
             <li>
              <p className='card-text'><small class="text-muted">{props.time}</small></p> </li>
           <li>   <p className='card-text'><small class="text-muted">{props.location}</small></p></li>
           
        
             <li>
             
               <p className='card-text'><small class="text-muted">{props.type}</small> </p> </li>
             
          <li>     <p className='card-text'><small class="text-muted">{props.reward}</small> </p> </li>
               
            <li>  <p className='card-text'><small class="text-muted">{props.date}</small> </p> </li>
             
             </ul>
            
            
            <h6 style={{textAlign:'left'}}>Description:</h6><p style={{textAlign:'left'}}>{props.data.description}</p>
            <h6 style={{textAlign:'left'}}>Data Collected:</h6><p style={{textAlign:'left'}}>{props.data.collected_data}</p>
            <h6 style={{textAlign:'left'}}>Applicants required:</h6><p style={{textAlign:'left'}}>{props.applicantNumber}</p>
            <h6 style={{textAlign:'left'}}>Additional Info:</h6><p style={{textAlign:'left'}}>{announcement.additionalInfo}</p>
            <div>
            
            </div>
           
          
          
        </div>
        
    )
}

export default Research_Announcement_Detail