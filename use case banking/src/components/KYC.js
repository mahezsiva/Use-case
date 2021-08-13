import React from 'react'
import VerifyButton from "@passbase/button/react";
import axios from 'axios';


export default function KYC() {
  const sendKey = (authkey) => {
    const data={authkey: authkey};
    const headers={
      "Content-Type":"application/json",
    };
    axios.post("https://902e979600f7ffe68b94767dfdebb068.m.pipidream.net",data,{
      headers,
    })
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error));
  };
    return (

        
        <div style={{textAlign:"center"}}>
            <VerifyButton
        apiKey={"2Z93ag8weteCFbB1dS9ok90pSgfvKqN7t1IMJ6zK4W8wkZkQIstwMZRnQ2lXXvUd"}
        
       onFinished={(error,authKey,additionalAttributes)=>{

        if(error){
          console.log(error);
        }else{
          sendKey(authKey);
        }
       }}
       prefillAttributes={{
        email: "user@email.de",
        country: "de"
      }}

       
      />;
         
        </div>
      );
    }
    


