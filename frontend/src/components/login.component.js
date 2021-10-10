import React, { Component, useRef } from "react";
import { AuthContext } from "../App";
function Login (props){
   
 {const { dispatch } = React.useContext(AuthContext);
   
   
  const TitleRef = useRef();
    const userNameRef = useRef();
    const PasswordRef = useRef();
    
  
     
      function SubmitHandler(event){
        event.preventDefault();
      
      
  
  
  
      const EnteredUsername  = userNameRef.current.value;
      const EnteredPassword = PasswordRef.current.value;
      
  
  
  
      const LoginData = {
       
        username: EnteredUsername,
        password:EnteredPassword,
  
      };
      console.log(LoginData)
      fetch('http://127.0.0.1:8000/auth/',
      {
        method: 'POST',
        body: JSON.stringify(LoginData),
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
        } 
      }).then(resp=>resp.json()).catch(error=>alert(error)).then(data=>{ dispatch({
        type: "LOGIN",
        payload: data,
    })
  })
      
    }
  
        return (
            <form  onSubmit={SubmitHandler}>
                <h3> {props.type} Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" ref={userNameRef} className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" ref={PasswordRef} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
               
            </form>
        );
    }
}

export default Login