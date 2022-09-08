import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
    const [registerData, setRegisterData] = useState({name:"" ,email:"", password:""});
    let navigate = useNavigate();

    const onChange = (e)=>{
        setRegisterData({...registerData, [e.target.name]:e.target.value})
    }
    const onCamp = ()=>{

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("hhh");
        const response = await  fetch('http://localhost:8000/api/auth/createuser',{
            method: 'POST',
            headers:  { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        });
        const json = await response.json(response);
        console.log(json);
        if(json.Success){
            navigate("/");
            props.showAlert('Accout Created Successfully', 'success');
        }
        else{
            props.showAlert("Invalid Details", 'danger');
            // console.log("Error: ",json.message);
        }
        
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
             <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={onChange} name="name" value ={registerData.name} required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} name="email" value ={registerData.email} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onChange}  name="password" value ={registerData.password} required minLength={8}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" onChange={onCamp}  name="cpassword" required minLength={8}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
