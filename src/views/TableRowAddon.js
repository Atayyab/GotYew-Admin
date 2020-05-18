// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class TableRow extends Component {

  constructor(props){
    console.log('props',props);

    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(){ 
    const obj = {
    id: this.props.obj.id
  };
  console.log(obj.id)
    // axios.post('https://catchcatchapp.com/admin/temp_user_delete',obj)
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
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.quantity}
          </td>
          <td>
            {this.props.obj.days}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            <Link to={"/admin/editAddon/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          {/* <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td> */}
        </tr>
    );
  }
}

export default TableRow;