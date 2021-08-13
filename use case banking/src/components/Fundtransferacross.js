
import React,{callback} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useHistory} from "react-router-dom";
import { Button } from "react-bootstrap";





export default function Fundtransferacross() {
    const history = useHistory();
    var re = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
    const validationSchema = Yup.object({
        Accountnumber : Yup.string().required("Account number is mandatory").matches(re,"account no is invalid"),
        Accountlocation : Yup.string().required("location is mandatory"),
        Totransfer: Yup.number().required("Transfer amount is mandatory").min(500,"minimum amount is 500").max(20000,"maximum amount is 20000"),
        TransferAccount:Yup.string().required("Transfer Account number is mandatory").matches(re,"account is invalid"),
       
    }) 

    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            Accountnumber:'',
            Accountlocation:'',
            Totransfer:'',
            TransferAccount:'',
            Reason:''
           
            
        },
        validationSchema,
        onSubmit(values) {
            
            console.log(values);
           
        }
    }) 

    return (
        <div className="ajk">
          <h1><div style={{color:"violet",backgroundcolor:"red"}}>TRANSACTION ACROSS BANK</div></h1>  
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Account number</label><br></br>
                    <input type="number" name="Accountnumber" onChange={handleChange} placeholder="enter your account no"values={values.Accountnumber}/><br></br>
                    <div className="error">
                    {errors.Accountnumber ? errors.Accountnumber : null}
                    </div>
                   
                </div>
                <div>
                    <label>Account location</label><br></br>
                    <input type="text" name="Accountlocation" onChange={handleChange} placeholder="enter the bank location"values={values.Accountlocation}/><br></br>
                    <div className="error">
                    {errors.Accountlocation? errors.Accountlocation: null}
                    </div>
                </div>
                <div>
                    <label>Transfer Account number</label><br></br>
                    <input type="number" name="TransferAccount" onChange={handleChange} placeholder="enter your account no"values={values.TransferAccount}/><br></br>
                    <div className="error">
                    {errors.TransferAccount ? errors.TransferAccount : null}
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
 
                <Button type="submit"  variant="success">Send</Button>

                {"||"}
                <Button  variant="success" onClick={() => history.push("/Fundtransferacross")}>Back</Button>
            </form>
        </div>
    )
}