import React, { Component, useRef } from "react";

function SignUp (props){
       const userNameRef = useRef()
       const lastNameRef = useRef();
       const emailRef = useRef();
       const firstNameRef = useRef();
       const bankAccountRef = useRef();
       const passwordRef = useRef();
    
   function submitHandler(event) {
        event.preventDefault();
       const enteredUserName = userNameRef.current.value;
       const enteredFirstName = firstNameRef.current.value;
       const enteredLastName = lastNameRef.current.value;
       const enteredPassword = passwordRef.current.value;
       
       const enteredEmail = emailRef.current.value;

        const SignupData = {
            username : enteredUserName,
            password : enteredPassword,
            
            email: enteredEmail,
            is_researcher: true,

        }
        fetch('http://127.0.0.1:8000/api/researchers/',
      {
        method: 'POST',
        body: JSON.stringify(SignupData),
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
        } 
      }).then(resp=>resp.json()).catch(error=>alert(error)).then(data=>console.log(data))
    }
   
        return (
            <div className='container'>
            <form onSubmit={submitHandler} >
            {props.type ==='participant' &&  
             <><h3> {props.type} Sign Up</h3><div className="form-group">
                        <label>First name</label>
                        <input type="text" ref={firstNameRef} className="form-control" placeholder="First name" />
                    </div><div className="form-group">
                            <label>Last name</label>
                            <input type="text" ref={lastNameRef} className="form-control" placeholder="Last name" />
                        </div><div className="form-group">
                            <label>Email address</label>
                            <input type="email" ref={emailRef} className="form-control" placeholder="Enter email" />
                        </div><div className="form-group">
                            <label>Username</label>
                            <input type="text" ref={userNameRef} className="form-control" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <label>Bank account number</label>
                            <input type="text" ref={bankAccountRef} className="form-control" placeholder="Enter bank account number" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" ref={passwordRef} className="form-control" placeholder="Enter password" />
                        </div><div className="form-group">
                            <label>Confirm password</label>
                            <input type="password" ref={passwordRef} className="form-control" placeholder="Enter password" />
                        </div><button type="submit" className="btn btn-primary btn-block">Sign Up</button></>
}
        {props.type==='researcher' &&
        <><h3> Researcher Sign Up</h3><div className="form-group">
        <label>First name</label>
        <input type="text" ref={firstNameRef} className="form-control" placeholder="First name" />
    </div><div className="form-group">
            <label>Last name</label>
            <input type="text" ref={lastNameRef} className="form-control" placeholder="Last name" />
        </div><div className="form-group">
            <label>Email address</label>
            <input type="email" ref={emailRef} className="form-control" placeholder="Enter email" />
        </div><div className="form-group">
            <label>Username</label>
            <input type="text" ref={userNameRef} className="form-control" placeholder="Enter username" />
        </div><div className="form-group">
            <label>Password</label>
            <input type="password" ref={passwordRef} className="form-control" placeholder="Enter password" />
        </div><div className="form-group">
            <label>Confirm password</label>
            <input type="password" ref={passwordRef} className="form-control" placeholder="Enter password" />
        </div><button type="submit" className="btn btn-primary btn-block">Sign Up</button></>
        }
            </form>
            </div>
        );
    }
export default SignUp