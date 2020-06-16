import React from 'react'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {TransactionData} from 'variables/Variables'



class TransactionHistory extends React.Component{  
    
    state = {
        TotalEarned : 10500,    
        TotalTransfered : 1345,    
        TotalRemaining : 1345    
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
                    statsValue={`$${this.state.TotalEarned}`}
                    statsIcon={<i className="fa fa-refresh" />}
                    statsIconText="Last Month"
                />
                </Col>
                <Col lg={4} sm={6}>
                <StatsCard
                    bigIcon={<i className="pe-7s-wallet text-success" />}
                    statsText="Total Transfered"
                    statsValue={`$${this.state.TotalTransfered}`}
                    statsIcon={<i className="fa fa-calendar-o" />}
                    statsIconText="Last Month"
                />
                </Col>
                <Col lg={4} sm={6}>
                <StatsCard
                    bigIcon={<i className="pe-7s-graph1 text-danger" />}
                    statsText="Total Remaining"
                    statsValue={`$${this.state.TotalRemaining}`}
                    statsIcon={<i className="fa fa-clock-o" />}
                    statsIconText="Last Month"
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
                                   
                                   TransactionData.map((trans,index)=>{
                                         return <tr key={index}>
                                             <td>{trans.id}</td>
                                             <td>{trans.Remaining}</td>
                                             <td>{trans.Transfered}</td>
                                             <td>{trans.Date}</td>
                                             <td><a href={trans.Picture} target="_blank"><img className="transaction-img" src={trans.Picture} alt="transaction slip"/></a></td>
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