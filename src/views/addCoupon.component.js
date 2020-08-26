import React , { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Badge } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Card from "components/Card/Card.jsx";
class AddCoupon extends Component {
	constructor(props) {		
	    super(props);		
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeAmount = this.onChangeAmount.bind(this);
		
		
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {	 inputs: ['input-0'] ,
			product : {
            "product_id": -1,
            "product_image": "",
            "product_name": "",
            "product_category": "",
            "product_sub_category": "",
            "product_price": "",
            "status": "",
            "product_description": ""
        },	
			id:'2',
			name: "name",
			size_chart : [],
			variants : [],
			description: "description",
			picture: [],
			amount: "0",		
			smallQuantity: "0",
			smallLength: "0",
			smallWidth: "0",
			smallHeight: "0",
			mediumQuantity: "0",
			mediumLength: "0",
			mediumWidth: "0",
			mediumHeight: "0",
			largeQuantity: "0",
			largeLength: "0",
			largeWidth: "0",
			largeHeight: "0",			
			xlargeQuantity: "0",
			xlargeLength: "0",
			xlargeWidth: "0",
			xlargeHeight: "0",			
			smallClass : false,
			mediumClass : false,
			largeClass : false,
			xlargeClass : false,
			quantityCheck : true    
	    }
  	}

  	componentDidMount() {
			console.log(this.state.product);
			console.log(this.state);
		  
	// 	const headers = {
	// 		'Content-Type': 'application/json',
	// 		'x-access-token': localStorage.getItem("jwtToken")
	// 	  }
    //   axios.get('http://3.123.184.89:5000/admin/product_by_id?id='+this.props.match.params.id, {
	// 	headers : headers
	//   })
    //       .then(async (response) => {
	// 		console.log(this.props.match.params)
	// 		console.log(response.data)
    //           this.setState({ 
    //             product: response.data.product[0]
	// 		});


	// 		if(response.data.product[0].size.length > 0){
	// 			for(var i = 0; i < response.data.product[0].size.length ; i++ ){
	// 			  if(response.data.product[0].size[i].type == "small"){
	// 				  this.setState({ 
	// 					  smallHeight: response.data.product[0].size[i].height,
	// 					  smallLength: response.data.product[0].size[i].length,
	// 					  smallWidth: response.data.product[0].size[i].width,
	// 					  smallQuantity: response.data.product[0].size[i].quantity
	// 				  });
	// 			  }else if(response.data.product[0].size[i].type == "medium"){
	// 				this.setState({ 
	// 					mediumHeight: response.data.product[0].size[i].height,
	// 					mediumLength: response.data.product[0].size[i].length,
	// 					mediumWidth: response.data.product[0].size[i].width,
	// 					mediumQuantity: response.data.product[0].size[i].quantity
	// 				});
	// 			  }else if(response.data.product[0].size[i].type == "large"){
	// 				this.setState({ 
	// 					largeHeight: response.data.product[0].size[i].height,
	// 					largeLength: response.data.product[0].size[i].length,
	// 					largeWidth: response.data.product[0].size[i].width,
	// 					largeQuantity: response.data.product[0].size[i].quantity
	// 				});
	// 			  }else if(response.data.product[0].size[i].type == "xl"){
	// 				this.setState({ 
	// 					xlargeHeight: response.data.product[0].size[i].height,
	// 					xlargeLength: response.data.product[0].size[i].length,
	// 					xlargeWidth: response.data.product[0].size[i].width,
	// 					xlargeQuantity: response.data.product[0].size[i].quantity
	// 				});
	// 			  }
	// 			}
	// 		}

    //       })
    //       .catch(function (error) {
    //           console.log(error);
	// 	  })
		  
    }

	handleVariant = (e) =>{
		e.preventDefault()
		this.setState({
		  variants : [...this.state.variants,{id: Date.now(), name : e.target.variants.value, var_value : e.target.var_value.value}]        
		})
		// var data = {
		//   id : this.state.vendor.id,
		//   name : e.target.variants.value
		// }
		// axios.post('http://localhost:5000/admin/add_color', data)
		// .then(res => console.log(res.data));
		e.target.color.value = ''
		console.log('handleVariants', this.state);

  }
  

	
	  
	onChangeName(e) {
		// console.log("----",e.target)
	    // this.setState({
		// 	name: e.target.value
		// })  
		this.setState({
			product : {...this.state.product,
				product_name : e.target.value
			}
		});	
	}
	 
	onChangeDescription(e) {
		this.setState({
			product : {...this.state.product,
				product_description : e.target.value
			}
		});	
	}
	onChangeCategory = (e) => {
		this.setState({
			product : {...this.state.product,
				product_category : e.target.value
			}
		});	
	}

    onChangeAmount(e) {
		this.setState({
			product : {...this.state.product,
				product_price : e.target.value
			}
		});	
	  }
  
	  handlePictures = (e) => {     
		if( e.target.files.length > 1 ){
			e.preventDefault()
			alert("You can only upload a maximum of 1 size chart image");
			
		}
	  this.setState({
		  size_chart: e.target.files
	  }, ()=>{ console.log(this.state.size_chart)})
    }
    handlePicture = (e) => {     
		if( e.target.files.length > 3 ){
			e.preventDefault()
			alert("You can only upload a maximum of 3 images");
			
		}
	  this.setState({
		  picture: e.target.files
	  }, ()=>{ console.log(this.state.picture)})
    }

