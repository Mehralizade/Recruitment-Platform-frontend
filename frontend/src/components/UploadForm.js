import React, {useRef} from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AuthContext } from "../App";
function UploadForm(props) {
  const { state: authState } = React.useContext(AuthContext);

  const TitleRef = useRef();
  const TypeRef = useRef();
  const DurationRef = useRef();
  const DescriptionRef = useRef();
  const DateRef = useRef();
  const TimeRef = useRef();
  const LocationRef = useRef();
  const DataCollectedRef = useRef();
  const RewardRef = useRef();
  const AdditionalInfoRef = useRef();
  const SettingRef = useRef();
  const ParticipantNumberRef = useRef();

   
    function SubmitHandler(event){
      event.preventDefault();
    
    



    const EnteredTitle  = TitleRef.current.value;
    const EnteredDescription = DescriptionRef.current.value;
    const EnteredDuration = DurationRef.current.value;
    const EnteredType = TypeRef.current.value;
    const EnteredDate = DateRef.current.value;
    const EnteredTime  = TimeRef.current.value;
    const EnteredLocation = LocationRef.current.value;
    const EnteredDataCollected  = DataCollectedRef.current.value;
    const EnteredReward = RewardRef.current.value;
    const EnteredAdditionalInfo = AdditionalInfoRef.current.value;
    const EnteredSetting = SettingRef.current.value;
    const EnteredParticipantNumber = ParticipantNumberRef.current.value;



    const AnnouncementData = {
      setting: EnteredSetting,
      title: EnteredTitle,
      type: EnteredType,
      description: EnteredDescription,
      
      exp_type: EnteredType,
      collected_data: EnteredDataCollected,
      reward: EnteredReward,
      duration: EnteredDuration,
      participant_number: EnteredParticipantNumber,
      date: EnteredDate,
      time: EnteredTime,
      location: EnteredLocation,
      additional_info:EnteredAdditionalInfo,
      author: authState.userId,
    };
    console.log(AnnouncementData)
  //props.onAddAnnouncement(AnnouncementData)

  fetch('http://127.0.0.1:8000/api/posts/',
  {
   method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(AnnouncementData),
        }
  ).then(response => response.json())
  .then(data => console.log(data));

      }


    const ParticipantNumber = useRef()

    return (
      
        <div>
          
  <div className='container' style={{ width:'100%', marginTop:'10%'}}>
        <div className='col-8'>
          
        
         <form className="row g-4" onSubmit={SubmitHandler}>
         <h4>Introduction</h4>
    <hr></hr>
  <div className="col-md-6">
   
    <label for="floatingTitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="floatingTitle"  ref={TitleRef}/>
  </div>
  <div className="col-md-6">
    <label for="Type" className="form-label">Type</label>
    <input type="text" className="form-control" id="Type" ref={TypeRef}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea className="form-control"  ref={DescriptionRef} id="exampleFormControlTextarea1" rows="5" placeholder='Please write experiment description here..'></textarea>
  </div>
  <h4>Logistics</h4>
    <hr></hr>
  <div className="col-md-4">
    <label for="Date" className="form-label">Date</label>
    <input type="date" className="form-control" ref={DateRef} id="Date" placeholder=""/>
  </div>
  <div className="col-md-4">
    <label for="Time" className="form-label">Time</label>
    <input type="text" className="form-control" ref={TimeRef} id="Time" placeholder=""/>
  </div>
  <div className="col-md-4">
    <label for="Location" className="form-label">Location</label>
    <input type="text" className="form-control" ref={LocationRef} id="Location"/>
  </div>
  <div className="col-md-4">
    <label for="Department" className="form-label">Department</label>
    <input type="text" className="form-control" id="Department"/>
  </div>
  <div className="col-md-4">
    <label for="Lab" className="form-label">Lab</label>
    <input type="text" className="form-control" id="Lab"/>
  </div>
  <div className="col-md-4">
    <label for="Data" className="form-label">Data Collected</label>
    <input type="text" className="form-control" ref={DataCollectedRef} id="Data" placeholder='Please specify what kind of data you will be collecting'/>
  </div>
<div className="col-md-4">
    <label for="Data" className="form-label">Duration</label>
    <input type="number" className="form-control" ref={DurationRef} id="Data" placeholder='Please specify experiment duration'/> 
  </div>
  <div className="col-md-4">
  <label for="reward" className="form-label">Reward</label>
  <div className="input-group">
  <input type="text" className="form-control" ref={RewardRef} id='reward' aria-label="Dollar amount (with dot and two decimal places)"/>
  <span className="input-group-text">Won</span>
</div>
</div>
<div className="col-md-4">

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" value='On' name="btnradio" id="btnradio1" autocomplete="off"/>
  <label class="btn btn-outline-primary" ref={SettingRef} for="btnradio1">Online</label>

  <input type="radio" class="btn-check" value='Off' name="btnradio" ref={SettingRef} id="btnradio2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio2">Offline</label>
</div>
  
</div>
<div className="col-md-4">
    <label for="participant" className="form-label">Number of participants</label>
    <input type="number" className="form-control" ref={ParticipantNumberRef} id="participant" placeholder='Please specify number of participants you want to recruit'/> 
  </div>
<div class="form-group">
    <label for="exampleFormControlTextarea1"> Additional info</label>
    <textarea className="form-control" ref={AdditionalInfoRef} id="exampleFormControlTextarea1" rows="5" placeholder='Please provide any additional information here..'></textarea>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
</div>
       
    )
}

export default UploadForm
