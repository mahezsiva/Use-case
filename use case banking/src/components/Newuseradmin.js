import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { register } from "./sevice/authservice";



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeAadhar = this.onChangeAadhar.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangePan = this.onChangePan.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangePhonenumber=this.onChangePhonenumber.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.state = {
        aadhar:"",
        age:"",
        email:"",
        firstname:"",
        lastname:"",
        pan:"",
        password:"",
        phonenumber:"",
        username:"",
        successful: false,
        message: ""
    };
  }
 

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeFirstname(e){
    this.setState({
        firstname: e.target.value
      });

  }

  onChangeLastname(e){
    this.setState({
        lastname: e.target.value
      });

  }
  onChangePan(e){
    this.setState({
        pan: e.target.value
      });

  }
  onChangeAadhar(e){
    this.setState({
        aadhar: e.target.value
      });

  }
  onChangeAge(e){
    this.setState({
        age: e.target.value
      });

  }
  onChangePhonenumber(e){

    this.setState({
        phonenumber: e.target.value
      });
  }


 
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();
    // aadhar, age,email, firstname, lastname, pan, password, phonenumber, username
    if (this.checkBtn.context._errors.length === 0) {
       register(
        this.state.aadhar,
        this.state.age,
        this.state.email,
        this.state.firstname,
        this.state.lastname,
        this.state.pan,
        this.state.password,
        this.state.phonenumber,
        this.state.username,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="aix">
      <div className="ajx">
         

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstname">firstname</label>
                  <Input
                    type="firstname"
                    className="form-control"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChangeFirstname}
                    validations={[required]}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastname">lastname</label>
                  <Input
                    type="lastname"
                    className="form-control"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChangeLastname}
                    validations={[required]}
                  />
                  </div>
                  <div className="form-group">
                  <label htmlFor="pan">Pan</label>
                  <Input
                    type="Pan"
                    className="form-control"
                    name="Pan"
                    value={this.state.pan}
                    onChange={this.onChangePan}
                    validations={[required, vpassword]}
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="aadhar">Aadhar</label>
                  <Input
                    type="aadhar"
                    className="form-control"
                    name="aadhar"
                    value={this.state.aadhar}
                    onChange={this.onChangeAadhar}
                    validations={[required]}
                  />
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <Input
                    type="age"
                    className="form-control"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                    validations={[required]}
                  />
                  </div>
                  <div className="form-group">
                  <label htmlFor="phonenumber">Phone number</label>
                  <Input
                    type="phonenumber"
                    className="form-control"
                    name="phonenumber"
                    value={this.state.phonenumber}
                    onChange={this.onChangePhonenumber}
                    validations={[required]}
                  />
                  </div>
                  

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}