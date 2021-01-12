import React from 'react';
import { Table } from 'react-bootstrap';

import './ExpenseTable.css';

const ExpenseTable = () => {
    return(
        <div className="table">
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Date</th>
      <th>Description</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
     
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}


export default ExpenseTable;