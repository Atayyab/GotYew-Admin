
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Grid, Row, Col, Table, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

import Card from "components/Card/Card.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
// import { thArray, tdArray, brands } from "variables/Variables.jsx";


import Button from "components/CustomButton/CustomButton.jsx";

// import avatar from "assets/img/brands/levis.jpg";
// import banner from "assets/img/brands/Flex-HomeBanner-1.jpg";

class TableList extends Component {

  state={
    brandName: 'Levis',
    brandType: 'Clothing Brand',
    brandDesc: "Levi Strauss Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853,",
    brandImg: 'https://image.shutterstock.com/image-photo/manila-philippines-26-june-2016-260nw-458055625.jpg',
    brandBanner: 'https://bellomag.files.wordpress.com/2014/01/versace-jeans-spring-summer-2014-01.jpg',
    uploadedBrandImg: [],
    uploadedBrandBannerImg: [],
    brandAddress: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
    brandContactNum1 : '123456',
    brandContactNum2 : '654321',
    error : false
  }


 editBrandHandle = (e) => {
   e.preventDefault();
    const name = e.target.brandName.value;
    const type = e.target.brandType.value;
    const desc = e.target.brandDescription.value;
    const addr = e.target.brandAddress.value;
    const num1 = e.target.brandContact1.value;
    const num2 = e.target.brandContact2.value;

    
    
   name === '' || type === ''  || desc === '' || addr === '' || num1 === '' || num2 === '' ? this.setState({error : true}) :   

  this.setState({
    brandName: name,
    brandType: type,
    brandDesc: desc,    
    brandAddress: addr,
    brandContactNum1 : num1,
    brandContactNum2 : num2,    
    error : false
   });

}

HandleDPUploadImage = (e) => {     
   this.setState({
     uploadedBrandImg: e.target.files[0]
   }, ()=>{ console.log(this.state.uploadedBrandImg)})
}

HandleBannerUploadImage = (e) => {     
   this.setState({
     uploadedBrandBannerImg: e.target.files[0]
   }, ()=>{ console.log(this.state.uploadedBrandBannerImg)})
}

  render() {
    const formError = this.state.error = false ? 'Please fill all of the fields' : ''
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <div className="brands-banner">
              <UserCard                  
                  bgImage={this.state.brandBanner}
                  avatar={this.state.brandImg}
                  name={this.state.brandName}
                  userName={this.state.brandType}
                  description={
                    <span>                    
                      {this.state.brandDesc}
                    </span>
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
                  <ul className="address">
                    <li><p>{this.state.brandAddress}</p></li>
                    <li><p><a href={`tel:`+this.state.brandContactNum1}>{this.state.brandContactNum1}</a></p></li>
                    <li><p><a href={`tel:`+this.state.brandContactNum2}>{this.state.brandContactNum2}</a></p></li>
                  </ul>
                }
              />
            </Col>

            <Col md={6}>
            <Card
                title="Edit Profile"
                category={formError}
                content={
                  <form onSubmit={this.editBrandHandle}>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[                        
                        {
                          label: "Brand name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "My Brand",
                          defaultValue: "",
                          name:"brandName",
                          onChange: this.editBrandName
                        },
                        {
                          label: "Brand type",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Clothing Brand",
                          name:"brandType"
                        }
                      ]}
                    />                     
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          name:"brandAddress",
                          defaultValue:""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Contact Number",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Number",
                          name:"brandContact1",
                          defaultValue: ""
                        },
                        {
                          label: "Second Contact Number (Optional)",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Number",
                          name:"brandContact2",
                          defaultValue: ""
                        }                      
                      ]}
                    />
                    <Row>
                      <Col md={6}>
                      <ControlLabel>Brand Image</ControlLabel>
                        <input type="file" onChange={this.HandleDPUploadImage}/>  
                      </Col>
                      <Col md={6}>
                      <ControlLabel>Brand Banner Image</ControlLabel>
                        <input type="file" onChange={this.HandleBannerUploadImage}/>
                      </Col>
                    </Row>
                    {/* <FormInputs
                      ref={this.HandleUploadImage}
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Brand Picture",
                          type: "file",
                          bsClass: "form-control",   
                          name:"brandPicture",                       
                          placeholder: "Upload picture",
                          defaultValue: ""
                        }                   
                      ]}
                    /> */}
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Brand Description</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            name="brandDescription"
                            placeholder="Here can be your description"
                            defaultValue=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
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
