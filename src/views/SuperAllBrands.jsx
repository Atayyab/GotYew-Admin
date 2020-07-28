import React from 'react'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import { brands} from 'variables/Variables'
import { UserCard } from "components/UserCard/UserCard.jsx";

import axios from 'axios';



class SuperAllBrands extends React.Component{  

    
    state = {
        modalIsOpen: false,
        modal2IsOpen: false,
        clickedData : [],  
        approveBrand : true,   
        SuperAll : [],
        unapproveBrand : false   
    }
    
    componentDidMount() {
    
        axios.get('http://3.123.184.89:5000/admin/vendor_list')
            .then(response => {
              
        console.log(response.data)
                this.setState({ 
                    SuperAll : response.data.data
                });
                
          console.log("this - > ", this.state)
            })
            .catch(function (error) {
                console.log(error);
            })
            console.log(this.state)
      }

    closeModal = () => {
        this.setState({ 
            modalIsOpen : false, 
        });      
      }

    openModal = (data) => {
        console.log(data)
        //fetching data from uri and populating in state
        this.setState({ 
            modalIsOpen : true,
            clickedData : data
        });      
      }

    closeModal2 = () => {
        this.setState({ 
            modal2IsOpen : false, 
        });      
      }
    

    checkboxChecked = (e,data) => {
        // console.log(data)
        //fetching data from uri and populating in state  
        e.preventDefault();
        this.setState({ 
            modal2IsOpen : true,
            approveBrand : data            
        });    
        // approveSingleBrand(data)      
      }


    approveSingleBrand = (data) => {
        var d = {
            id : data
        }
        axios.post('http://3.123.184.89:5000/admin/vendor_approve', d)
            .then(response => {
              
        console.log(response.data)
                
          console.log("this - > ", this.state)
            })
            .catch(function (error) {
                console.log(error);
            })
        // in data there is an id of the brand which is clicked
        console.log(data);
        this.setState({ 
            modal2IsOpen : false,                      
            // unapproveBrand : true
        });
        window.location.reload();
    }  
    


   render(){

    const modalmenuClass = `modal fade ${this.state.modalIsOpen ? "in show" : "hide"}`;   
    const modalmenuClass2 = `modal fade ${this.state.modal2IsOpen ? "in show" : "hide"}`;   

       return(
        <div className="content">
            <Grid fluid>                                
                <Row>
                    <Col md={12}>
                    <Card                        
                        title="All Brands"
                        category="Below are All Brands"
                        ctTableFullWidth
                        ctTableResponsive
                        content={
                        <Table striped hover>
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Verification</th>                                                                       
                                </tr>
                            </thead>
                            <tbody>
                                {  
                                   
                                   this.state.SuperAll.map((trans,index)=>{
                                         return <tr key={index}>
                                             {/* <td>{trans.id}</td> */}
                                             <td>{trans.name}</td>
                                             <td>{trans.email}</td>                                             
                                             <td>{trans.status === 'live' ? <input type="checkbox" checked={this.state.approveBrand} /> : <input type="checkbox" checked={this.state.unapproveBrand} onChange={(e)=>{this.checkboxChecked(e,trans)}}/>}</td>
                                             <td><button className="btn btn-info" onClick={()=>{this.openModal(trans)}} >Details</button></td>                                             
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
                            <thead>
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
                            </tbody>
                        </Table>                       
                    </Col>
             </div>
            </div> {/*modal-body ends*/}
          </div> 
         </div> 
        </div>
        {/* Modal End*/}


{/* Modal */}
  <div className={ modalmenuClass2 } role="dialog" tabIndex={-1} aria-labelledby="mySmallModalLabel">
         <div className="modal-dialog modal-md" role="document"> 
          <div className="modal-content"> 
            <div className="modal-header"> 
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" onClick={this.closeModal2}>×</span>
              </button> 
              <h4 className="modal-title" id="mySmallModalLabel">Details</h4> 
            </div> 
            <div className="modal-body">
             <div className="row">
                <div className="col-lg-2">
                </div>                                           
                <div className="col-lg-8">
                   <h3>Are you sure you want to approve <b>{this.state.approveBrand.name}</b>??</h3>
                </div>                                           
                <div className="col-lg-2">
                </div>                                           
                                
             </div>
            </div> {/*modal-body ends*/}
            <div className="modal-footer">
                    <button className="btn btn-success" onClick={()=>{this.approveSingleBrand(this.state.approveBrand.id)}} >Yes</button>              
                    <button className="btn btn-danger" onClick={this.closeModal2} >No</button>  
            </div>
          </div> 
         </div> 
        </div>
        {/* Modal End*/}



        </div>
       );
   }
}

export default SuperAllBrands