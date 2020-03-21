
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import { thArray, tdArray, brands } from "variables/Variables.jsx";


import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/brands/levis.jpg";
import banner from "assets/img/brands/Flex-HomeBanner-1.jpg";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <div className="brands-banner">
              <UserCard                  
                  bgImage={banner}
                  avatar={avatar}
                  name="Levis"
                  userName="Clothing Brand"
                  description={
                    <span>                    
                      Levi Strauss Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853                     
                    </span>
                  }
                  socials={
                    <div>
                      <Button simple>
                        <i className="fa fa-facebook-square" />
                      </Button>
                      <Button simple>
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button simple>
                        <i className="fa fa-google-plus-square" />
                      </Button>
                    </div>
                  }
                />
                </div>
            </Col>
            <Col md={6}>
              <Card
                title="Contact Details"
                category="Below are the contact details"
                ctTableFullWidth
                ctTableResponsive
                content={
                  // <Table striped hover>
                  //   <thead>
                  //     <tr>
                  //       {thArray.map((prop, key) => {
                  //         return <th key={key}>{prop}</th>;
                  //       })}
                  //     </tr>
                  //   </thead>
                  //   <tbody>
                  //     {tdArray.map((prop, key) => {
                  //       return (
                  //         <tr key={key}>
                  //           {prop.map((prop, key) => {
                  //             return <td key={key}>{prop}</td>;
                  //           })}
                  //         </tr>
                  //       );
                  //     })}
                  //   </tbody>
                  // </Table>
                  <ul className="address">
                    <li><p>Santa Monica Beach ,California</p></li>
                    <li><p><a href="tel:123456">123456</a></p></li>
                    <li><p><a href="tel:7891011">7891011</a></p></li>
                  </ul>
                }
              />
            </Col>

            <Col md={6}>
              <Card                
                title="Location"                
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div className="map-location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.815957753388!2d-118.5151381031819!3d34.009174659513555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d753e7d5f1%3A0x1730c10394bec38!2sSanta%20Monica%20Beach!5e0!3m2!1sen!2s!4v1583073687315!5m2!1sen!2s" frameBorder="0"></iframe> 
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
