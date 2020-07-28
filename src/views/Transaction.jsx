import React from 'react'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {TransactionData} from 'variables/Variables'
import axios from 'axios';



class TransactionHistory extends React.Component{  
    
    state = {
        payment_list : [],
        TotalEarned : 0,    
        TotalTransfered : 0,    
        TotalRemaining : 0    
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
    axios.get('http://3.123.184.89:5000/admin/payments_page', {
      headers : headers
    })
        .then(response => {
    // console.log(this.props.match.params)
    console.log(response.data)
            this.setState({ 
              payment_list: response.data.data,
              TotalEarned : response.data.total,    
              TotalTransfered : response.data.remaining,    
              TotalRemaining : response.data.transfered 

             });
      console.log("this - > ", this.state)
        })
        .catch(function (error) {
            console.log(error);
        })
  }



    

   render(){

       return(
        <div className="content">
            <Grid fluid>
                <Row>
                <Col lg={4} sm={6}>
                <StatsCard
                    bigIcon={<i className="pe-7s-server text-warning" />}
                    statsText="Total Earned"
                    statsValue={`$${this.state.TotalEarned || 0}`} 
                />
                </Col>
                <Col lg={4} sm={6}>
                <StatsCard
                    bigIcon={<i className="pe-7s-wallet text-success" />}
                    statsText="Total Transfered"
                    statsValue={`$${this.state.TotalTransfered || 0}`} 
                />
                </Col>
                <Col lg={4} sm={6}>
                <StatsCard
                    bigIcon={<i className="pe-7s-graph1 text-danger" />}
                    statsText="Total Remaining"
                    statsValue={`$${this.state.TotalRemaining || 0}`} 
                />
                </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <Card
                        title="Transactions"
                        category="Below is the History"
                        ctTableFullWidth
                        ctTableResponsive
                        content={
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>S.no.</th>
                                    <th>Total Remaining</th>
                                    <th>Transfered</th>
                                    <th>Date</th>
                                    <th>Picture</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {  
                                   
                                   this.state.payment_list.map((trans,index)=>{
                                         return <tr key={index}>
                                             <td>{index}</td>
                                             <td>{trans.total_remaining}</td>
                                             <td>{trans.transfered}</td>
                                             <td>{trans.date}</td>
                                             <td><a href={trans.image} target="_blank"><img className="transaction-img" src={trans.image} alt="transaction slip"/></a></td>
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


        </div>
       );
   }
}

export default TransactionHistory