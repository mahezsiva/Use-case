
import React from 'react'
import image4 from './../assests/image4.jpg';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import axios from 'axios';


export default function Admin() {
    const history = useHistory();
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const validationSchema = Yup.object({
        username : Yup.string().required("Username is mandatory"),
        password : Yup.string().matches(regularExpression,"Password should include alphates,special characters and numbers").required("password can't be empty")
     
    }) 
    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            username:'',
            password:'',
           
        },
        validationSchema,
        onSubmit(values) {
            axios.post("http://localhost:8080/api/auth",values).then(res=>res.data).then((data)=>{
                  alert("User Onboarded successfully");
                  history.push("/Admin")
                  console.log("=============Submitted");
                  console.log(data);
            }
            ).catch((err)=>{
                    console.log("err")
                })
        }
      
        
        }) 
    return (
        <div className="a4">
            <div className="a2">

            </div>
            

             <div className="a5">
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{ color: "black" }}>Admin Login</h3>
                <br></br>

                <div className="form-group">
                    <br></br>
                    <label>Username :</label>
                    <input type="text" name="username" placeholder="Enter username" values={values.username} onChange={handleChange} />
                    <br></br>
                    {errors.username ? errors.username : null}
                </div>
                <br></br>
                <div className="form-group">
                    <br></br>
                    <label>Password :</label>
                    
                    <input type="password" name="password" placeholder="Enter password" values={values.password} onChange={handleChange}/>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                    {errors.password ? errors.password : null}
                </div>
                <br></br>

                <div className="form-group">
                    <div className="">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

              
                <button type="submit" className="btn btn-info ">Sign in</button>
                {"||"}
                <button  className="btn btn-info"onClick={() => history.push("/")}>Back</button>

                
            </form>
            </div>
            
        </div>




    )
}
