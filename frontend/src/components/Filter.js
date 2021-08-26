import React, {useRef} from 'react'

function Filter() {
  const AscendingRef=useRef();
  function Handler(event){
    event.preventDefault();
  
  console.log(AscendingRef.current.value)}
    return (
        <div className='container' style={{margin:'2%'}}>
            <div className='col-9'>
            <div className="row g-3">
            <form onSubmit={Handler}>
                <div className='col-md-2'>
               
          <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
<label className="btn btn-outline-success" for="btn-check-outlined">Online</label>
</div>
 <div className='col-md-2'>
<div className="btn-group">

  <select class="form-select" aria-label="Default select example">
  
  <option value="1">3 days </option>
  <option value="2">One week</option>
  <option value="3">One months</option>
</select>
  </div>
</div>
<div className='col-md-2'>
<div className="btn-group">
  
  
 
  <select class="form-select" aria-label="Default select example">
  <option selected>Date</option>
  <option value="Ascending" ref={AscendingRef}>Ascending </option>
  <option value="Descending" ref={AscendingRef}>Descending</option>
</select>
<button className='btn btn-sucess'>Apply</button>
  </div>
</div>
</form>
</div>
</div>
</div>
        
    )
}

export default Filter
