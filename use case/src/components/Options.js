import React from 'react'
import { Button,Nav } from "react-bootstrap";
import { useHistory} from "react-router-dom";

export default function Options() {
    const history = useHistory();
    return (
   
    <div className="pi">
        <br></br>
        <br></br>
        <div className="pi1"><h2>Select your desired transfer type</h2></div>
        <br></br>
        <br></br>
        <br></br>
        <div className="d-grid gap-2">
  <Button variant="secondary" size="lg" onClick={() => history.push("/Fundtransfer")}>
    Transfer within bank
  </Button>
  <br></br>
  <br></br>
  <br></br>
  <Button variant="secondary" size="lg">
    Transfer with international bank
  </Button>
</div>
            
        </div>
    )
}
