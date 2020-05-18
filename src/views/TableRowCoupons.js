// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class TableRowCoupons extends Component {

  constructor(props){
    console.log('props',props);

    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(){ 
    const obj = {
    id: this.props.obj.id
  };
  console.log(this.props)
    // axios.post('https://catchcatchapp.com/admin/delete_coupons',obj)
    //         .then(res => {
    //           console.log('deleted');
    //           this.props.delete(this.props.indice);
    //         })
    //         .catch(err => console.log(err))
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td colSpan="2">
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.amount}
          </td>          
          <td>
            <img src={this.props.obj.picture} className="transaction-img" />
          </td>          
          <td>
            <Link to={"/admin/editProduct/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRowCoupons;