import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Badge } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

import axios from 'axios';
import Card from "components/Card/Card.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
// import { thArray, tdArray, brands } from "variables/Variables.jsx";


import Button from "components/CustomButton/CustomButton.jsx";
import { statesData,citiesData } from '../variables/Variables'

// import avatar from "assets/img/brands/levis.jpg";
// import banner from "assets/img/brands/Flex-HomeBanner-1.jpg";

class TableList extends Component {

  state={
    brandName: 'Loading Brand Name...',
    brandType: 'Loading Brand Type...',
    brandDesc: "Loading Brand Description...",
    brandImg: 'https://res.cloudinary.com/bsqp-tech/image/upload/v1591329551/gxu85xcvjwout4mzxob8.png',
    brandBanner: 'https://scx2.b-cdn.net/gfx/news/hires/2018/milkyway.jpg',
    uploadedBrandImg: [],
    uploadedBrandBannerImg: [],
    brandAddress: 'Brand Address',
    brandContactNum1 : '123456',
    brandContactNum2 : '654321',
    vendor: {}, 
    colors: [],
    materials: [],
    outfits: [],
    sizes: [],
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
    formName : '',
    selState : null,
    selCity : [],
    state : statesData.states ,        
    city_list : citiesData.cities,
    city : '',
    states : ''
  }

  componentDidMount() {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem("jwtToken")
    }
    
