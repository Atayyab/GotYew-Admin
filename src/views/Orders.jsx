import React from 'react'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import {OrdersData} from 'variables/Variables'



class Orders extends React.Component{  
    
    state = {
        modalIsOpen: false,
        modal2IsOpen: false,
        orderedPopClass: false,
        Confirmed : false,
        Cutting : false,
        Stitching : false,
        Shipped : false,
        Delivered : false,
        data:''
    }
    

    closeModal = () => {
        this.setState({ 
            modalIsOpen : false,
            orderedPopClass: false,
            Confirmed : false,
            Cutting : false,
            Stitching : false,
            Shipped : false,
            Delivered : false, 
        });      
      }    

      check=(data)=>{  
        this.setState({
           modalIsOpen : true,
           data:data
        })      
        console.log(this.state)  
      }
    

    handleOrderedPopClick = () => {
        this.setState({
          orderedPopClass: true,          
        },
            console.log('done')
        );
    }

    handleConfirmedPopClick = () => {
        this.setState({Confirmed : true},
            console.log('done')
        );
    }

    handleCuttingPopClick = () => {
        this.setState({Cutting : true},
            console.log('done')
        );
    }

    handleStitchingPopClick = () => {
        this.setState({Stitching : true},
            console.log('done')
        );
    }

    handleShippedPopClick = () => {
        this.setState({Shipped : true},
            console.log('done')
        );
    }

    handleDeliveredPopClick = () => {
        this.setState({Delivered : true},
            console.log('done')
        );
    }
    

   render(){
    const date = new Date()      

    const modalmenuClass = `modal fade ${this.state.modalIsOpen ? "in show" : "hide"}`;       
    const orderedPopClass = ` ${this.state.orderedPopClass ? date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear() : "✓" }`;                    
    const confirmedPopClass = ` ${this.state.Confirmed ? date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear() : "✓" }`;
    const cuttingPopClass = ` ${this.state.Cutting ? date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear() : "✓" }`;
    const stitchingPopClass = ` ${this.state.Stitching ? date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear() : "✓" }`;
    const shippedPopClass = ` ${this.state.Shipped ? date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear() : "✓" }`;
    const deliveredPopClass = ` ${this.state.Delivered ? date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear() : "✓" }`;    
       return(
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                    <Card
                        title="Orders"
                        category="Here is a subtitle for this table"
                        ctTableFullWidth
                        ctTableResponsive
                        content={
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>S.no.</th>
                                    <th>User Full Name</th>
                                    <th>Order Date</th>
                                    <th>Order Amount</th>
                                    <th>Status</th>
                                    <th>Your Total</th>
                                    <th>Cult Cut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {  
                                        // userName: "Jesse",
                                        // orderDate: "08-03-2020",
                                        // orderAmount: "$782.00",
                                        // orderStatus: "ordered",
                                        // total: "600",
                                        // cultCut: "182",
                                        // itemQuantity: "2",  
                                        // itemName:"Black Hoodie",
                                        // itemSize:"L"                                 
                                   OrdersData.map((order,index)=>{
                                         return <tr key={index} onClick={()=>{this.check(order)}}>
                                             <td>{order.id}</td>
                                             <td>{order.userName}</td>
                                             <td>{order.orderDate}</td>
                                             <td>{order.orderAmount}</td>
                                             <td>{order.orderStatus}</td>
                                             <td>{order.total}</td>
                                             <td>{order.cultCut}</td>
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
             <div className="col-lg-12">                 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="user-full-details-name">{this.state.data&&this.state.data.name}</h2>
                  <div className="content table-full-width table-responsive">
                   <table className="user-full-details table table-striped table-hover">
                   <thead>
                       <tr>
                           <th>Item Quantity</th>
                           <th>Item Name</th>
                           <th>Item Size</th>
                       </tr>
                   </thead>
                    <tbody>
                     <tr>                       
                       <td>{this.state.data&&this.state.data.itemQuantity}</td>
                       <td>{this.state.data&&this.state.data.itemName}</td>
                       <td>{this.state.data&&this.state.data.itemSize}</td>
                     </tr>                     
                     </tbody> 
                   </table>
                  </div> 
                                                            
                </div> 
                <div className="col-lg-12">
                <div className="content table-full-width table-responsive">
                   <table className="user-full-details table table-striped table-hover">
                   <thead>
                     <span className="error">Note: Tapping tick mark will send a notification to user about the status of this order.</span>
                       <tr>
                           <th>Status</th>
                           <th>Date</th>                           
                       </tr>
                   </thead>
                    <tbody>
                     <tr>                       
                       <td>Ordered</td>
                       <td> <span onClick={ ()=>{ if(window.confirm("Are you sure the status of this order is Ordered? This willl send a notification to the user and they'll be informed of this. Please note that this action cannot be reverted")){this.handleOrderedPopClick()} } }> { orderedPopClass } </span> </td>
                     </tr>                     
                     <tr>                       
                       <td>Confirmed</td> 
                       <td> 
                         <span onClick={ () => { if(window.confirm("Are you sure the status of this order is Confirmed? This willl send a notification to the user and they'll be informed of this. Please note that this action cannot be reverted")){ this.handleConfirmedPopClick() } } }> 
                           { confirmedPopClass } 
                         </span> </td>                      
                     </tr>                     
                     <tr>                       
                       <td>Cutting</td>    
                       <td> <span onClick={ () =>{ if(window.confirm("Are you sure the status of this order is Cutting? This willl send a notification to the user and they'll be informed of this. Please note that this action cannot be reverted")) { this.handleCuttingPopClick() } } }> { cuttingPopClass } </span> </td>                                          
                     </tr>                     
                     <tr>                       
                       <td>Stitching</td>  
                       <td> <span onClick={ ()=>{ if(window.confirm("Are you sure the status of this order is Stitching? This willl send a notification to the user and they'll be informed of this. Please note that this action cannot be reverted")) {this.handleStitchingPopClick()}  } }> { stitchingPopClass } </span> </td>                                            
                     </tr>                     
                     <tr>                       
                       <td>Shipped</td>  
                       <td> <span onClick={  ()=>{  if(window.confirm("Are you sure the status of this order is Shipped? This willl send a notification to the user and they'll be informed of this. Please note that this action cannot be reverted")){this.handleShippedPopClick()}  }  }> { shippedPopClass } </span> </td>                                                        
                     </tr>                     
                     <tr>                       
                       <td>Delivered</td>  
                       <td> <span onClick={ ()=>{ if(window.confirm("Are you sure the status of this order is Delivered? This willl send a notification to the user and they'll be informed of this. Please note that this action cannot be reverted")){this.handleDeliveredPopClick()} } }> { deliveredPopClass } </span> </td>                                                        
                     </tr>                     
                     </tbody> 
                   </table>
                  </div> 
                </div>
                <div className="col-lg-6">

                </div>
             </div> 
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

export default Orders