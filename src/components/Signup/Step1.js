import React from 'react'
import { statesData,citiesData } from '../../variables/Variables'
import { Link } from 'react-router-dom'





class Step1 extends React.Component{

    
    constructor(props){
      super(props)
      this.state = {
        state : statesData.states ,        
        city : citiesData.cities,       
        selState : null,
        selCity : [],
        error : false,
        errorMessage : ''        
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

    checkFormEmpty = (event) => {
        event.preventDefault();
    //    console.log(this.props)
       if( !this.props.firstName || !this.props.lastName  ){

         console.log('fields not filled')
         this.setState({
             error : true,
             errorMessage : 'Fields are empty. Please fill in all fields'
         })

       }else{
        this.setState({
            error : false            
        })
        //  console.log('yayy!!')
         this.props.changeToStep2(event)

       }            
    }


render(){



       const showCredentialError = this.state.error ? 'show error' : 'hide error'
               
        return(
            <div>
                
                <div className="form--container--heading-area create-acc">
                    <h4 className="theme-heading">Create Account</h4>
                    <p className="text-grey">Fill in the details to create account</p>            
                </div>
                  <p className={showCredentialError}>{ this.state.errorMessage }</p>
                <div id="createFormFirstSection">
                    <div className="form-group">
                            <label className="text-grey-color float-label">FIRST NAME</label>
                            <input type="text" className="form-control" name="firstName" value={this.props.firstName} onChange={this.props.handleStepChange} />
                        </div>
                        <div className="form-group">
                            <label className="text-grey-color float-label">LAST NAME</label>
                            <input type="text" className="form-control" name="lastName" value={this.props.lastName} onChange={this.props.handleStepChange} />
                        </div>
                        <div className="form-group">
                            <label className="text-grey-color float-label">Enter State</label>
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
                        <div className="form-group">
                            <label className="text-grey-color float-label">Enter City</label>
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
                                    
                                   
                        <button className="btn btn-block btn-info" onClick={event=>this.checkFormEmpty(event)}>PROCEED</button> 
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

export default Step1