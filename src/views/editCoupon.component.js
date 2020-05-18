import React , { Component } from 'react';
// import axios from 'axios';

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
	    
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {		
			id:'2',
			name: "t-shirt",
			description: "cotton t-shirt plain no print",
			picture: [],
			amount: "50",		
			smallQuantity: "10",
			smallLength: "20",
			smallWidth: "30",
			smallHeight: "20",
			mediumQuantity: "10",
			mediumLength: "30",
			mediumWidth: "40",
			mediumHeight: "30",
			largeQuantity: "10",
			largeLength: "40",
			largeWidth: "50",
			largeHeight: "40",			
			smallClass : false,
			mediumClass : false,
			largeClass : false,
			quantityCheck : true    
	    }
  	}

  	// componentDidMount() {
    //   axios.get('https://catchcatchapp.com/admin/get_coupons_list_by_id?id='+this.props.match.params.id)
    //       .then(response => {
	// 		console.log(this.props.match.params)
	// 		console.log(response.data[0])
    //           this.setState({ 
    //             discount: response.data[0].discount, 
    //             code: response.data[0].code,
    //             type: response.data[0].type, 
    //             status: response.data[0].status,
    //             days: response.data[0].days,
    //             id: response.data[0].id });
    //       })
    //       .catch(function (error) {
    //           console.log(error);
    //       })
    // }


	

    onChangeSize(e) {		
		e.target.value === "Small" ? this.setState({ 
											 smallClass : true ,
											 mediumClass : false ,
											 largeClass : false ,
											 quantityCheck : false

											}) :
		e.target.value === "Medium" ? this.setState({ 
  											 smallClass : false ,
											 mediumClass : true ,
											 largeClass : false ,
											 quantityCheck : false 
											}) : 
		e.target.value === "Large" ? this.setState({
											 smallClass : false ,
											 mediumClass : false ,
											 largeClass : true , 
											 quantityCheck : false 
											}) : 
											this.setState({ 
												smallClass : false ,
												mediumClass : false ,
												largeClass : false ,
												quantityCheck : true 
											})		
  	}

	handleSmallQuantity(e) {
		  this.setState({
			  smallQuantity : e.target.value
		  });		  
		}
	handleSmallLength(e) {
		  this.setState({
			  smallLength : e.target.value
		  });
		} 
	handleSmallWidth(e) {
		  this.setState({
			  smallWidth : e.target.value
		  }); 
		}
	handleSmallHeight(e) {
		  this.setState({
			  smallHeight : e.target.value
		  }); 
		}
	handleMediumQuantity(e) {
		  this.setState({
			  mediumQuantity : e.target.value
		  });		  
		}
	handleMediumLength(e) {
			this.setState({
				mediumLength : e.target.value
			});
		} 
	handleMediumWidth(e) {
			this.setState({
				mediumWidth : e.target.value
			}); 			
		}
	handleMediumHeight(e) {
		this.setState({
			mediumHeight : e.target.value
		}); 
		}
	handleLargeQuantity(e) {
		this.setState({
			largeQuantity : e.target.value
		});		  
	}
	handleLargeLength(e) {
		this.setState({
			largeLength : e.target.value
		});
		} 
	handleLargeWidth(e) {
		this.setState({
			largeWidth : e.target.value
		}); 
		}
	handleLargeHeight(e) {
		this.setState({
			largeHeight : e.target.value
		}); 
		}
	onChangeName(e) {
		console.log("----",e.target)
	    this.setState({
			name: e.target.value
	    })  
	}
	 
	onChangeDescription(e) {
		console.log("----",e.target)
		console.log("----",e.target.value)
		
	    this.setState({
			description: e.target.value
	    })
	}

    onChangeAmount(e) {
		this.setState({
		  amount: e.target.value
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


	async onSubmit(e) {
		e.preventDefault();
		console.log("onSubmit state", this.state)
	    const obj = {
			//Everything is already set in state just need to send 
	    };
		console.log(obj)
	    // await axios.post('https://catchcatchapp.com/admin/edit_coupons', obj)
	    //     .then(res => console.log(res.data));
    
    	this.props.history.push('/admin/products');
  	}

  	render() {
		const smallClass = this.state.smallClass ? 'form-group show' : 'form-group hide'    
		const mediumClass = this.state.mediumClass ? 'form-group show' : 'form-group hide'    
		const largeClass = this.state.largeClass ? 'form-group show' : 'form-group hide'
	    return (			
	        <div className="container-fluid">
	            <h3 align="center">Update Product</h3>
	            <form onSubmit={this.onSubmit}>
				<div className="form-group">
	                    <label>Product Name:</label>
	                    <input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.name}
	                      onChange={this.onChangeName}
	                      />
	                </div>	                
					<div className="form-group">
						<label>Description</label>
						<input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.description}
	                      onChange={this.onChangeDescription}
	                      />
					</div>
					<div className="form-group">
	                    <label>Amount</label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.amount}
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
							<input type="number" 
							className="form-control"	  						                      
							onChange={this.handleSmallLength}	
							disabled={this.state.quantityCheck}
							value={this.state.smallLength}						
							/>							
							<label>Width</label>
							<input type="number" 
							className="form-control"	  						                      
							onChange={this.handleSmallWidth}	
							disabled={this.state.quantityCheck}
							value={this.state.smallWidth}						
							/>
							<label>Height</label>
							<input type="number" 
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
							<input type="number" 
							className="form-control"	  						                      
							onChange={this.handleMediumLength}	
							disabled={this.state.quantityCheck}
							value={this.state.mediumLength}						
							/>							
							<label>Width</label>
							<input type="number" 
							className="form-control"	  						                      
							onChange={this.handleMediumWidth}	
							disabled={this.state.quantityCheck}
							value={this.state.mediumWidth}						
							/>
							<label>Height</label>
							<input type="number" 
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
							<input type="number" 
							className="form-control"	  						                      
							onChange={this.handleLargeLength}	
							disabled={this.state.quantityCheck}
							value={this.state.largeLength}						
							/>							
							<label>Width</label>
							<input type="number" 
							className="form-control"	  						                      
							onChange={this.handleLargeWidth}	
							disabled={this.state.quantityCheck}
							value={this.state.largeWidth}						
							/>
							<label>Height</label>
							<input type="number" 
							className="form-control"	  						                      
							onChange={this.handleLargeHeight}	
							disabled={this.state.quantityCheck}
							value={this.state.largeHeight}						
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