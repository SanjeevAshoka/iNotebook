import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [credentials, setCredentials] = useState({email:"", password:""});
    let navigate = useNavigate();

    const onChange = (e)=> { 
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        const json = await response.json(response);
        console.log(json);
        // setCredentials({email:"", password:""});
        if (json.Success) {
            console.log("success")
            // Save the auth token and redirect
            localStorage.setItem('token', json.jwttocken);
            navigate("/");
            props.showAlert('Login Successfully', 'success');
        }
        else {
            props.showAlert("Invalid Credentials", 'danger');
        }
    }
  return (
    <div className='container'>
     <form onSubmit={handleSubmit} > 
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"  name= "password"  onChange={onChange} value={credentials.password}/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}
