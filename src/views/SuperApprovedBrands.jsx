import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import { UserCard } from "components/UserCard/UserCard.jsx";
import {SuperVerified,brands} from 'variables/Variables'



class SuperApprovedBrands extends React.Component{  
    
  
    state = {        
        modalIsOpen : false,
        clickedData : [],
    }
    

    closeModal = () => {
        this.setState({ 
            modalIsOpen : false, 
            clickedData : []
        });      
      }

    openModal = (trans) => {        
        //fetching data from uri and populating in state
        this.setState({ 
            modalIsOpen : true,
            clickedData : brands
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
                        title="All Brands"
                        category="Below are All Brands"
                        ctTableFullWidth
                        ctTableResponsive
                        content={
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Contact no.</th>
                                    <th>Verification</th>                                                                       
                                </tr>
                            </thead>
                            <tbody>
                                {  
                                   
                                   SuperVerified.map((trans,index)=>{
                                         return <tr key={index}>
                                             <td>{trans.id}</td>
                                             <td>{trans.userName}</td>
                                             <td>{trans.number}</td>                                             
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
            <div className="modal-body">
             <div className="row">                                 
                  <Col md={12}>                    
                    <UserCard                  
                        bgImage={this.state.clickedData.brandBanner}
                        avatar={this.state.clickedData.brandImg}
                        name={this.state.clickedData.brandName}
                        userName={this.state.clickedData.brandType}
                        description={
                            <span>                                
                                {this.state.clickedData.brandDesc}     
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
                                    <td>{this.state.clickedData.brandAddress}</td>
                                    <td>
                                        <a href={'tel:'+this.state.clickedData.brandContactNum1}>{this.state.clickedData.brandContactNum1}</a>
                                        <br/>
                                        <a href={'tel:'+this.state.clickedData.brandContactNum2}>{this.state.clickedData.brandContactNum2}</a>
                                    </td>
                                    <td>{this.state.clickedData.brandJoinDate}</td>
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