import React, {useState, useRef} from 'react'

function Login_component() {

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    const UsernameRef = useRef();
    const PasswordRef = useRef();

    
    function SubmitHandler(event){
        event.preventDefault();
    SetUsername(UsernameRef.current.value);
    SetPassword(PasswordRef.current.value);
    const EnteredUsername = UsernameRef.current.value
    const EnteredPassword = PasswordRef.current.value
    const Credentials = {
        'username': EnteredUsername,
        'password': EnteredPassword,
    }
    fetch('http://127.0.0.1:8000/auth/',
    {
      method: 'POST',
      body: JSON.stringify(Credentials),
      headers: {
        'Content-Type':'application/json',
      } 
    }).then(resp=>{if (resp.status===400){alert('fail')} else {alert('success')}}).catch(error=>alert(error))
console.log(Credentials)
}

    return (
        <div>
             <form onSubmit={SubmitHandler}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" ref={UsernameRef} className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" ref={PasswordRef} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
               
            </form>
        </div>
    )
}

export default Login_component

