import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Badge } from "react-bootstrap";
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
    error : false,
    defaultOutfitEditId : '',
    defaultOutfitEdit : '',    
    outfitType : [
                  // { id: 2020, name :'socks'},
                ],
    defaultMaterialEditId : '',
    defaultMaterialEdit : '',
    materialType : [
                  // { id: 2020, name :'socks'},
                ],
    defaultSizeEditId : '',
    defaultSizeEdit : '',
    sizeType : [
                  // { id: 2020, name :'socks'},
                ],
    defaultTypeEditId : '',
    defaultTypeEdit : '',
    type : [
                  // { id: 2020, name :'socks'},
                ],
    defaultColorEditId : '',
    defaultColorEdit : '',
    color : [
                  // { id: 2020, name :'socks'},
                ],
    modalIsOpen : false,
    formName : ''
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

// Outfit type
handleOutfitType = (e) =>{
      e.preventDefault()
      this.setState({
        outfitType : [...this.state.outfitType,{id: Date.now(), name : e.target.outfitType.value}]        
      })
      e.target.outfitType.value = ''
}


onDeleteHandle() {
  let id = arguments[0];
         
  this.setState({
    outfitType: this.state.outfitType.filter(item => {
      if (item.id !== id) {
        console.log(item);
        return item;
      }
    })
  });
}

handleEditOutfitType(id,name) {  
  this.setState({
    defaultOutfitEditId : id,
    defaultOutfitEdit : name,
    modalIsOpen : true,
    formName : 'OutfitTypes'
  })
}

updateEditOutfitType(e) {
  e.preventDefault()

  let id = arguments[0];
  console.log(this.state.defaultOutfitEditId,'State item id')
  this.setState({
    outfitType: this.state.outfitType.map(item => {
      console.log(item.id,'item id')      
      if (item.id === this.state.defaultOutfitEditId ) {                
        item['name'] = e.target.EditoutfitType.value;
        return item;        
      }
      return item;     
    }),
    defaultOutfitEditId : '',
    modalIsOpen : false
  });
  e.target.EditoutfitType.value = ''
}

// Material type
handleMaterialType = (e) =>{
      e.preventDefault()
      this.setState({
        materialType : [...this.state.materialType,{id: Date.now(), name : e.target.materialType.value}]        
      })
      e.target.materialType.value = ''
      console.log('handleMaterialType');
}


onDeleteMaterialHandle() {
  let id = arguments[0];
         
  this.setState({
    materialType: this.state.materialType.filter(item => {
      if (item.id !== id) {
        console.log(item,'here is item');
        return item;
      }
    })
  });
  console.log('id:',id,'onDeleteMaterialHandle');
}

handleEditMaterialType(id,name) {  
  this.setState({
    defaultMaterialEditId : id,
    defaultMaterialEdit : name,
    modalIsOpen : true,
    formName : 'MaterialType'
  })
  console.log('id:',id,'name:',name,'handleEditMaterialType');
}

updateEditMaterialType(e) {  
  e.preventDefault()
   console.log('updateEditMaterialType');
  let id = arguments[0];
  console.log(this.state.defaultMaterialEditId,'State item id')
  this.setState({
    materialType: this.state.materialType.map(item => {
      console.log(item.id,'item id')      
      if (item.id === this.state.defaultMaterialEditId ) {                
        item['name'] = e.target.EditmaterialType.value;
        return item;        
      }
      return item;     
    }),
    defaultMaterialEditId : '',
    modalIsOpen : false,
  });
  e.target.EditmaterialType.value = ''
}

// Size type
handleSizeType = (e) =>{
      e.preventDefault()
      this.setState({
        sizeType : [...this.state.sizeType,{id: Date.now(), name : e.target.sizeType.value}]        
      })
      e.target.sizeType.value = ''
      console.log('handleSizeType');
}


onDeleteSizeHandle() {
  let id = arguments[0];
         
  this.setState({
    sizeType: this.state.sizeType.filter(item => {
      if (item.id !== id) {
        console.log(item,'here is item');
        return item;
      }
    })
  });
  console.log('id:',id,'onDeleteSizeHandle');
}

handleEditSizeType(id,name) {  
  this.setState({
    defaultSizeEditId : id,
    defaultSizeEdit : name,
    modalIsOpen : true,
    formName : 'SizeType'
    
  })
  console.log('id:',id,'name:',name,'handleEditSizeType');
}

updateEditSizeType(e) {  
  e.preventDefault()
   console.log('updateEditSizeType');
  let id = arguments[0];
  console.log(this.state.defaultSizeEditId,'State item id')
  this.setState({
    sizeType: this.state.sizeType.map(item => {
      console.log(item.id,'item id')      
      if (item.id === this.state.defaultSizeEditId ) {                
        item['name'] = e.target.EditsizeType.value;
        return item;        
      }
      return item;     
    }),
    defaultSizeEditId : '',
    modalIsOpen : false,
  });
  e.target.EditsizeType.value = ''
}

