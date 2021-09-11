import React, {useRef, useEffect, useState} from 'react'
function Filter(props) {
  const [posts, setPosts] = useState([])
  const AscendingRef=useRef();
  const SettingRef = useRef();
  const ValueRef = useRef();
  
  


  function Handler(event){
    
    event.preventDefault();
    
    const enteredAscending = AscendingRef.current.value
   const  enteredOnline = SettingRef.current.value
    const enteredValue = ValueRef.current.value

    const FilterData = {
      setting: enteredOnline,
      date: enteredValue,
      reward: enteredAscending,
      
  }
  console.log('http://127.0.0.1:8000/api/posts?reward='+FilterData.reward+"&"+"setting="+FilterData.setting)
  fetch('http://127.0.0.1:8000/api/posts?reward='+FilterData.reward+"&"+"setting="+FilterData.setting).
  then(response => response.json()).then(data=>props.data(data))

  



  }
  

  
    return (
        <div className='container' style={{marginLeft:'50%', marginBottom:'2%',}}>
            
          
            <form onSubmit={Handler}>
            <div className='col-12'>
              
            <div className='row'>
            
               
           
                <div className='col-md-4'>
                
               <div className='btn-group'>

                <select class="form-select" ref={SettingRef} aria-label="Default select example">
  
  <option value="Online" >Online</option>
  <option value="All">All</option>
</select>
</div>
</div>
 <div className='col-md-4'>
<div className="btn-group">

  <select class="form-select" aria-label="Default select example">
  
  <option value="3" ref={ValueRef}>3 days</option>
  <option value="7" ref={ValueRef}>One week</option>
  
</select>
  </div>
</div>
<div className='col-md-4'>
<div className="btn-group">
  
  
 
  <select class="form-select" ref={AscendingRef} aria-label="Default select example">
  <option selected>Reward</option>
  <option value="Ascending" >Ascending</option>
  <option value="Descending" ref={AscendingRef}>Descending</option>
</select>
<button className='btn btn-success'>Apply</button>
  </div>
</div>
</div>
</div>
</form>

</div>

        
    )
}

export default Filter
