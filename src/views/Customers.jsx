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
import { Grid, Row, Col } from "react-bootstrap";

import { Link } from 'react-router-dom';
import Card from "components/Card/Card.jsx";
import axios from 'axios';

class Customers extends Component {

constructor(props){
  super(props)
  this.state = {
    modalIsOpen: false,
    activeUser: '',
    people: []
  }
}

componentDidMount(){
  // const url = 'https://gofix-node.herokuapp.com/admin/mechanic_list'
  const url = 'http://3.123.184.89:5000/admin/users_list'

  fetch(url)
   .then( response  => response.json() )
   .then( response => {
    console.log(response)
         this.setState({
             people: response
         })
   } ) 
}
blockUser =() =>{ 
  const obj = {
  id: this.state.activeUser.id
};
var stateObj = this.state.activeUser;
console.log(obj.id)
var direct = "block_user";
  if(this.state.activeUser.status === "blocked"){
    direct = "blocked_user_update"
    stateObj.status = "live";
  }else{
    stateObj.status = "blocked";
  }

    console.log(direct);
  axios.post('http://3.123.184.89:5000/admin/'+direct,obj)
          .then(res => {
            console.log('status updated');
          })
          .catch(err => console.log(err))

          
          this.setState({
            activeUser: stateObj
        })

}

modalToggle = () => {  
  this.setState({ modalIsOpen : true });        
}

closeModal = () => {
  this.setState({ modalIsOpen : false });      
}

clickedUser = (data) => {
   this.setState({
     activeUser: data
   })
   this.modalToggle()
  //  console.log(this.state.activeUser)
}

handleSearch = (txt) =>{  
  console.log('worked ', txt);
  axios.get('http://3.123.184.89:5000/admin/users_list_search?text='+txt)
  .then(response =>{
    console.log(response.data)
    this.setState({people : response.data});
  })
  .catch(function(error){
    console.log(error);
  })
}


  render() {
     const data = this.state.people
     
     const modalmenuClass = `modal fade ${this.state.modalIsOpen ? "in displayBlock" : ""}`

    return (
      <div className="content">
        <Grid fluid>
          <Row>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12"></div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <div className="search-box">
              <form onSubmit={(event)=>{ event.preventDefault(); this.handleSearch(event.target.searchTxt.value) }}>
                <div className="form-group">
                  <input type="text" id = "searchTxt" className="form-control search-field-table" placeholder="search.."/>
                  <input type="submit" className="form-control" value="Search"/>
                </div>                                               
              </form>                      
            </div>  
            </div>
            
            <Col md={12}>
              { data.map( (people, index) => {
                  
                 return(
                  <div>
 
                  <div>
                  <Col md={3} key={index}>
                    <Card title={people.name} category={people.username}
                    
                      content={
                        <div className="text-center">
                            <img className="user-avatar" src={people.image} alt="users"/>
                            <div>                            
                            <button className="btn-fill btn btn-info theme-btn" onClick={()=>{this.clickedUser(people)}}>View</button>
                            </div>                            
                        </div>
                      }
                    />              
                  </Col>
                 </div>
                 </div>
                 )
              } ) }
              {/* Modal */}
              
              <div className={ modalmenuClass } role="dialog" tabIndex={-1} aria-labelledby="mySmallModalLabel">
                <div className="modal-dialog modal-md" role="document"> 
                  <div className="modal-content"> 
                    <div className="modal-header"> 
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={this.closeModal}>×</span>
                      </button> 
                      <h4 className="modal-title" id="mySmallModalLabel">Details</h4> 
                    </div> 
                    <div className="modal-body">
                      <div className="text-center">
                        <img className="user-avatar" src={this.state.activeUser.image} alt={this.state.activeUser.name} width="500" height="600" />
                      </div>                                           
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <p>Id: {this.state.activeUser.id}</p>                    
                          <p>Name: {this.state.activeUser.name}</p>               
                          <p style={this.state.activeUser.status === "live" ? {} : { color: 'red' }}>Status: {this.state.activeUser.status}</p>                    
                                         
                          <p>Phone : {this.state.activeUser.total_orders || 0}</p>   
                          <p>Total Orders : {this.state.activeUser.phone}</p> 
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <p>Gender: {this.state.activeUser.gender}</p>                    
                          <p>Points : {this.state.activeUser.points}</p>     
                          <p>Email: {this.state.activeUser.email}</p>      
                          <p>Amount Spent: {this.state.activeUser.total_amount_spent || 0}</p>      
                        </div>                                                                          
                      </div>                                                          
                    </div>
                    <div className="text-center">
                       <button onClick = {this.blockUser} className="btn btn-danger btn-fill m-10 btn-padding">{ this.state.activeUser.status === "live" ? "Block" : "Unblock" }</button>
                       <Link to={"/admin/user_orders_list/"+this.state.activeUser.id} className="btn btn-info btn-fill m-10 btn-padding">Orders</Link>
                    </div> 
                  </div> 
                </div> 
              </div>

              {/* Modal End*/}                
            </Col>
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Customers;
