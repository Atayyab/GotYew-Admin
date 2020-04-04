import React from 'react'
import { statesData,citiesData } from '../variables'
import { Link } from 'react-router-dom'





class CreateNewForm extends React.Component{

    
    constructor(props){
      super(props)
      this.state = {
        state : statesData.states ,        
        city : citiesData.cities,        
        selState : null,
        selCity : [],
        crFormFirstname : '',
        crFormLastname : ''
     }
    }


    handleStateSelect=(e)=>{
        
      const selectedValue = parseInt(e.target.value)       
          
       this.setState({selState: selectedValue},()=>{

          const stateCity=this.state&&this.state.city.filter(c => c.stateId === this.state.selState);
        
            this.setState({selCity: stateCity},()=>{
                // console.log(this.state.selCity)
            })          
            
        })
        let index = e.nativeEvent.target.selectedIndex;    
        let stateName = e.nativeEvent.target[index].text        
        console.log(stateName)
        this.props.handleDropdownChange({  name: 'state', value: stateName  })
                
    }


    handleCitySelect=(e)=>{        
        let index = e.nativeEvent.target.selectedIndex;    
        let cityName = e.nativeEvent.target[index].text        
        console.log(cityName)
        this.props.handleDropdownChange({  name: 'city', value: cityName  })
    }
    

    handleFormContinue = (event) =>{
        event.preventDefault()
        console.log(event.target)
    }




    


render(){



       
               
        return(
            <div>
                
                <div className="form--container--heading-area create-acc">
                    <h1 className="theme-heading">Create Account</h1>
                    <p className="text-grey">Sed ut perspiciatis unde omnis iste natus error</p>            
                </div>
                
                <div id="createFormFirstSection">
                    <div className="form-group">
                            <label className="text-grey-color float-label">FIRST NAME</label>
                            <input type="text" className="form-control" name="firstName" value={this.props.firstName} onChange={this.props.handleStepChange} />
                        </div>
                        <div className="form-group">
                            <label className="text-grey-color float-label">LAST NAME</label>
                            <input type="text" className="form-control" name="lastName" value={this.props.lastName} onChange={this.props.handleStepChange} />
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12 p-4">
                            <div className="form-group">
                                <label className="text-grey-color float-label">SELECT STATE</label>
                                <select className="form-control" onChange={ e =>{this.handleStateSelect(e) }} >
                                    <option>Select State</option>                
                                {
                                    statesData.map((state)=>{     
                                        return (
                                        <option value={state.id} key={state.id} name="state">{state.name}</option>
                                        )
                                    })                    
                                }                        
                                </select>
                            </div>
                        </div>            
                        <div className="col-lg-6 col-sm-6 col-xs-12 p-4">
                            <div className="form-group">
                                <label className="text-grey-color float-label">SELECT CITY</label>
                                <select className="form-control" onChange={ e=>{this.handleCitySelect(e)} }> 
                                        <option>Select City</option>                                               
                                    {   
                                    this.state&&this.state.selCity.map((city)=>{                                                        
                                        return (
                                            <option value={city.id} key={city.id}>{city.name}</option>
                                            )                                                                           
                                    })                                                         
                                    } 
                                </select>
                            </div>
                        </div>            
                        <button className="btn btn-block theme-grad-btn proceed-btn" onClick={event=>this.props.changeToStep2(event)}>PROCEED</button> 
                </div>    
          
                
                <div className="form--container bottom-links">
                    <ul>
                        {/* <li onClick={ ()=>{ this.props.showForgetPasswordForm() } }>Forgot Password</li> */}
                        <li className="pull-right"><Link to="/login">Login</Link></li>
                    </ul>                
                </div>  
            </div>
  
        );

 }        
}

export default CreateNewForm