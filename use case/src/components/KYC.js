import React from 'react'
import VerifyButton from "@passbase/button/react";

export default function KYC() {
    return (

        
        <div style={{backgroundColor:"red"}}>
          <VerifyButton
            apiKey={"YOUR_API_KEY"}
            onFinished={(error,authKey,additionalAttributes) => {}}
           
          />
        
        </div>
      );
    }
    


