import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import { UserCard } from "components/UserCard/UserCard.jsx";
// import {SuperVerified,brands} from 'variables/Variables'

import axios from 'axios';


class SuperApprovedBrands extends React.Component{  
    
  
    state = {        
        modalIsOpen : false,
        clickedData : [],
        SuperVerified : []
    }
    
    componentDidMount() {
    
        axios.get('http://3.123.184.89:5000/admin/vendor_list_approved')
            .then(response => {
              
        console.log(response.data)
                this.setState({ 
                    SuperVerified : response.data.data
                });
                
          console.log("this - > ", this.state)
            })
            .catch(function (error) {
                console.log(error);
            })
            console.log(this.state)
      }

    closeModal = () => {
        console.log(this.state.clickedData)
        this.setState({ 
            modalIsOpen : false, 
            clickedData : []
        });      
      }

    openModal = (trans) => {        
        //fetching data from uri and populating in state
        this.setState({ 
            modalIsOpen : true,
            clickedData : trans
        });      
      }
    

   render(){
    const modalmenuClass = `modal fade ${this.state.modalIsOpen ? "in show" : "hide"}`;           
    return(
        <div className="content">
            <Grid fluid>                                
                <Row>
                    <Col md={12}>
                    <Card                        
                        title="Approved Brands"
                        category="Below are Approved Brands"
                        ctTableFullWidth
                        ctTableResponsive
                        content={
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Total Orders</th>
                                    <th>Payment Remaining</th>
                                    <th>Verification</th>                                                                       
                                </tr>
                            </thead>
                            <tbody>
                                {  
                                   
                                   this.state.SuperVerified.map((trans,index)=>{
                                         return <tr key={index}>
                                             <td>{trans.id}</td>
                                             <td>{trans.name}</td>
                                             <td>{trans.email}</td>  
                                             <td>{trans.total_orders}</td>  
                                             <td>{trans.payment_remaining}</td>                                             
                                             <td><button className="btn btn-info" onClick={()=>{ this.openModal(trans) }} >Details</button></td>
                                         </tr>                                         
                                    })
                                }
                            </tbody>
                        </Table>
                        }
                        />                       
                    </Col>
                </Row>
            </Grid>


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
            <div className="modal-body user-modal-body">
             <div className="row">                                 
                  <Col md={12}>                    
                    <UserCard                  
                        bgImage={'https://scx2.b-cdn.net/gfx/news/hires/2018/milkyway.jpg'}
                        avatar={this.state.clickedData.image}
                        name={this.state.clickedData.name}
                        userName={this.state.clickedData.city +", "+this.state.clickedData.country}
                        description={
                            <span>                                
                                {this.state.clickedData.description}     
                            </span>
                        }
                        
                        /> 
                        <Table striped hover>
                            <thead><tr>
                    <td><b>Total Orders : </b>{this.state.clickedData.total_orders}</td>
                    <td><b>Pending Payment :</b></td><td> {this.state.clickedData.payment_remaining}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <th>Contact No.</th>                                            
                                    <th>Joined date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.clickedData.address}</td>
                                    <td>
                                        <a href={'tel:'+this.state.clickedData.phone_1}>{this.state.clickedData.phone_1}</a>
                                        <br/>
                                        {/* <a href={'tel:'+this.state.clickedData.brandContactNum2}>{this.state.clickedData.brandContactNum2}</a> */}
                                    </td>
                                    <td>{this.state.clickedData.registered_at}</td>
                                </tr>
                                
                    <tr className="text-center">
                    <td> <Link to={"/admin/orders_list/"+this.state.clickedData.id} className="btn btn-info btn-fill m-10 btn-padding">Orders</Link>
                    </td><td></td><td><Link to={"/admin/payments/"+this.state.clickedData.id} className="btn btn-success btn-fill m-10 btn-padding">Payments</Link>
                       </td> {/* <Link to={"/admin/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link> */}
                    </tr> 
                            </tbody>
                        </Table>                       
                    </Col>
             </div>
            </div> {/*modal-body ends*/}
          </div> 
         </div> 
        </div>
        {/* Modal End*/}

        </div>
       );
   }
}

export default SuperApprovedBrands