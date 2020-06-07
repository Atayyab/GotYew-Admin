import React from 'react'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import {OrdersData} from 'variables/Variables'
import axios from 'axios';



class Orders extends React.Component{  
    
    state = {
        modalIsOpen: false,
        modal2IsOpen: false,
        orders : [],
        orderedPopClass: false,
        Confirmed : false,
        Cutting : false,
        Stitching : false,
        Shipped : false,
        Delivered : false,
        data:{details : []}
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
    
    axios.get('https://cult-node.herokuapp.com/admin/orders', {
      headers : headers
    })
        .then(response => {
    // console.log(this.props.match.params)
    console.log(response.data)
            this.setState({ 
              orders: response.data.data
             });
      console.log("this - > ", this.state)
        })
        .catch(function (error) {
            console.log(error);
        })
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

        if(data.created_at){
          this.setState({
            orderedPopClass: true,          
          }
          );
        }
        if(data.confirmed_date){
          this.setState({
            Confirmed: true,          
          }
          );
        }
        if(data.cutting_date){
          this.setState({
            Cutting: true,          
          }
          );
        }
        if(data.stitching_date){
          this.setState({
            Stitching: true,          
          }
          );
        }
        if(data.shipped_date){
          this.setState({
            Shipped: true,          
          }
          );
        }
        if(data.delivery_date){
          this.setState({
            Delivered: true,          
          }
          );
        }
        
      }
    

    handleOrderedPopClick = () => {
        this.setState({
          orderedPopClass: true,          
        },
            console.log('done')
        );
       
		
    }

    handleConfirmedPopClick = async() => {
        this.setState({Confirmed : true},
            console.log('done')
        ); 
        var data = {
          status : "confirmed",
          id : this.state.data.id
        }
        const headers = {
          // 'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("jwtToken")
          }
		  await axios.post('https://cult-node.herokuapp.com/admin/change_order_status', data, {
				headers : headers
			  })
				.then(res => {
          console.log(res.data)
          this.setState({
            data : {...this.state.data,
              confirmed_date : res.data.data
            }
          });	
        });
    }

    handleCuttingPopClick = async() => {
        this.setState({Cutting : true},
            console.log('done')
        );
        var data = {
          status : "cutting",
          id : this.state.data.id
        }
        const headers = {
          // 'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("jwtToken")
          }
        await axios.post('https://cult-node.herokuapp.com/admin/change_order_status', data, {
				headers : headers
			  })
				.then(res => {
          console.log(res.data)
          this.setState({
            data : {...this.state.data,
              cutting_date : res.data.data
            }
          });	
        });
    }

    handleStitchingPopClick = async() => {
        this.setState({Stitching : true},
            console.log('done')
        );
        var data = {
          status : "stitching",
          id : this.state.data.id
        }
        const headers = {
          // 'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("jwtToken")
          }
        await axios.post('https://cult-node.herokuapp.com/admin/change_order_status', data, {
				headers : headers
			  })
				.then(res => {
          console.log(res.data)
          this.setState({
            data : {...this.state.data,
              stitching_date : res.data.data
            }
          });	
        });
    }

    handleShippedPopClick =async () => {
        this.setState({Shipped : true},
            console.log('done')
        );
        var data = {
          status : "shipped",
          id : this.state.data.id
        }
        const headers = {
          // 'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("jwtToken")
          }
        await axios.post('https://cult-node.herokuapp.com/admin/change_order_status', data, {
				headers : headers
			  })
				.then(res => {
          console.log(res.data)
          this.setState({
            data : {...this.state.data,
              shipped_date : res.data.data
            }
          });	
        });
    }

    handleDeliveredPopClick = async () => {
        this.setState({Delivered : true},
            console.log('done')
        ); 
        var data = {
          status : "delivered",
          id : this.state.data.id
        }
        const headers = {
          // 'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("jwtToken")
          }
        await axios.post('https://cult-node.herokuapp.com/admin/change_order_status', data, {
				headers : headers
			  })
        .then(res => {
          console.log(res.data)
          this.setState({
            data : {...this.state.data,
              delivery_date : res.data.data
            }
          });	
        });
    }
    

   render(){
    const date = new Date()      

    const modalmenuClass = `modal fade ${this.state.modalIsOpen ? "in show" : "hide"}`;       
    const orderedPopClass = ` ${this.state.orderedPopClass ? this.state.data.created_at : "✓" }`;                    
    const confirmedPopClass = ` ${this.state.Confirmed ? this.state.data.confirmed_date : "✓" }`;
    const cuttingPopClass = ` ${this.state.Cutting ? this.state.data.cutting_date : "✓" }`;
    const stitchingPopClass = ` ${this.state.Stitching ? this.state.data.stitching_date : "✓" }`;
    const shippedPopClass = ` ${this.state.Shipped ? this.state.data.shipped_date : "✓" }`;
    const deliveredPopClass = ` ${this.state.Delivered ? this.state.data.delivery_date : "✓" }`;    
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
                                        this.state.orders.map((order,index)=>{
                                         return <tr key={index} onClick={()=>{this.check(order)}}>
                                             <td>{order.id}</td>
                                             <td>{order.user_name}</td>
                                             <td>{order.created_at}</td>
                                             <td>{order.total_price}</td>
                                             <td>{order.status}</td>
                                             <td>{order.total_price - 2}</td>
                                             <td>{2}</td>
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
                <h2 className="user-full-details-name">{this.state.data&&this.state.data.user_name}</h2>
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
                     </tr>
                     {
                       console.log(this.state)}
                     {
                     this.state.data.details.map((details,index)=>{
                                         return <tr key={index} >
                                         <td>{details&&details.quantity}</td>
                                         <td>{details&&details.product_name}</td>
                                         <td>{details&&details.size}</td>
                                         </tr>                                         
                                    })
                                }                     
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