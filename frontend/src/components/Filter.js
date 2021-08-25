import React from 'react'

function Filter() {
    return (
        <div className='container' style={{margin:'2%'}}>
            <div className='col-9'>
            <div className="row g-3">
                <div className='col-md-2'>
          <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
<label className="btn btn-outline-success" for="btn-check-outlined">Online</label>
</div>
 <div className='col-md-2'>
<div className="btn-group">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Date
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Next 3 days</a></li>
    <li><a className="dropdown-item" href="#">Next week</a></li>
    <li><a className="dropdown-item" href="#">Next month</a></li>
  </ul>
  </div>
</div>
<div className='col-md-2'>
<div className="btn-group">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Reward
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Ascending</a></li>
    <li><a className="dropdown-item" href="#">Descending</a></li>
  </ul>
</div>
</div>
</div>
</div>
        </div>
    )
}

export default Filter
