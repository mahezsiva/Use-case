
import React from 'react'
import image4 from './../assests/image4.jpg';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
    const history = useHistory();
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const validationSchema = Yup.object({
        username : Yup.string().required("Username is mandatory"),
        password : Yup.string().required(regularExpression,"Password should include alphates,special characters and numbers").required("password can't be empty"),
     
    }) 
    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            username:'',
            password:'',
           
        }, validationSchema,
        
        onSubmit(values) {
            
          axios.post("http://localhost:8080/Login/add",values).then(res=>res.data).then((data)=>{
                alert("login successfull");
                history.push("/Userlogin")
                console.log("=============Submitted");
                console.log(data);
          },
          ).catch((err)=>{
                  console.log("err")
              })
      }
      }) 
      
    return (
        <div className="a3">
            <div className="a2">

            </div>
            

             <div className="a1">
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{ color: "GrayText" }}>Login</h3>
                <br></br>

                <div className="form-group">
                    <br></br>
                    <label>Username :</label>
                    <input type="text" name="username" placeholder="Enter username" values={values.username} onChange={handleChange} />
                    <br></br>
                    <div style={{color:"red"}}>      
                    {errors.username ? errors.username : null}
                    </div>
                </div>
                <br></br>
                <div className="form-group">
                    <br></br>
                    <label>Password :</label>
                    
                    <input type="password" name="password" placeholder="Enter password" values={values.password} onChange={handleChange}/>
    
                   <br></br>
                   <br></br>
                   <div style={{color:"red"}}>
                    {errors.password ? errors.password : null}
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="form-group">
                    <div className="">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        <br></br>
                        <br></br>
                        <button type="submit" className="btn btn-dark "  >Sign in</button>
                        
                {"||"}
                <button  className="btn btn-dark "onClick={() => history.push("")}>Back</button>
                    </div>
                </div>
              
               
             

                {/* </p> */}
            </form>
            </div>
            
        </div>


// onClick={() => history.push("/Userlogin")}

    )
}
