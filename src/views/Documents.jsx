import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import {DocsData} from '../variables/Variables'

class Documents extends Component {
  render(){      
      return(
        <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
             <Card
                title="Documents"
                category="Below are Documents"
                ctTableFullWidth
                ctTableResponsive
                content={
                    <Table striped hover>
                            <thead>
                                <tr>
                                    <th>S.no.</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Create Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   DocsData.map((item,index)=>{
                                       return(
                                           <tr key={item.id}>
                                               <td>{item.id}</td>
                                               <td>{item.name}</td>
                                               <td>{item.type}</td>
                                               <td>{item.Date}</td>
                                               <td>
                                                   {
                                                       item.content.map((content,i)=>{
                                                           console.log(content)
                                                          return(
                                                            <Link 
                                                            to={{                                                                 
                                                                pathname:'/admin/docs/edit', 
                                                                state:{eTitle: content.title, eBody: content.body,} 
                                                                }} key={i}>edit</Link>
                                                          )           
                                                       })
                                                   }
                                                </td>
                                           </tr>
                                       )
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
      )
  }
}

export default Documents