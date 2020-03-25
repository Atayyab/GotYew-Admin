import React from 'react'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import {TransactionData} from 'variables/Variables'



class SuperAllBrands extends React.Component{  
    
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
                                             <td><img className="transaction-img" src={trans.Picture} /></td>                                             
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

export default SuperAllBrands