// Type
handleType = (e) =>{
      e.preventDefault()
      this.setState({
        type : [...this.state.type,{id: Date.now(), name : e.target.type.value}]        
      })
      e.target.type.value = ''
      console.log('handleType');
}


onDeleteTypeHandle() {
  let id = arguments[0];
         
  this.setState({
    type: this.state.type.filter(item => {
      if (item.id !== id) {
        console.log(item,'here is item');
        return item;
      }
    })
  });
  console.log('id:',id,'onDeleteSizeHandle');
}

handleEditType(id,name) {  
  this.setState({
    defaultTypeEditId : id,
    defaultTypeEdit : name,
    modalIsOpen : true,
    formName : 'Type'
  })
  console.log('id:',id,'name:',name,'handleEditSizeType');
}

updateEditType(e) {  
  e.preventDefault()
   console.log('updateEditSizeType');
  let id = arguments[0];
  console.log(this.state.defaultTypeEditId,'State item id')
  this.setState({
    type: this.state.type.map(item => {
      console.log(item.id,'item id')      
      if (item.id === this.state.defaultTypeEditId ) {                
        item['name'] = e.target.EditType.value;
        return item;        
      }
      return item;     
    }),
    defaultTypeEditId : '',
    modalIsOpen : false,
  });
  e.target.EditType.value = ''
}

// Color
handleColor = (e) =>{
      e.preventDefault()
      this.setState({
        color : [...this.state.color,{id: Date.now(), name : e.target.color.value}]        
      })
      e.target.color.value = ''
      console.log('handleType');
}


onDeleteColorHandle() {
  let id = arguments[0];
         
  this.setState({
    color: this.state.color.filter(item => {
      if (item.id !== id) {
        console.log(item,'here is item');
        return item;
      }
    })
  });
  console.log('id:',id,'onDeleteSizeHandle');
}

handleEditColor(id,name) {  
  this.setState({
    defaultColorEditId : id,
    defaultColorEdit : name,
    modalIsOpen : true,
    formName : 'ColorType'
  })
  console.log('id:',id,'name:',name,'handleEditSizeType');
}

updateEditColor(e) {  
  e.preventDefault()
   console.log('updateEditSizeType');
  let id = arguments[0];
  console.log(this.state.defaultColorEditId,'State item id')
  this.setState({
    color: this.state.color.map(item => {
      console.log(item.id,'item id')      
      if (item.id === this.state.defaultColorEditId ) {                
        item['name'] = e.target.EditColor.value;
        return item;        
      }
      return item;     
    }),
    defaultColorEditId : '',
    modalIsOpen : false,
  });
  e.target.EditColor.value = ''
}


closeModal = () => {
  this.setState({ 
      modalIsOpen : false,
      // Emptying form name for reusability       
      formName : ''
  });      
} 

