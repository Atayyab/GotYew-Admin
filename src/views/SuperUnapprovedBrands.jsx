import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import {SuperUnverified} from 'variables/Variables'



class SuperUnapprovedBrands extends React.Component{  
    
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
                        title="Unapproved Brands"
                        category="Below are Unapproved Brands"
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
                                   
                                   SuperUnverified.map((trans,index)=>{
                                         return <tr key={index}>
                                             <td>{trans.id}</td>
                                             <td>{trans.userName}</td>
                                             <td>{trans.number}</td>                                             
                                             <td><Link to="#" className="btn btn-info">Details</Link></td>                                             
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

export default SuperUnapprovedBrands