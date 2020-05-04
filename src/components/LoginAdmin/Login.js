import React from 'react'
import LoginForm from './LoginForm'
import ForgotPassword from './ForgotPassword'
import {allUsers} from '../../variables/Variables'





class Login extends React.Component {  

   state = {
     passwordIsVisible : false,
     credentialError: false,
     loginUserScreen : true,
     createUserScreen : false,
     forgetPasswordScreen : false
   }

   showPasswordToggle = () => {
    this.setState({ passwordIsVisible : !this.state.passwordIsVisible })
    // console.log(this.state.passwordIsVisible);
   }

   loginCheck = (event) => {
        event.preventDefault()
        const email =  event.target.email.value
        const password =  event.target.password.value

        allUsers.forEach((user)=>{
            //  console.log(user.email)
            if( email === user.email && password === user.password ){
                console.log('matched')
                this.setState( {credentialError: !this.state.credentialError} )
                localStorage.setItem('role', "superAdmin");
                this.props.history.push('/admin/superbrand')

            }else{
                console.log('not matched')  
                this.setState( {credentialError: !this.state.credentialError} )           
            }
        })    
   }
   
   showCreateUSerForm = () => {
    this.setState({ createUserScreen : !this.state.createUserScreen })
    this.setState({ loginUserScreen : false })   
    this.setState({ forgetPasswordScreen : false }) 
    // window.location.pathname = '/signup'    
   }

   showForgetPasswordForm = () => {
    this.setState({ forgetPasswordScreen : !this.state.forgetPasswordScreen })
    this.setState({ createUserScreen : false })
    this.setState({ loginUserScreen : false })    
    // console.log(this.state.passwordIsVisible);
   }

   showLoginForm = () => {
    this.setState({ loginUserScreen : !this.state.loginUserScreen })
    this.setState({ forgetPasswordScreen : false })
    this.setState({ createUserScreen : false })        
    // console.log(this.state.passwordIsVisible);
   }
   
   //forgot password handler

   handleForgotPassword = (event) => {
       event.preventDefault();
    //    console.log(event.target.email.value)
       const email =  event.target.email.value
       allUsers.forEach((user)=>{
        //  console.log(user.email)
        if( email === user.email ){
            console.log('matched')
            this.setState( {credentialError: !this.state.credentialError} )
            this.setState({ loginUserScreen : !this.state.loginUserScreen })
            this.setState({ forgetPasswordScreen : false })
        }else{
            console.log('not matched')  
            this.setState( {credentialError: !this.state.credentialError} )           
        }
    })
   }


   render(){



    return(
          <div id="login-area">             
             <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>             
                 <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                 <div className="row">
                        <div className="login-area form--container">
                            <div className="login-area-logo-container">                                
                            </div>
                            {  
                             
                              this.state.forgetPasswordScreen === true                                 
                              ?
                                 <ForgotPassword 
                                    showCredentialError={ this.state.credentialError }
                                    showLoginForm={ this.showLoginForm }
                                    handleForgotPassword= { this.handleForgotPassword }
                                 />
                              :
                                 <LoginForm 
                                    showPasswordToggle={ this.showPasswordToggle }  
                                    loginCheck={ this.loginCheck } 
                                    showPasswordClassName={ this.state.passwordIsVisible }
                                    showPasswordEyeClassName={ this.state.passwordIsVisible }
                                    showCredentialError={ this.state.credentialError }
                                    showCreateUSerForm={this.showCreateUSerForm}
                                    showForgetPasswordForm={this.showForgetPasswordForm}
                                    
                                 />                   
                            }         
                        </div>                        
                     </div> {/*<!--row-->*/}
                 </div> {/*column ends*/}
                 <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>             
          </div>
        );   
   }
}

export default Login