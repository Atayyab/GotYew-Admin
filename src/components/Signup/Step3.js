import React from 'react'
import {Link} from 'react-router-dom'


import axios from 'axios';
// import PlacesAutocomplete, {
// 	geocodeByAddress,
// 	getLatLng
//   } from "react-places-autocomplete";
  
import MultipleImageUploadComponent from './multiple-image-upload.component';
import Map from './Maps';
class Step3 extends React.Component{    
              
	constructor(props) {
		console.log("create-Sticker-components")
	    super(props);
		console.log(this) 
	    this.onChangeCode = this.onChangeCode.bind(this);
	    this.onChangeSubscriptionDays = this.onChangeSubscriptionDays.bind(this);
	    this.onChangeTag = this.onChangeTag.bind(this);
	    this.onChangeSubscriptionStatus = this.onChangeSubscriptionStatus.bind(this);
	    this.onChangeFile = this.onChangeFile.bind(this);
	    this.onChangeType = this.onChangeType.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {
		tag: '',
		code: '',
		type: '',
		status: '',
		radius: '',
		days: '',
		fileArray: [],
		fileObj : [],
		file: '',
		location : {lat: 28.644800, lng: 77.216721},
		id:''
	    }
  	}

  	// componentDidMount() {
    //   axios.get('https://catchcatchapp.com/admin/get_coupons_list_by_id?id='+this.props.match.params.id)
    //       .then(response => {
	// 		console.log(this.props.match.params)
	// 		console.log(response.data[0])
    //         //   this.setState({ 
    //         //     discount: response.data[0].discount, 
    //         //     code: response.data[0].code,
    //         //     type: response.data[0].type, 
    //         //     status: response.data[0].status,
    //         //     days: response.data[0].days,
    //         //     id: response.data[0].id });
    //       })
    //       .catch(function (error) {
    //           console.log(error);
    //       })
    // }


    onChangeSubscriptionDays(e) {
	    this.setState({
			days: e.target.value
	    });
	  }
	  onPositionChanged = () => {
		this.setState({
			location: {lat: 30.3753, lng: 69.3451}
	    });
	  }

	  uploadMultipleFiles(fileObj) {
		// console.log(fileObj)
        this.fileArray = []
        // this.fileObj.push(e.target.files)
        for (let j = 0; j < fileObj.length; j++) {
            for (let i = 0; i < fileObj[j].length; i++) {
            this.fileArray.push(fileObj[j][i])
            // this.fileArray.push(URL.createObjectURL(fileObj[j][i]))
            // console.log(j, " ", i)
            // console.log(this.state)
        }
    }
        this.setState({ file: this.fileArray })
        // e.target.files = null
        console.log(this.fileArray)
    }
	  onChangeFile(e) {
	    this.setState({
			file: e.target.files[0]
		});
		console.log(e.target.files[0])
  	}
	  onChangeSubscriptionStatus(e) {
		  this.setState({
			  status: e.target.value
		  });
		}
	  onChangeTag(e) {
		  this.setState({
			tag: e.target.value
		  });
		  console.log(this.state)
		}
	
		onChangeRadius = (e) => {
			console.log(this.state)
			this.setState({
			  radius: e.target.value
			});
		  }
	onChangeCode(e) {
	    this.setState({
			code: e
		})  
		
		const arr = e.split(",");
		
	    this.setState({
			tag: arr[0]
		})  
		console.log(this.state)
	}
	 
	onChangeType(e) {
		console.log("----",e.target)
		console.log("----",e.target.value)
		
	    this.setState({
			type: e.target.value
	    })
	}

	onChangeLocation = (loc) => {
	    this.setState({
			location: loc
		})
		console.log(this.state.location , loc)
	}

	onSearchLocation = (loc) => {
	    this.setState({
			tag: loc
		})
		console.log(this.state.tag , loc)
	}

	async onSubmit(e) {
		e.preventDefault();
		console.log("onSubmit state", this.state)
	    const obj = {
			tag: this.state.tag,
			image: this.state.file
	    };
		console.log(obj)
		const fd = new FormData();
		if(this.state.file){
			fd.append('tag', this.state.tag);
			fd.append('radius', this.state.radius);
			fd.append('latitude', this.state.location.lat);
			fd.append('longitude', this.state.location.lng);
			// fd.append('image', this.state.file, this.state.file.name);
			for(var x = 0; x<this.state.file.length; x++) {
				fd.append('file', this.state.file[x])
			}
			
				await axios.post('http://localhost:5000/admin/add_vendor', fd)
			// axios.post('http://apis.ifollowinc.com:5000/admin/stickers_new', fd)
				.then(res => console.log(res.data));
		
			this.props.history.push('/admin/login');
		}
  	}

  	render() {
    
	    return (
	        <div className="container-fluid">
	            <form onSubmit={()=>{ this.props.handleFormSubmit() } }>
	            {/* <form onSubmit={this.onSubmit}> */}
	                {/* <div className="form-group">
	                    <label>Promo Code:  </label>
	                    <input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.code}
	                      onChange={this.onChangeCode}
	                      />
	                </div> */}
	                <div className="form-group">      
					
					<label>Select Address Location </label>
	  <Map obj= { this.state.location } onSearchLocation = {(loc) => this.onSearchLocation(loc)} onChangeLocation = {(loc) => this.onChangeLocation(loc)} />
	  
	                </div>
					
					{/* <div className="form-group">
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.tag}
	                      onChange={this.onChangeTag}
	                      />
	                </div> */}
					
					{/* <div className="form-group">
	                    <label>Radius : </label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.radius}
	                      onChange={this.onChangeRadius}
	                      />
	                </div> */}
					
					
	                {/* <div className="form-group">
	                    <input type="file" 
	                      onChange={this.onChangeFile}
						  />
	                </div> */}
					<MultipleImageUploadComponent uploadMultipleFile = {(loc) => this.uploadMultipleFiles(loc)} />
	                <div className="form-group">
	                    <input type="submit" 
	                      value="Register" 
	                      className="btn btn-block btn-info"/>
	                </div> 
	            </form>
	        </div>
	    )
  	}
}
export default Step3