openModal = () => {
  this.setState({ 
      modalIsOpen : true,       
  });      
} 


  render() {
    const formError = this.state.error = false ? 'Please fill all of the fields' : ''
    const modalmenuClass = `modal fade ${this.state.modalIsOpen ? "in show" : "hide"}`;
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
              <Card
                title="Outfit type"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={                   
                  <div>
                    <Col md={12}>
                   <form onSubmit={(e)=>{this.handleOutfitType(e)}}>
                   <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Add Outfit type",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "enter outfit type",
                          name:"outfitType",
                          defaultValue:""
                        },                        
                      ]}
                    />                                        
                    <input type="submit" className="btn btn-success btn-sm" value="submit"/>
                    
                   </form>    
                   </Col>
                   <Col md={12}>
                   </Col>
                   <table className="table table-striped table-hover">
                     <thead>
                       <tr>
                       <th>Type</th>
                       <th>Actions</th>
                       </tr>
                     </thead>               
                     <tbody>               
                   {this.state.outfitType.map((outfit,index)=>{
                     return <tr  key={outfit.id}>
                       <td width="80%">
                       <h5>{outfit.name}</h5>
                       </td>
                       <td width="10%">
                        <button className="btn btn-sm btn-info" onClick={()=>{this.handleEditOutfitType(outfit.id, outfit.name)}}>Edit</button>                     
                        {/* <button className="btn btn-sm btn-info" onClick={()=>{this.openModal(outfit.id, outfit.name)}}>Edit</button> */}
                       </td>
                       <td width="10%">
                       <button className="btn btn-sm btn-danger" onClick={()=>{this.onDeleteHandle(outfit.id)}}>Delete</button>
                       </td>
                     </tr>
                   })
                   }                      
                   </tbody>
                   </table>                
                 </div>                                   
                }
              />
              
              
              <Card
                title="Size type"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={                   
                  <div>
                    <Col md={12}>
                   <form onSubmit={(e)=>{this.handleSizeType(e)}}>
                   <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Add Size type",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "enter size type",
                          name:"sizeType",
                          defaultValue:""
                        },                        
                      ]}
                    />                                        
                    <input type="submit" className="btn btn-success btn-sm" value="submit"/>
                    
                   </form>    
                   </Col>
                   <Col md={12}>
                   </Col>
                   <table className="table table-striped table-hover">
                   <thead>
                       <tr>
                       <th>Type</th>
                       <th>Actions</th>
                       </tr>
                     </thead>
                     <tbody>               
                   {this.state.sizeType.map((outfit,index)=>{
                     return <tr  key={outfit.id}>
                       <td width="80%">
                       <h5>{outfit.name}</h5>
                       </td>
                       <td width="10%">
                        <button className="btn btn-sm btn-info" onClick={()=>{this.handleEditSizeType(outfit.id, outfit.name)}}>Edit</button>                     
                       </td>
                       <td width="10%">
                       <button className="btn btn-sm btn-danger" onClick={()=>{this.onDeleteSizeHandle(outfit.id)}}>Delete</button>
                       </td>
                     </tr>
                   })
                   }                      
                   </tbody>
                   </table>                
                 </div>                                   
                }
              />
              <Card
                title="Type"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={                   
                  <div>
                    <Col md={12}>
                   <form onSubmit={(e)=>{this.handleType(e)}}>
                   <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Add Type",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "enter type",
                          name:"type",
                          defaultValue:""
                        },                        
                      ]}
                    />                                        
                    <input type="submit" className="btn btn-success btn-sm" value="submit"/>
                    
                   </form>    
                   </Col>
                   <Col md={12}>
                   </Col>
                   <table className="table table-striped table-hover">
                   <thead>
                       <tr>
                       <th>Type</th>
                       <th>Actions</th>
                       </tr>
                     </thead>
                     <tbody>               
                   {this.state.type.map((outfit,index)=>{
                     return <tr  key={outfit.id}>
                       <td width="80%">
                       <h5>{outfit.name}</h5>
                       </td>
                       <td width="10%">
                        <button className="btn btn-sm btn-info" onClick={()=>{this.handleEditType(outfit.id, outfit.name)}}>Edit</button>                     
                       </td>
                       <td width="10%">
                       <button className="btn btn-sm btn-danger" onClick={()=>{this.onDeleteTypeHandle(outfit.id)}}>Delete</button>
                       </td>
                     </tr>
                   })
                   }                      
                   </tbody>
                   </table>                
                 </div>                                   
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
              <Card
                title="Material type"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={                   
                  <div>
                    <Col md={12}>
                   <form onSubmit={(e)=>{this.handleMaterialType(e)}}>
                   <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Add Material type",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "enter material type",
                          name:"materialType",
                          defaultValue:""
                        },                        
                      ]}
                    />                                        
                    <input type="submit" className="btn btn-success btn-sm" value="submit"/>
                    
                   </form>    
                   </Col>
                   <Col md={12}>
                   </Col>
                   <table className="table table-striped table-hover">
                   <thead>
                       <tr>
                       <th>Type</th>
                       <th>Actions</th>
                       </tr>
                     </thead>
                     <tbody>               
                   {this.state.materialType.map((outfit,index)=>{
                     return <tr  key={outfit.id}>
                       <td width="80%">
                       <h5>{outfit.name}</h5>
                       </td>
                       <td width="10%">
                        <button className="btn btn-sm btn-info" onClick={()=>{this.handleEditMaterialType(outfit.id, outfit.name)}}>Edit</button>                     
                       </td>
                       <td width="10%">
                       <button className="btn btn-sm btn-danger" onClick={()=>{this.onDeleteMaterialHandle(outfit.id)}}>Delete</button>
                       </td>
                     </tr>
                   })
                   }                      
                   </tbody>
                   </table>                
                 </div>                                   
                }
              />

              <Card
                title="Color"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={                   
                  <div>
                    <Col md={12}>
                   <form onSubmit={(e)=>{this.handleColor(e)}}>
                   <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Add Color",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "enter color",
                          name:"color",
                          defaultValue:""
                        },                        
                      ]}
                    />                                        
                    <input type="submit" className="btn btn-success btn-sm" value="submit"/>
                    
                   </form>    
                   </Col>
                   <Col md={12}>                   
                   </Col>
                   <table className="table table-striped table-hover">
                   <thead>
                       <tr>
                       <th>Type</th>
                       <th>Actions</th>
                       </tr>
                     </thead>
                     <tbody>               
                   {this.state.color.map((outfit,index)=>{
                     return <tr  key={outfit.id}>
                       <td width="80%">
                       <h5>{outfit.name}</h5>
                       </td>
                       <td width="10%">
                        <button className="btn btn-sm btn-info" onClick={()=>{this.handleEditColor(outfit.id, outfit.name)}}>Edit</button>                     
                       </td>
                       <td width="10%">
                       <button className="btn btn-sm btn-danger" onClick={()=>{this.onDeleteColorHandle(outfit.id)}}>Delete</button>
                       </td>
                     </tr>
                   })
                   }                      
                   </tbody>
                   </table>                
                 </div>                                   
                }
              />

            </Col>
          </Row>



  {/* Modal */}
  <div className={ modalmenuClass } role="dialog" tabIndex={-1} aria-labelledby="mySmallModalLabel">
         <div className="modal-dialog modal-md" role="document"> 
          <div className="modal-content"> 
            <div className="modal-header"> 
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" onClick={this.closeModal}>×</span>
              </button> 
              <h4 className="modal-title" id="mySmallModalLabel">Edit</h4> 
            </div> 
            <div className="modal-body">
             <div className="row">
             <div className="col-lg-12">                 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="user-full-details-name"></h2>
                {

                  this.state.formName == 'OutfitTypes' ?
                  
                  
                  <form onSubmit={(e)=>{this.updateEditOutfitType(e)}}>                  
                  {console.log(this.state.formName)}
                  <FormInputs
                     ncols={["col-md-12"]}
                     properties={[
                       {
                         label: "Edit Outfit type",
                         type: "text",
                         bsClass: "form-control",
                         placeholder: "edit outfit type",
                         name:"EditoutfitType",
                         // defaultValue: this.state.defaultOutfitEdit

                       }
                     ]}
                   />                          
                     <div className="col-md-3">
                     <input type="submit" className="btn btn-success btn-sm" value="update"/>
                     </div>                                        
                </form>
                
                :

                this.state.formName == 'SizeType' ?
                  
                <form onSubmit={(e)=>{this.updateEditSizeType(e)}}>
                <FormInputs
                   ncols={["col-md-12"]}
                   properties={[
                     {
                       label: "Edit Size type",
                       type: "text",
                       bsClass: "form-control",
                       placeholder: "edit size type",
                       name:"EditsizeType",
                       defaultValue: this.state.defaultSizeEdit
                     }
                   ]}
                 />     
                   <div className="col-md-3">
                   <input type="submit" className="btn btn-success btn-sm" value="update"/>
                   </div>
                 
                 
                </form>   

                :
                
                this.state.formName == 'MaterialType' ?
                 
                <form onSubmit={(e)=>{this.updateEditMaterialType(e)}}>
                <FormInputs
                   ncols={["col-md-12"]}
                   properties={[
                     {
                       label: "Edit Material type",
                       type: "text",
                       bsClass: "form-control",
                       placeholder: "edit material type",
                       name:"EditmaterialType",
                       defaultValue: this.state.defaultMaterialEdit
                     }
                   ]}
                 />     
                   <div className="col-md-3">
                   <input type="submit" className="btn btn-success btn-sm" value="update"/>
                   </div>
                 
                 
                </form> 

                :
                
                this.state.formName == 'Type' ?
                
                <form onSubmit={(e)=>{this.updateEditType(e)}}>
                <FormInputs
                   ncols={["col-md-12"]}
                   properties={[
                     {
                       label: "Edit Type",
                       type: "text",
                       bsClass: "form-control",
                       placeholder: "edit type",
                       name:"EditType",
                       defaultValue: this.state.defaultTypeEdit
                     }
                   ]}
                 />     
                   <div className="col-md-3">
                   <input type="submit" className="btn btn-success btn-sm" value="update"/>
                   </div>
                 
                 
                </form>    

                :

                this.state.formName == 'ColorType' ?
                  
                <form onSubmit={(e)=>{this.updateEditColor(e)}}>
                <FormInputs
                   ncols={["col-md-12"]}
                   properties={[
                     {
                       label: "Edit Color",
                       type: "text",
                       bsClass: "form-control",
                       placeholder: "edit color",
                       name:"EditColor",
                       defaultValue: this.state.defaultColorEdit
                     }
                   ]}
                 />     
                   <div className="col-md-3">
                   <input type="submit" className="btn btn-success btn-sm" value="update"/>
                   </div>
                 
                 
                </form>

                :                
                 null

                }                         
                </div>                                 
             </div> 
             </div>

            </div> {/*modal-body ends*/}
          </div> 
         </div> 
        </div>
        {/* Modal End*/}


        </Grid>
      </div>
    );
  }
}

export default TableList;
