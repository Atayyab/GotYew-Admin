import React , { Component } from 'react';
import axios from 'axios';

class EditCoupon extends Component {
	constructor(props) {		
	    super(props);		
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeAmount = this.onChangeAmount.bind(this);
	    this.onChangeSize = this.onChangeSize.bind(this);
	    this.handleSmallQuantity = this.handleSmallQuantity.bind(this); 
	    this.handleSmallLength = this.handleSmallLength.bind(this);
	    this.handleSmallWidth = this.handleSmallWidth.bind(this);
	    this.handleSmallHeight = this.handleSmallHeight.bind(this);
		this.handleMediumQuantity = this.handleMediumQuantity.bind(this);
		this.handleMediumLength = this.handleMediumLength.bind(this);
	    this.handleMediumWidth = this.handleMediumWidth.bind(this);
	    this.handleMediumHeight = this.handleMediumHeight.bind(this);   
		this.handleLargeQuantity = this.handleLargeQuantity.bind(this);
		this.handleLargeLength = this.handleLargeLength.bind(this);
	    this.handleLargeWidth = this.handleLargeWidth.bind(this);
	    this.handleLargeHeight = this.handleLargeHeight.bind(this);	  
		this.handlexLargeQuantity = this.handlexLargeQuantity.bind(this);
		this.handlexLargeLength = this.handlexLargeLength.bind(this);
	    this.handlexLargeWidth = this.handlexLargeWidth.bind(this);
	    this.handlexLargeHeight = this.handlexLargeHeight.bind(this);	   
	    
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {	product : {
            "product_id": -1,
            "product_image": "",
            "product_name": "",
            "product_category": "",
            "product_sub_category": "",
            "product_price": "",
            "status": "",
            "product_description": "",
            "size": [
                {
                    "product_id": "",
                    "type": "small",
                    "length": "0-0",
                    "width": "0-0",
                    "height": "0-0",
                    "quantity": 0
                },
                {
                    "product_id": "",
                    "type": "medium",
                    "length": "0-0",
                    "width": "0-0",
                    "height": "0-0",
                    "quantity": 0
                },
                {
                    "product_id": "",
                    "type": "large",
                    "length": "0-0",
                    "width": "0-0",
                    "height": "0-0",
                    "quantity": 0
                },
                {
                    "product_id": "",
                    "type": "xl",
                    "length": "0-0",
                    "width": "0-0",
                    "height": "0-0",
                    "quantity": 0
                }
            ]
        },	
			id:'2',
			name: "name",
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
		  
		const headers = {
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem("jwtToken")
		  }
      axios.get('http://3.123.184.89:5000/admin/product_by_id?id='+this.props.match.params.id, {
    //   axios.get('http://localhost:5000/admin/product_by_id?id='+this.props.match.params.id, {
		headers : headers
	  })
          .then(async (response) => {
			console.log(this.props.match.params)
			console.log(response.data)
			if(response.data.product[0].size.length < 1){
				response.data.product[0].size = this.state.product.size;
				response.data.product[0].size[0].product_id = response.data.product[0].product_id;
				response.data.product[0].size[1].product_id = response.data.product[0].product_id;
				response.data.product[0].size[2].product_id = response.data.product[0].product_id;
				response.data.product[0].size[3].product_id = response.data.product[0].product_id;
			}
              this.setState({ 
                product: response.data.product[0]
			});


			if(response.data.product[0].size.length > 0){
				for(var i = 0; i < response.data.product[0].size.length ; i++ ){
				  if(response.data.product[0].size[i].type == "small"){
					  this.setState({ 
						  smallHeight: response.data.product[0].size[i].height,
						  smallLength: response.data.product[0].size[i].length,
						  smallWidth: response.data.product[0].size[i].width,
						  smallQuantity: response.data.product[0].size[i].quantity
					  });
				  }else if(response.data.product[0].size[i].type == "medium"){
					this.setState({ 
						mediumHeight: response.data.product[0].size[i].height,
						mediumLength: response.data.product[0].size[i].length,
						mediumWidth: response.data.product[0].size[i].width,
						mediumQuantity: response.data.product[0].size[i].quantity
					});
				  }else if(response.data.product[0].size[i].type == "large"){
					this.setState({ 
						largeHeight: response.data.product[0].size[i].height,
						largeLength: response.data.product[0].size[i].length,
						largeWidth: response.data.product[0].size[i].width,
						largeQuantity: response.data.product[0].size[i].quantity
					});
				  }else if(response.data.product[0].size[i].type == "xl"){
					this.setState({ 
						xlargeHeight: response.data.product[0].size[i].height,
						xlargeLength: response.data.product[0].size[i].length,
						xlargeWidth: response.data.product[0].size[i].width,
						xlargeQuantity: response.data.product[0].size[i].quantity
					});
				  }
				}
			}

          })
          .catch(function (error) {
              console.log(error);
		  })
		  
    }


	

    onChangeSize(e) {		
		e.target.value === "Small" ? this.setState({ 
											 smallClass : true ,
											 mediumClass : false ,
											 largeClass : false ,
											 xlargeClass : false ,
											 quantityCheck : false

											}) :
		e.target.value === "Medium" ? this.setState({ 
  											 smallClass : false ,
											 mediumClass : true ,
											 largeClass : false ,
											 xlargeClass : false ,
											 quantityCheck : false 
											}) : 
		e.target.value === "xLarge" ? this.setState({ 
  											 smallClass : false ,
											 mediumClass : false ,
											 largeClass : false ,
											 xlargeClass : true ,
											 quantityCheck : false 
											}) : 
		e.target.value === "Large" ? this.setState({
											 smallClass : false ,
											 mediumClass : false ,
											 largeClass : true , 
											 xlargeClass : false ,
											 quantityCheck : false 
											}) : 
											this.setState({ 
												smallClass : false ,
												mediumClass : false ,
												largeClass : false ,
												xlargeClass : false ,
											 	quantityCheck : true 
											})		
  	}

	handleSmallQuantity(e) {
		
		var val = e.target.value
		  this.setState({
			  smallQuantity : val
		  });	
		  var sizeObj = this.state.product.size
		  for(var i = 0; i < this.state.product.size.length ; i++){
			if(this.state.product.size[i].type == "small"){
				sizeObj[i].quantity = val
				this.setState({
					product : {...this.state.product,
						size : sizeObj
					}
				});	
			}
		  }
		}
	async handleSmallLength(e) {
		var val = e.target.value
		
			 await this.setState({
			  smallLength : val
		  });
		  var sizeObj = this.state.product.size
		  console.log(sizeObj)
		  for(var i = 0; i < this.state.product.size.length ; i++){
			if(this.state.product.size[i].type == "small"){
				sizeObj[i].length = val
				this.setState({
					product : {...this.state.product,
						size : sizeObj
					}
				});	
			}
		  }
		  console.log(sizeObj, " - ", this.state.product)
		} 
	handleSmallWidth(e) {
		  this.setState({
			  smallWidth : e.target.value
		  });  
		  var sizeObj = this.state.product.size
		  for(var i = 0; i < this.state.product.size.length ; i++){
			if(this.state.product.size[i].type == "small"){
				sizeObj[i].width = e.target.value
				this.setState({
					product : {...this.state.product,
						size : sizeObj
					}
				});	
			}
		  }
		}
	handleSmallHeight(e) {
		  this.setState({
			  smallHeight : e.target.value
		  }); 
		  var sizeObj = this.state.product.size
		  for(var i = 0; i < this.state.product.size.length ; i++){
			if(this.state.product.size[i].type == "small"){
				sizeObj[i].height = e.target.value
				this.setState({
					product : {...this.state.product,
						size : sizeObj
					}
				});	
			}
		  }
		}
	handleMediumQuantity(e) {
		  this.setState({
			  mediumQuantity : e.target.value
		  });	
		  var sizeObj = this.state.product.size
		  for(var i = 0; i < this.state.product.size.length ; i++){
			if(this.state.product.size[i].type == "medium"){
				sizeObj[i].quantity = e.target.value
				this.setState({
					product : {...this.state.product,
						size : sizeObj
					}
				});	
			}
		  }
		}
	handleMediumLength(e) {
			this.setState({
				mediumLength : e.target.value
			});
			var sizeObj = this.state.product.size
			for(var i = 0; i < this.state.product.size.length ; i++){
			  if(this.state.product.size[i].type == "medium"){
				  sizeObj[i].length = e.target.value
				  this.setState({
					  product : {...this.state.product,
						  size : sizeObj
					  }
				  });	
			  }
			}
		} 
	handleMediumWidth(e) {
			this.setState({
				mediumWidth : e.target.value
			}); 	
			var sizeObj = this.state.product.size
			for(var i = 0; i < this.state.product.size.length ; i++){
			  if(this.state.product.size[i].type == "medium"){
				  sizeObj[i].width = e.target.value
				  this.setState({
					  product : {...this.state.product,
						  size : sizeObj
					  }
				  });	
			  }
			}		
		}
	handleMediumHeight(e) {
		this.setState({
			mediumHeight : e.target.value
		}); 
		var sizeObj = this.state.product.size
		for(var i = 0; i < this.state.product.size.length ; i++){
		  if(this.state.product.size[i].type == "medium"){
			  sizeObj[i].height = e.target.value
			  this.setState({
				  product : {...this.state.product,
					  size : sizeObj
				  }
			  });	
		  }
		}
	}
	handleLargeQuantity(e) {
		this.setState({
			largeQuantity : e.target.value
		});	
		var sizeObj = this.state.product.size
		for(var i = 0; i < this.state.product.size.length ; i++){
		  if(this.state.product.size[i].type == "large"){
			  sizeObj[i].quantity = e.target.value
			  this.setState({
				  product : {...this.state.product,
					  size : sizeObj
				  }
			  });	
		  }
		}
	}
	handleLargeLength(e) {
		this.setState({
			largeLength : e.target.value
		});
		var sizeObj = this.state.product.size
		for(var i = 0; i < this.state.product.size.length ; i++){
		  if(this.state.product.size[i].type == "large"){
			  sizeObj[i].length = e.target.value
			  this.setState({
				  product : {...this.state.product,
					  size : sizeObj
				  }
			  });	
		  }
		}
	} 
	handleLargeWidth(e) {
		this.setState({
			largeWidth : e.target.value
		}); 
		var sizeObj = this.state.product.size
		for(var i = 0; i < this.state.product.size.length ; i++){
		  if(this.state.product.size[i].type == "large"){
			  sizeObj[i].width = e.target.value
			  this.setState({
				  product : {...this.state.product,
					  size : sizeObj
				  }
			  });	
		  }
		}
	}
	handleLargeHeight(e) {
		this.setState({
			largeHeight : e.target.value
		}); 
		var sizeObj = this.state.product.size
		for(var i = 0; i < this.state.product.size.length ; i++){
		  if(this.state.product.size[i].type == "large"){
			  sizeObj[i].height = e.target.value
			  this.setState({
				  product : {...this.state.product,
					  size : sizeObj
				  }
			  });	
		  }
		}
		}
		handlexLargeQuantity(e) {
			this.setState({
				largeQuantity : e.target.value
			});	
			var sizeObj = this.state.product.size
			for(var i = 0; i < this.state.product.size.length ; i++){
			  if(this.state.product.size[i].type == "xl"){
				  sizeObj[i].quantity = e.target.value
				  this.setState({
					  product : {...this.state.product,
						  size : sizeObj
					  }
				  });	
			  }
			}
		}
		handlexLargeLength(e) {
			this.setState({
				largeLength : e.target.value
			});
			var sizeObj = this.state.product.size
			for(var i = 0; i < this.state.product.size.length ; i++){
			  if(this.state.product.size[i].type == "xl"){
				  sizeObj[i].length = e.target.value
				  this.setState({
					  product : {...this.state.product,
						  size : sizeObj
					  }
				  });	
			  }
			}
		} 
		handlexLargeWidth(e) {
			this.setState({
				largeWidth : e.target.value
			}); 
			var sizeObj = this.state.product.size
			for(var i = 0; i < this.state.product.size.length ; i++){
			  if(this.state.product.size[i].type == "xl"){
				  sizeObj[i].width = e.target.value
				  this.setState({
					  product : {...this.state.product,
						  size : sizeObj
					  }
				  });	
			  }
			}
		}
		handlexLargeHeight(e) {
			this.setState({
				largeHeight : e.target.value
			}); 
			var sizeObj = this.state.product.size
			for(var i = 0; i < this.state.product.size.length ; i++){
			  if(this.state.product.size[i].type == "xl"){
				  sizeObj[i].height = e.target.value
				  this.setState({
					  product : {...this.state.product,
						  size : sizeObj
					  }
				  });	
			  }
			}
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
	  
    handlePicture = (e) => {     
		if( e.target.files.length > 3 ){
			e.preventDefault()
			alert("You can only upload a maximum of 3 files");
			
		}
	  this.setState({
		  picture: e.target.files,
		  images : ""
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
		
		const fd = new FormData();
		
		this.createFormData(fd, 'size', this.state.product.size)
		if(this.state.picture){
			for(var x = 0; x<this.state.picture.length; x++) {
				fd.append('file', this.state.picture[x])
			}
			
		}
			fd.append('images', this.state.product.product_image);
			fd.append('id', this.state.product.product_id);
			fd.append('name', this.state.product.product_name);
			fd.append('description', this.state.product.product_description);
			fd.append('price', this.state.product.product_price);
			// for(var x = 0; x<this.state.product.size.length; x++) {
			// 	fd.append('size[]', this.state.product.size[x]);
			// }
			fd.append('category', this.state.product.product_category);
			
			// fd.append('image', this.state.file, this.state.file.name);
			
			
		const headers = {
			// 'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem("jwtToken")
		  }
		  
			await axios.post('http://3.123.184.89:5000/admin/edit_product', fd, {
			// await axios.post('http://localhost:5000/admin/edit_product', fd, {
				headers : headers
			  })
				.then(res => console.log(res.data));
		
		
    	this.props.history.push('/admin/products');
  	}
  	render() {
		const smallClass = this.state.smallClass ? 'form-group show' : 'form-group hide'    
		const mediumClass = this.state.mediumClass ? 'form-group show' : 'form-group hide'    
		const largeClass = this.state.largeClass ? 'form-group show' : 'form-group hide'
		const xlargeClass = this.state.xlargeClass ? 'form-group show' : 'form-group hide'
	    return (			
	        <div className="container-fluid">
	            <h3 align="center">Update Product</h3>
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
					<div className="col-md-3">
						<div className="form-group">
							<label>Size </label><br/>
							<select className="form-control" onChange={this.onChangeSize} >
								<option value="">Select Size</option>
								<option value="Small">Small</option>
								<option value="Medium">Medium</option>
								<option value="Large">Large</option>
								<option value="xLarge">XL</option>
							</select>
						</div>
					</div>					
					<div className="col-md-9">						
						<div className={smallClass}>
						<h4>Enter Small Size Details Below</h4>
							<label>Quantity</label>
							<input type="number" 
							className="form-control"	  						                      
							onChange={this.handleSmallQuantity}
							disabled={this.state.quantityCheck}
							value={this.state.smallQuantity}
							/>
							<label>Length</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleSmallLength}	
							disabled={this.state.quantityCheck}
							value={this.state.smallLength}						
							/>							
							<label>Width</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleSmallWidth}	
							disabled={this.state.quantityCheck}
							value={this.state.smallWidth}						
							/>
							<label>Height</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleSmallHeight}	
							disabled={this.state.quantityCheck}
							value={this.state.smallHeight}					
							/>
						</div>
						<div className={mediumClass}>
						<h4>Enter Medium Size Details Below</h4>
						<label>Quantity</label>
						    <input type="number" 
							className="form-control"	  						                      
							onChange={this.handleMediumQuantity}
							disabled={this.state.quantityCheck}
							value={this.state.mediumQuantity}
							/>
							<label>Length</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleMediumLength}	
							disabled={this.state.quantityCheck}
							value={this.state.mediumLength}						
							/>							
							<label>Width</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleMediumWidth}	
							disabled={this.state.quantityCheck}
							value={this.state.mediumWidth}						
							/>
							<label>Height</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleMediumHeight}	
							disabled={this.state.quantityCheck}
							value={this.state.mediumHeight}						
							/>
						</div>
						<div className={largeClass}>
						<h4>Enter Large Size Details Below</h4>
						    <label>Quantity</label>
						    <input type="number" 
							className="form-control"	  						                      
							onChange={this.handleLargeQuantity}
							disabled={this.state.quantityCheck}
							value={this.state.largeQuantity}
							/>
							<label>Length</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleLargeLength}	
							disabled={this.state.quantityCheck}
							value={this.state.largeLength}						
							/>							
							<label>Width</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleLargeWidth}	
							disabled={this.state.quantityCheck}
							value={this.state.largeWidth}						
							/>
							<label>Height</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handleLargeHeight}	
							disabled={this.state.quantityCheck}
							value={this.state.largeHeight}						
							/>
						</div>
						<div className={xlargeClass}>
						<h4>Enter Extra Large Size Details Below</h4>
						    <label>Quantity</label>
						    <input type="number" 
							className="form-control"	  						                      
							onChange={this.handlexLargeQuantity}
							disabled={this.state.quantityCheck}
							value={this.state.xlargeQuantity}
							/>
							<label>Length</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handlexLargeLength}	
							disabled={this.state.quantityCheck}
							value={this.state.xlargeLength}						
							/>							
							<label>Width</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handlexLargeWidth}	
							disabled={this.state.quantityCheck}
							value={this.state.xlargeWidth}						
							/>
							<label>Height</label>
							<input type="text" 
							className="form-control"	  						                      
							onChange={this.handlexLargeHeight}	
							disabled={this.state.quantityCheck}
							value={this.state.xlargeHeight}						
							/>
						</div>
					</div>										
	                <div className="form-group">
	                    <input type="submit" 
	                      value="Update Product" 
						  className="btn btn-primary"
						  style={{margin: '24px 0 0 0'}}						
						  />
	                </div>
	            </form>
	        </div>
	    )
  	}
}
export default EditCoupon;