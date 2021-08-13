import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import AuthService from "./Services/auth.service";
import {login} from "./sevice/authservice";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Userlogin from "./Userlogin";
import Navbarex from"./Navbarex";
import {useFormik} from 'formik';
import * as Yup from 'yup';

// var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// const validationSchema = Yup.object({
//     // u: Yup.string().required("Username is mandatory"),
//     password : Yup.string().required(regularExpression,"Password should include alphates,special characters and numbers").required("password can't be empty"),
 
// }) 
// //  password : Yup.string().required(regularExpression,"Password should include alphates,special characters and numbers").required("password can't be empty"),
const usernamerequired = (value) => {
   
   
  if (!value ) {
    return (
      <div className="alert alert-danger" role="alert">
        Username is mandatory
      </div>
    );
  }
};
const passwordrequired = (value) => {
    
   
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
      password is mandatory
      </div>
    );
  }
};

        
const TestLogin = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);
    
    form.current.validateAll();
   
    if (checkBtn.current.context._errors.length === 0) {
      login(username, password).then(
        () => {
          history.push("/Userlogin");
          window.location.reload();
        }, (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

    
  return (
      <div className="pipa">

          
    <Router>
      <br></br>
      <br></br>
      <br></br>
    <div className="piya"></div>
    <div className="a3">
      <div className="a1">
        <Form onSubmit={handleLogin} ref={form}>
        <h4 style={{color:"brown"},{backgroundColor:"wheat"}}> LOGIN</h4>
          <div className="form-group">
          <br></br>
      <br></br>
      
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[usernamerequired]}
            />
          </div>

          <div className="form-group">
          
      
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[passwordrequired]}
            />
          </div>
          <br></br>
      

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
    </Router>
    </div>
  
  );
  }
  export default TestLogin;