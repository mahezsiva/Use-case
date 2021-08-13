import React, { useState,useEffect,useHistory } from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useParams } from "react-router-dom";


export default function Useredit() {
  
    const panreg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const aadharreg= /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
  
    
  const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatory"),
        lastname : Yup.string().required("lastname is mandatory"),
        email : Yup.string().required("Please Enter a Email"),
        age:Yup.number().typeError("Enter a valid age").min(18," Minimum Age is 18").max(60,"Maximum age is 60"),
        phonenumber : Yup.string().matches(phoneRegExp,"Phone number is invalid").required("phone number cant be empty"),
        aadhar:Yup.string().matches(aadharreg,"enter valid aadhar number").required("aadhar number can't be empty"),
        pan:Yup.string().matches(panreg,"enter a valid pan number").required("pan number is mandatory"),
       
    
    
}) 

const { id } = useParams();
console.log(id);

const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/Register/edit/${id}`);
    setValues(result.data);
    console.log(result.data)
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser();
    
   
}, []);


const {setValues,handleSubmit,handleChange,values,errors} = useFormik({
    
    initialValues: {

    firstname:'',
    lastname:'',
    email:'',
    age:0,
    phonenumber: '',
    aadhar:'',
    pan:'',
  
   
 
  },
  validationSchema,
  onSubmit(values) {
      const url="http://localhost:8080/Register/manage/"+values.id;
    axios.put(url,values).then(res=>res.data).then((data)=>{
          alert("user updated successfully");
          console.log("=============Submitted");
          console.log(data);
    }
    ).catch((err)=>{
            console.log("err")
        })
}

}) 
 
  
 

    return (
        <div>
            
            <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>Update profile</h4></div>
            <form onSubmit={handleSubmit} noValidate>

           
                <div>
                    <label>First Name</label><br></br>
                    <input type="text" name="firstname" onChange={handleChange} values={values.firstname}/><br></br>
                    <div className="error">
                    {errors.firstname ? errors.firstname : null}
                    </div>
                </div>
                <div>
                    <label>Last Name</label><br></br>
                    <input type="text" name="lastname" onChange={handleChange} values={values.lastname}/><br></br>
                    <div className="error">
                    {errors.lastname ? errors.lastname : null}
                    </div>
                </div>

                <div>
                    <label>Age</label><br></br>
                    <input type="number" name="age" onChange={handleChange} values={values.age}/><br></br>
                    <div className="error">
                    {errors.age ? errors.age : null}
                    </div>
                </div>
                <div>
                    <label>Email</label><br></br>
                    <input type="text" name="email" onChange={handleChange} values={values.email}/><br></br>
                    <div className="error">
                    { errors.email ? errors.email : null}
                    </div>
                </div>

                <div>
                    <label>Phone Number</label><br></br>
                    <input type="text" name="phonenumber" onChange={handleChange} values={values.phonenumber}/><br></br>
                    <div className="error">
                    {errors.phonenumber ? errors.phonenumber : null}
                    </div>
                </div>
                <div>
                    <label>Aadhar Number</label><br></br>
                    <input type="text" name="aadhar" onChange={handleChange} values={values.aadhar}/><br></br>
                    <div className="error">
                    {errors.aadhar ? errors.aadhar : null}
                    </div>
                </div>
                <div>
                    <label>Pan Number</label><br></br>
                    <input type="text" name="pan" onChange={handleChange} values={values.pan}/><br></br>
                    <div className="error">
                    {errors.pan ? errors.pan : null}
                    </div>
                </div>
  
  <br></br>
  <button class="btn btn-secondary"  type="submit" >Update User</button>
  
</form>
        </div></div></div></div>
        
)}