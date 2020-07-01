// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRowPayments extends Component {

  constructor(props){
    console.log('props',props);

    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(){ 
    const obj = {
    id: this.props.obj.product_id
  };
  console.log("delete : ",this.props)
  
  const headers = {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem("jwtToken")
    }
    axios.post('http://3.123.184.89:5000/admin/delete_product',obj, {
      headers : headers
      })
            .then(res => {
              console.log('deleted');
              this.props.delete(this.props.indice);
            })
            .catch(err => console.log(err))
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td >
            {this.props.obj.total_remaining}
          </td>
          <td>
            {this.props.obj.transfered}
          </td>          
          <td>
            {this.props.obj.date}
          </td>          
          <td>
            <img src={this.props.obj.image} className="transaction-img" />
          </td>
          {/* <td>
            <Link to={"/admin/editProduct/"+this.props.obj.product_id} className="btn btn-primary">Edit</Link>
          
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td> */}
        </tr>
    );
  }
}

export default TableRowPayments;