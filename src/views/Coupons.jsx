/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import { Link } from 'react-router-dom';
import Card from "components/Card/Card.jsx";
import TableRowCoupons from './TableRowCoupons';
import TableRowAddon from './TableRowAddon';
// import { SubsArray } from "variables/Variables.jsx";
import axios from 'axios';

class Coupons extends Component {

  constructor(props){
    super(props)
    this.state = {
      addons_data: [], product_list : [],     
      business : [
        {          
          id: 1,          
          name: "t-shirt",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sapiente",
          picture: 'https://lateinvoicetips.com/wp-content/uploads/2020/01/invoicing.jpg',
          amount: "30",
          size: "M",
          quantity: "15",
          waist: "34",
          height: "42",
          color:"green"
        },
        {          
          id: 6,
          name: "t-shirt",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sapiente",
          picture: 'https://lateinvoicetips.com/wp-content/uploads/2020/01/invoicing.jpg',
          amount: "30",
          size: "M",
          quantity: "15",
          chest: "24",
          height: "42",
          sleeve:"short"         
        },
      ]
    }
  }

  
  componentDidMount() {
    
    if(!localStorage.getItem("jwtToken")){
      // console.log("=====================")
      this.props.history.push("/")
    }
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem("jwtToken")
    }
    
    console.log("this - > ", headers)
    axios.get('http://3.123.184.89:5000/admin/product_list', {
      headers : headers
    })
        .then(response => {
    // console.log(this.props.match.params)
    console.log(response.data)
            this.setState({ 
              product_list: response.data.product_list
             });
      console.log("this - > ", this.state)
        })
        .catch(function (error) {
            console.log(error);
        })
  }


  deleteItem(i) {
  let rows = [...this.state.product_list]
  rows.splice(i, 1)
  this.setState({ 
    product_list: rows
  })
  console.log(rows, " --- " , this.state)
}
	tabRow(){
		console.log(this.state);
		return this.state.product_list.map((object, i) => {
			console.log(object,i);
			return <TableRowCoupons obj={object} key={i} indice={i} delete ={ (ind) => this.deleteItem(ind)} />;
		});
	}
  
	// tabRowAddon(){
	// 	console.log(this.state);
	// 	return this.state.addons_data.map((object, i) => {
	// 		console.log(object,i);
	// 		return <TableRowAddon obj={object} key={i} indice={i} delete ={ (ind) => this.deleteItem(ind)} />;
	// 	});
	// }

  // componentDidMount(){
  //   axios.get('')
  //   .then(response =>{
  //     console.log(response.data)
  //     this.setState({business : response.data});
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })
    
  //   if(!localStorage.getItem("jwtToken")){
  //     // console.log("=====================")
  //     this.props.history.push("/")
  // }
    
  // }





  render() {
    return (        
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Products"
                category="Here is a list of Products"
                ctTableFullWidth
                ctTableResponsive
                content={      
                  <div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"></div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3"></div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3"></div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3"></div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3"></div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                    
            <Link to={"/admin/addProduct"} className="btn btn-success">Create New</Link>                      
                  </div>  
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3"></div>
                  </div>             
                  <Table striped hover>                    
                     <thead>
		              <tr>
		                <th>S.no</th>
		                <th colSpan="2">Product Name</th>
		                <th>Price</th>		                
		                <th>Category</th>		                
		                <th>Action</th>
		              </tr>
		            </thead>
		            <tbody>
		              { this.tabRow() }
		            </tbody>
                  </Table>
                  </div>
                }
              />
            </Col>
            
            
          </Row>
        </Grid>
       
        
      </div>
    );
  }
}

export default Coupons;