    console.log("this - > ", headers)
    axios.get('http://3.123.184.89:5000/admin/dashboard', {
      headers : headers
    })
        .then(response => {
    // console.log(this.props.match.params)
    console.log(response.data)
            this.setState({ 
              vendor: response.data.vendor, 
              city: response.data.vendor.city, 
              colors: response.data.colors,
              materials: response.data.materials,
              outfits: response.data.outfits,
              sizes: response.data.sizes,
              color: response.data.colors,
              materialType: response.data.materials,
              outfitType: response.data.outfits,
              sizeType: response.data.sizes
             });
      console.log("this - > ", this.state)
      this.handleStateLoad(this.state.vendor.country)
      
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  handleStateLoad = (e)=>{
        
    let stateName2 = e   
      
    console.log(stateName2)
   this.setState({selState: stateName2},()=>{
  
      const stateCity=this.state&&this.state.city_list.filter(c => c.state === this.state.selState);
    
            this.setState({selCity: stateCity},()=>{
            console.log(this.state.selCity)
        })          
        
    }) 
    let stateName = e       
    console.log(stateName)
    this.handleDropdownChange({  name: 'state', value: stateName  })
            
  }
  

 editBrandHandle = async (e) => {
   e.preventDefault();
    const name = e.target.brandName.value;
    const type = e.target.brandType.value;
    if(e.target.brandDescription.value == null || e.target.brandDescription.value == "")
    var desc = this.state.vendor.description;
    else
    var desc = e.target.brandDescription.value;
    const addr = e.target.brandAddress.value;
    const num1 = e.target.brandContact1.value;
  //  name === '' || type === ''  || desc === '' || addr === '' || num1 === '' || num2 === '' ? this.setState({error : true}) :   

  await this.setState({
    brandName: name,
    brandType: type,
    brandDesc: desc,    
    brandAddress: addr,
    brandContactNum1 : num1,  
    country : this.state.state,
    city : this.state.city,
    error : false,
    vendor: { ...this.state.vendor,
      name : name,
      category : type,
      description : desc,
      address : addr,
      city : this.state.city,
      country : this.state.state,
      phone_1 : num1
    }
   });


      await axios.post('http://3.123.184.89:5000/users/update_profile_vendor', this.state.vendor)
	        .then(res => console.log(res.data));
}

HandleDPUploadImage =async (e) => {     
  if(!e.target.files[0])
  return
  const fd = new FormData();
  fd.append('image', e.target.files[0], e.target.files[0].name);
  var image = this.state.vendor.image;
  await axios.post('http://3.123.184.89:5000/users/upload', fd)
  .then(res => image = res.data.image);
   this.setState({
     uploadedBrandImg: image,
     vendor: { ...this.state.vendor, image : image }
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
      var data = {
        id : this.state.vendor.id,
        name : e.target.outfitType.value
      }
      axios.post('http://3.123.184.89:5000/admin/add_outfit', data)
      .then(res => console.log(res.data));
      e.target.outfitType.value = ''
}


onDeleteHandle() {
  let id = arguments[0];
         
  var data = {
    id : id
  }
  axios.post('http://3.123.184.89:5000/admin/delete_outfit', data)
  .then(res => console.log(res.data));
  this.setState({
    outfitType: this.state.outfitType.filter(item => {
      if (item.id !== id) {
        console.log(item);
        return item;
      }
    })
  });
}

async handleEditOutfitType(id,name) {  
  await this.setState({
    defaultOutfitEditId : id,
    defaultOutfitEdit : name,
    modalIsOpen : true,
    formName : 'OutfitTypes'
  })
}

updateEditOutfitType(e) {
  e.preventDefault()

  let id = arguments[0];
  
  var data = {
    list_id : this.state.defaultOutfitEditId,
    name : e.target.EditoutfitType.value
  }
  axios.post('http://3.123.184.89:5000/admin/edit_outfit', data)
  .then(res => console.log(res.data));

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
      var data = {
        id : this.state.vendor.id,
        name : e.target.materialType.value
      }
      axios.post('http://3.123.184.89:5000/admin/add_material', data)
      .then(res => console.log(res.data));
      e.target.materialType.value = ''
      console.log('handleMaterialType');
}


onDeleteMaterialHandle() {
  let id = arguments[0];
  var data = {
    id : id
  }
  axios.post('http://3.123.184.89:5000/admin/delete_material', data)
  .then(res => console.log(res.data));
         
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

async handleEditMaterialType(id,name) {  
  await this.setState({
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
   
  var data = {
    list_id : this.state.defaultMaterialEditId,
    name : e.target.EditmaterialType.value
  }
  axios.post('http://3.123.184.89:5000/admin/edit_material', data)
  .then(res => console.log(res.data));
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
      var data = {
        id : this.state.vendor.id,
        name : e.target.sizeType.value
      }
      axios.post('http://3.123.184.89:5000/admin/add_size', data)
      .then(res => console.log(res.data));
      e.target.sizeType.value = ''
      console.log('handleSizeType');
}


onDeleteSizeHandle() {
  let id = arguments[0];
         
  var data = {
    id : id
  }
  axios.post('http://3.123.184.89:5000/admin/delete_size', data)
  .then(res => console.log(res.data));
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

async handleEditSizeType(id,name) {  
  await this.setState({
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
   
  var data = {
    list_id : this.state.defaultSizeEditId,
    name : e.target.EditsizeType.value
  }
  axios.post('http://3.123.184.89:5000/admin/edit_size', data)
  .then(res => console.log(res.data));
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

async handleEditType(id,name) {  
  await this.setState({
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
      var data = {
        id : this.state.vendor.id,
        name : e.target.color.value
      }
      axios.post('http://3.123.184.89:5000/admin/add_color', data)
      .then(res => console.log(res.data));
      e.target.color.value = ''
      console.log('handleType');
}


onDeleteColorHandle() {
  let id = arguments[0];
           
  var data = {
    id : id
  }
  axios.post('http://3.123.184.89:5000/admin/delete_color', data)
  .then(res => console.log(res.data));
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

async handleEditColor(id,name) {  
  await this.setState({
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

   var data = {
    list_id : this.state.defaultColorEditId,
    name : e.target.EditColor.value
  }
  axios.post('http://3.123.184.89:5000/admin/edit_color', data)
  .then(res => console.log(res.data));


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

handleDropdownChange = event =>{
  const {name, value} = event
  console.log(event)
  this.setState({
  [name]: value
  },()=>{
      console.log(this.state)
  })   
   
}

handleStateSelect=(e)=>{
        
    let index2 = e.nativeEvent.target.selectedIndex; 
    let stateName2 = e.nativeEvent.target[index2].text  
  const selectedValue = parseInt(e.target.value)       
      
    console.log(stateName2)
   this.setState({selState: stateName2},()=>{

      const stateCity=this.state&&this.state.city_list.filter(c => c.state === this.state.selState);
    
            this.setState({selCity: stateCity},()=>{
            console.log(this.state.selCity)
        })          
        
    })
    let index = e.nativeEvent.target.selectedIndex;    
    let stateName = e.nativeEvent.target[index].text        
    console.log(stateName)
    this.handleDropdownChange({  name: 'state', value: stateName  })
            
}


handleCitySelect=async (e)=>{    
  console.log(e)    
    let index = e.nativeEvent.target.selectedIndex;    
    let cityName = e.nativeEvent.target[index].text        
    console.log(cityName)
    await this.handleDropdownChange({  name: 'city', value: cityName  })
    console.log('state:', this.state.state, 'city:', this.state.city)
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
                  bgImage={this.state.vendor.banner || this.state.brandBanner}
                  avatar={this.state.vendor.image || this.state.brandImg}
                  name={this.state.vendor.name || this.state.brandName}
                  userName={this.state.vendor.category || this.state.brandType}
                  description={
                    <span>                    
                      {this.state.vendor.description || this.state.brandDesc}
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
                    <li><p>{this.state.vendor.address}</p></li>
                    <li><p><a href={`tel:`+this.state.vendor.phone_1}>{this.state.vendor.phone_1}</a></p></li>
                    
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
              {/* <Card
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
              /> */}
              
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
                          defaultValue: this.state.vendor.name,
                          name:"brandName",
                          onChange: this.editBrandName
                        },
                        {
                          label: "Brand type",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Clothing Brand",
                          defaultValue: this.state.vendor.category,
                          name:"brandType"
                        }
                      ]}
                    />
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="text-grey-color float-label">Enter State</label>
                            <select className="form-control" onChange={ e =>{this.handleStateSelect(e) }} value = {this.state.selState}>
                                    <option>Select State</option>
                                {
                                    statesData.map((state)=>{
                                        return (
                                        <option value={state.name} key={state.id} name="state">{state.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>  
                    </div>                  
                    <div className="col-md-6">
                          <label className="text-grey-color float-label">Enter City</label>
                            <select className="form-control" onChange={ e=>{this.handleCitySelect(e)} }> 
                            <option value={this.state.city}>{this.state.city}</option>
                                                                                      
                                    {   
                                    this.state&&this.state.selCity.map((city)=>{                                                        
                                        return (
                                            <option value={city.id} key={city.id}>{city.name}</option>
                                            )                                                                           
                                    })                                                         
                                    } 
                            </select> 
                    </div>                  
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Brand Adress",
                          name:"brandAddress",
                          defaultValue: this.state.vendor.address,
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Contact Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Number",
                          name:"brandContact1",
                          defaultValue: this.state.vendor.phone_1,
                        },
                        // {
                        //   label: "Second Contact Number (Optional)",
                        //   type: "number",
                        //   bsClass: "form-control",
                        //   placeholder: "Number",
                        //   name:"brandContact2",
                        //   defaultValue: this.state.vendor.phone_2,
                        // }                      
                      ]}
                    />
                    {/* <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Description",
                          type: "textarea",
                          bsClass: "form-control",
                          placeholder: "Description",
                          name:"desc",
                          defaultValue: this.state.vendor.description,
                        }                    
                      ]}
                    /> */}
                    <Row>
                      <Col md={12}>
                      <ControlLabel>Brand Image</ControlLabel>
                        <input type="file" onChange={this.HandleDPUploadImage}/>  
                      </Col>
                      {/* <Col md={6}>
                      <ControlLabel>Brand Banner Image</ControlLabel>
                        <input type="file" onChange={this.HandleBannerUploadImage}/>
                      </Col> */}
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
                            defaultValue={this.state.vendor.description}
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
                         defaultValue: this.state.defaultOutfitEdit

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
