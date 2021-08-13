import React from 'react'
import { Table} from "react-bootstrap";

export default function Transactions() {
    return (
        <div>
             <h3 style={{color:"brown"}}>Transaction details</h3>

<Table striped bordered hover size="lg" >
<thead>
<tr>
<th>Serial no</th>
<th>Transaction id</th>
<th>Transfered to</th>
<th>Transfered amount</th>
<th>Transfered succesfull</th>
<th>Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>123432</td>
<td>434124</td>
<td>12000</td>
<td>yes</td>
<td>12.50</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>

</tbody>
</Table>
    
        </div>
    )
}
