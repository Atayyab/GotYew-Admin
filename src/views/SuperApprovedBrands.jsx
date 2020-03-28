import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card";
import {SuperVerified} from 'variables/Variables'



class SuperApprovedBrands extends React.Component{  
    

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

export default SuperApprovedBrands