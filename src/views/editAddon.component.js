import React , { Component } from 'react';
// import axios from 'axios';

class EditAddon extends Component {
	constructor(props) {
		console.log("edit-addon-components")
	    super(props);
		console.log(this) 
	    this.onChangeSubscriptionName = this.onChangeSubscriptionName.bind(this);
	    this.onChangePrice = this.onChangePrice.bind(this);
	    this.onChangeQuantity = this.onChangeQuantity.bind(this);
	    this.onChangeDays = this.onChangeDays.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {
	      name: '',
	      price: '',
	      quantity: '',
	      days: '',
	      id:''
	    }
  	}

  	// componentDidMount() {
    //   axios.get('https://catchcatchapp.com/admin/addon_list_by_id?id='+this.props.match.params.id)
    //       .then(response => {
	// 		console.log(this.props.match.params)
	// 		console.log(response.data[0])
    //           this.setState({ 
    //             name: response.data[0].name, 
    //             price: response.data[0].price,
    //             quantity: response.data[0].quantity, 
    //             days: response.data[0].days,
    //             id: response.data[0].id });
    //       })
    //       .catch(function (error) {
    //           console.log(error);
    //       })
    // }


    onChangeSubscriptionName(e) {
	    this.setState({
	      name: e.target.value
	    });
  	}
	
	onChangePrice(e) {
	    this.setState({
	      price: e.target.value
	    })  
	}
	 
	onChangeQuantity(e) {
	    this.setState({
	      quantity: e.target.value
	    })  
	}
	onChangeDays(e) {
	    this.setState({
	      days: e.target.value
	    })  
	}
	


	// async onSubmit(e) {
	// 	e.preventDefault();
	//     const obj = {
	// 	  id: this.props.match.params.id,
	//       name: this.state.name,
	//       quantity: this.state.quantity,
	//       days: this.state.days,
	//       price: this.state.price
	//     };
	//     await axios.post('https://catchcatchapp.com/admin/addon_packages_update', obj)
	//         .then(res => console.log(res.data));
    
    // 	this.props.history.push('/admin/subscription');
  	// }

  	render() {
    
	    return (
	        <div className="container-fluid">
	            <h3 align="center">Update Addon</h3>
	            <form onSubmit={this.onSubmit}>
	                <div className="form-group">
	                    <label>Subscription Name:  </label>
	                    <input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.name}
	                      onChange={this.onChangeSubscriptionName}
	                      />
	                </div>
	                <div className="form-group">
	                    <label>Price: </label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.price}
	                      onChange={this.onChangePrice}
	                      />
	                </div>
	                <div className="form-group">
	                    <label>Quantity: </label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.quantity}
	                      onChange={this.onChangeQuantity}
	                      />
	                </div>
	                <div className="form-group">
	                    <label>Days: </label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.days}
	                      onChange={this.onChangeDays}
	                      />
	                </div>
	                <div className="form-group">
	                    <input type="submit" 
	                      value="Update Addon" 
	                      className="btn btn-primary"/>
	                </div>
	            </form>
	        </div>
	    )
  	}
}
export default EditAddon;