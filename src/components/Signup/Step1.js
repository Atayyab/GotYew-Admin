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
                    <h1 className="theme-heading">Create Account</h1>
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