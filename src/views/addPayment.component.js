import React , { Component } from 'react';
import axios from 'axios';

class AddCoupon extends Component {
	constructor(props) {		
	    super(props);		
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeAmount = this.onChangeAmount.bind(this);
		
	   
		  
	    
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {	
			product : {
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
			console.log(this.state.product);
		  
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
		
		if(this.state.picture){
			fd.append('total_remaining', this.state.product.product_name);
			fd.append('transfered', this.state.product.product_description);
			// for(var x = 0; x<this.state.product.size.length; x++) {
			// 	fd.append('size[]', this.state.product.size[x]);
			// }
			
			fd.append('image', this.state.picture[0], this.state.picture[0].name);
			// for(var x = 0; x<this.state.picture.length; x++) {
			// 	fd.append('image', this.state.picture[x])
			// }
			
		  
			await axios.post('http://3.123.184.89:5000/admin/add_payments', fd)
				.then(res => console.log(res.data));
		}
		
    	this.props.history.push('/admin/payments');
  	}

  	render() {
		const smallClass = this.state.smallClass ? 'form-group show' : 'form-group hide'    
		const mediumClass = this.state.mediumClass ? 'form-group show' : 'form-group hide'    
		const largeClass = this.state.largeClass ? 'form-group show' : 'form-group hide'
		const xlargeClass = this.state.xlargeClass ? 'form-group show' : 'form-group hide'
	    return (			
	        <div className="container-fluid">
	            <h3 align="center">Add Payment</h3>
	            <form onSubmit={this.onSubmit}>
				<div className="form-group">
	                    <label>Total Remaining Amount:</label>
	                    <input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.product.product_name}
	                      onChange={this.onChangeName}
	                      />
	                </div>	                
					<div className="form-group">
						<label>Transfered</label>
						<input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.product.product_description}
	                      onChange={this.onChangeDescription}
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
	        </div>
	    )
  	}
}
export default AddCoupon;