// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRowCoupons extends Component {

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
            {this.props.obj.product_id}
          </td>
          <td colSpan="2">
            {this.props.obj.product_name}
          </td>
          <td>
            {this.props.obj.product_price}
          </td>          
          <td>
            {this.props.obj.product_category}
          </td>          
          {/* <td>
            <img src={this.props.obj.product_image} className="transaction-img" />
          </td>           */}
          <td>
            <Link to={"/admin/editProduct/"+this.props.obj.product_id} className="btn btn-primary">Edit</Link>
          
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRowCoupons;