import React, {useEffect, useState} from 'react'

function Applications(props) {
 const [userData, setuserData] = useState()
  useEffect(() => {
    {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch(console.log)
    }
  }, []) 
    return (
        <div className='container' style={{maxWidth:'600px'}}>
            <table class="table table-hover">
            <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Rating</th>
      <th scope="col">Confirm</th>
      <th scope="col">Decline</th>
    </tr>
  </thead>
  <tbody>
    {userData.map((data) =>{
    <tr>
      <th scope="row">1</th>
      <td>{data.username}</td>
      <td>{props.gender}</td>
      <td>{props.age}</td>
      <td>{props.rating}</td>
      <td><button className='btn btn-success'>Confirm</button></td>
      <td><button className='btn btn-danger'>Decline</button></td>
    
    </tr>
})}
    </tbody>
    
</table>
        </div>
    )
}

export default Applications