	createFormData = (formData, key, data) => {
		if (data === Object(data) || Array.isArray(data)) {
			for (var i in data) {
				this.createFormData(formData, key + '[' + i + ']', data[i]);
			}
		} else {
			formData.append(key, data);
		}
	}
	async onSubmit(e) {
		e.preventDefault();
		console.log("onSubmit state", this.state)
	    // const obj = {
		// 	tag: this.state.tag,
		// 	image: this.state.file
	    // };
		// console.log(obj)
		const fd = new FormData();
		
		this.createFormData(fd, 'size', this.state.product.size)
		if(this.state.picture){
			fd.append('name', this.state.product.product_name);
			fd.append('description', this.state.product.product_description);
			fd.append('price', this.state.product.product_price);
			// for(var x = 0; x<this.state.product.size.length; x++) {
			// 	fd.append('size[]', this.state.product.size[x]);
			// }
			fd.append('category', this.state.product.product_category);
			
			// fd.append('image', this.state.file, this.state.file.name);
			for(var x = 0; x<this.state.picture.length; x++) {
				fd.append('file', this.state.picture[x])
			}
			if(this.state.size_chart.length > 0){
				fd.append('file', this.state.size_chart[0])
			
				fd.append('is_size_chart', "1");
			}else
			fd.append('is_size_chart', "0");

		const headers = {
			// 'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem("jwtToken")
		  }
		  
			await axios.post('http://3.123.184.89:5000/admin/add_product', fd, {
				headers : headers
			  })
				.then(res => console.log(res.data));
		}
		
    	this.props.history.push('/admin/products');
  	}

  	render() {
		const smallClass = this.state.smallClass ? 'form-group show' : 'form-group hide'    
		const mediumClass = this.state.mediumClass ? 'form-group show' : 'form-group hide'    
		const largeClass = this.state.largeClass ? 'form-group show' : 'form-group hide'
		const xlargeClass = this.state.xlargeClass ? 'form-group show' : 'form-group hide'
	    return (			
	        <div className="container-fluid">
	            <h3 align="center">Add Product</h3>
	            <form onSubmit={this.onSubmit}>
				<div className="form-group">
	                    <label>Product Name:</label>
	                    <input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.product.product_name}
	                      onChange={this.onChangeName}
	                      />
	                </div>	                
					<div className="form-group">
						<label>Description</label>
						<input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.product.product_description}
	                      onChange={this.onChangeDescription}
	                      />
					</div>          
					<div className="form-group">
						<label>Category</label>
						<input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.product.product_category}
	                      onChange={this.onChangeCategory}
	                      />
{/* 						  
						  <select className="form-control" id="exampleFormControlSelect1" onChange = {this.onChangeCategory} value = {this.state.product.product_category || "men"}>
						<option value ="men">men</option>
						<option value ="women">women</option>
						<option value ="kids">kids</option>
						</select> */}
					</div>
					<div className="form-group">
	                    <label>Amount</label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.product.product_price}
	                      onChange={this.onChangeAmount}
	                      />
	                </div>
					<div className="form-group">
	                    <label>Picture</label>
	                    <input type="file" 
						  className="form-control"	  
						  multiple="multiple"                    
	                      onChange={this.handlePicture}
	                      />
	                </div>						
	                <div className="form-group">
	                    <input type="submit" 
	                      value="Add Product" 
						  className="btn btn-primary"
						  style={{margin: '24px 0 0 0'}}						
						  />
	                </div>
	            </form>

				<Card
                title="Variants"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={                   
                  <div>
                    <Col md={12}>
					  <button onClick={ () => this.appendInput() } className="btn btn-success btn-sm">
						   Add Variant Option
					   </button>  
                   <form onSubmit={(e)=>{this.handleVariant(e)}}>
				   {/* <form> */}
                   <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Add Variants",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "enter variant",
                          name:"variants",
                          defaultValue:""
                        },                        
                      ]}
					  /> 
					   {this.state.inputs.map(input => <FormInputs key = {input}
                      ncols={["col-md-6", "col-md-6"]}
						properties={[
						  {
							label: "Variant Values",
							type: "text",
							bsClass: "form-control",
							placeholder: "enter variant value",
							name:"color",
							defaultValue:""
						  },         {
							label: "Variant Price",
							type: "text",
							bsClass: "form-control",
							placeholder: "enter variant price",
							name:"color",
							defaultValue:""
						  },                 
						]}
						/>)}       
					
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
                   {this.state.variants.map((pro,index)=>{
                     return <tr  key={pro.id}>
                       <td width="80%">
                       <h5>{pro.name}</h5>
                       </td>
                       <td width="10%">
                        <button className="btn btn-sm btn-info" onClick={()=>{this.handleEditColor(pro.id, pro.name)}}>Edit</button>                     
                       </td>
                       <td width="10%">
                       <button className="btn btn-sm btn-danger" onClick={()=>{this.onDeleteColorHandle(pro.id)}}>Delete</button>
                       </td>
                     </tr>
                   })
                   }                      
                   </tbody>
                   </table>                
                 </div>                                   
                }
              /> 
			  
	        </div>
	    )
	  }
	  appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }
}
export default AddCoupon;