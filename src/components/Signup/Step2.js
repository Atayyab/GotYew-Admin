import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'



class Step2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            matchPassword: true,
            matchEmail: true,
            password: '',
            confirmPassword: '',
            enteredEmail : '',
            error : false,
            errorMessage : '',
            modalIsOpen : false
        }
    }    
      

    handleEmail = async event => {      
         event.preventDefault();  
         const value = event.target.value
         this.props.handleStepChange(event)
         this.setState({
            enteredEmail: value
         },()=>{            
            })



            await axios.get('http://3.123.184.89:5000/admin/check_vendor?email='+value)
            .then(response => {
                if(response.data.code == 0)
                this.setState({ matchEmail : false })
                else
                this.setState({ matchEmail : true })

        // console.log(this.props.match.params)
        console.log(response.data, event)
        
    })
    .catch(function (error) {
        console.log(error);
    })

    }

    handlepassword = event => {        
         const value = event.target.value
         this.setState({
            password: value
         })         
    }

    handlepasswordMatch = event => {        
         const value = event.target.value
         this.setState({
            confirmPassword: value
         }, ()=>{
             
             if(this.state.password === this.state.confirmPassword){                
                    this.setState({ matchPassword : true }) 
                    this.props.handleDropdownChange({ name:'password', value: this.state.password })
                }else{                 
                    this.setState({ matchPassword : false })
                }
         })         
    }


    checkFormEmpty = (event) => {
        event.preventDefault();       
       
       if( !this.state.enteredEmail || !this.state.password || !this.state.confirmPassword ){

         console.log('fields not filled')         
         this.setState({
             error : true,
             errorMessage : 'Fields are empty. Please fill in all fields'
         })

       }
       else if (!this.state.matchEmail || !this.state.matchPassword){
           
         console.log('fields not valid')         
         this.setState({
             error : true,
             errorMessage : 'Fields are invalid. Please fill in all fields with valid data'
         })
       }
       else{
        this.setState({
            error : false,         
            // modalIsOpen : true   
        })
        //  console.log('yayy!!')
         this.props.changeToStep3(event)
       }
    }



    modalOff = (event) => {
        event.preventDefault();
        this.setState({
        modalIsOpen : true
        }, )        
    }



    render(){

        const showMatchedPasswordErr = `${ this.state.matchPassword ? 'hide error' : 'show error' }`
        const showMatchedEmailErr = `${ this.state.matchEmail ? 'hide error' : 'show error' }`
        const showPasswordClassName = `${ this.props.showPasswordClassName ? 'text' : 'password' }`
        const showPasswordEyeClassName = `${ this.props.showPasswordEyeClassName ? 'fa fa-eye password-switch' : 'fa fa-eye-slash password-switch' }`                     
        const showCredentialError = this.state.error ? 'show error' : 'hide error'  
        const modalOpenClassName = this.state.modalIsOpen ? 'signupModal modal fade in show' : 'signupModal modal fade' 
            
            return(
                <div id="createFormSecondSection">
                    <div className="form--container--heading-area create-acc">
                        <h1 className="theme-heading">Create Account</h1>
                        <p className="text-grey">Fill in the details to create account</p>           
                    </div>
                    <p className={showCredentialError}>{ this.state.errorMessage }</p>
                    <div className="form-group">
                        <label className="text-grey-color float-label">EMAIL ADDRESS</label>
                        <input type="text" className="form-control" name="email"  onChange={event=>{this.handleEmail(event)}} />
                    </div>
                    <div className="form-group">
                        <label className="text-grey-color float-label">PASSWORD</label>
                        <input type={showPasswordClassName} className="form-control" name="password" value={this.password} onChange={event=>{this.handlepassword(event)}} />                    
                        <i className={showPasswordEyeClassName} onClick={ ()=>{this.props.showPasswordToggle() } } ></i>
                    </div>
                    <div className="form-group">
                        <label className="text-grey-color float-label">CONFIRM PASSWORD</label>
                        <input type={showPasswordClassName} className="form-control" name="confirmPassword" value={this.confirmpassword} onChange={event=>{this.handlepasswordMatch(event)}} />                    
                    </div>
                    <p className={showMatchedPasswordErr}>Passwords do not matched</p>
                    <p className={showMatchedEmailErr}>Email already exist</p>
                    
                    <button className="btn btn-block btn-info" onClick={event=>{this.checkFormEmpty(event)} }>PROCEED</button>
                    <div className="form--container bottom-links">
                        <ul>                            
                            <li className="pull-right"> <Link to="/login">Login</Link></li>
                        </ul>
                    </div>




                    {/* Modal */}


                                                
                        <div className={modalOpenClassName} >
                            <div className="modal-dialog" >
                            <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="close" onClick={event=>{this.modalOff(event)} }><span >&times;</span></button>                                
                                </div>
                                <div className="modal-body">                                    
                                   <div className="modal-text-container">
                                       <h1 className="theme-heading">You're Almost There!</h1>
                                       <p>
                                          An activation link has been sent to your email. 
                                          Use that link to activate your account. 
                                          <span>Note that you will not be able to log back into your account until you activate it.</span>
                                       </p>                                       
                                   </div>                                
                                </div>
                                <div className="modal-footer">
                                  <button className="btn btn-info" onClick={ ()=>{ this.props.handleFormSubmit() } }>Continue</button>
                                </div>
                            </div>
                            </div>
                    </div>                                


                     {/* Modal end */}






                </div> 
            )
         

    }
}


export default Step2