/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Grid, Row, Col } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

class SuperBrand extends Component {
   
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={6} sm={6}>               
                <StatsCard
                    bigIcon={<i className="pe-7s-check text-danger-success" />}
                    statsText=""
                    statsValue="Approved"                    
                    statsIconText={<button className="btn btn-info pull-right"><Link to="/admin/superbrandsapproved">View</Link></button>}                    
                />              
            </Col>
            {/* <Col lg={4} sm={6}>               
                <StatsCard
                    bigIcon={<i className="pe-7s-close-circle text-warning" />}
                    statsText=""
                    statsValue="Unapproved"                    
                    statsIconText={<button className="btn btn-info pull-right"><Link to="/admin/superbrandsunapproved">View</Link></button>}                    
                />              
            </Col> */}
            <Col lg={6} sm={6}>               
                <StatsCard
                    bigIcon={<i className="pe-7s-albums text-danger" />}
                    statsText=""
                    statsValue="All"                    
                    statsIconText={<button className="btn btn-info pull-right"><Link to="/admin/superbrandsall">View</Link></button>}                    
                />              
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SuperBrand;
