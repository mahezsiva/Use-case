import React,{callback} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useHistory} from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from 'axios';





export default function Fundtransfer() {
    const history = useHistory();
    var re = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
    const validationSchema = Yup.object({
      
        email : Yup.string().required("Please Enter a Email"),
        toemail : Yup.string().required("Please Enter a Email"),
        Totransfer: Yup.number().required("Transfer amount is mandatory").min(500,"minimum amount is 500").max(20000,"maximum amount is 20000"),
       
    }) 

    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
           email:'',
           toemail:'',
           Totransfer:'',
           
            
        },
        validationSchema,
        onSubmit(values) {
            console.log(values);
            axios.post("http://localhost:8080/Transfer/add",values).then(res=>res.data).then((data)=>{
                  alert("verifying please wait");
                  console.log("=============Submitted");
                  console.log(data);
            }
            ).catch((err)=>{
                    console.log("err")
                })
        }
      
        
        }) 

    return (
        <div className="ajj">
          <h1><div style={{color:"violet"}}>TRANSACTION PAGE</div></h1>  
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Email</label><br></br>
                    <input type="email" name="email" onChange={handleChange} placeholder="enter your email"values={values.email}/><br></br>
                    <div className="error">
                    {errors.email ? errors.email : null}
                    </div>
                   
                </div>
                <div>
                    <label>To Email</label><br></br>
                    <input type="toemail" name="toemail" onChange={handleChange} placeholder="enter sender email"values={values.toemail}/><br></br>
                    <div className="error">
                    {errors.toemail? errors.toemail: null}
                    </div>
                </div>
               

                <div>
                    <label>Transfer Amount</label><br></br>
                    <input type="number" name="Totransfer" onChange={handleChange}placeholder="enter the amount" values={values.Totransfer}/><br></br>
                    <div className="error">
                    {errors.Totransfer ? errors.Totransfer : null}
                    </div>
                </div>
                <div>
                    <label>Reason</label><br></br>
                    <input type="textarea" name="Reason" onChange={handleChange}placeholder="enter the Reason" values={values.Reason}/><br></br>
                    
                </div>
                
                <br></br>
 
                <Button type="submit"  variant="success">Submit</Button>

                {"||"}
                <Button  variant="success" onClick={() => history.push("/Fund transfer")}>Back</Button>
            </form>
        </div>
    )
}