import React from 'react'
import LoginForm from './LoginForm'
import ForgotPassword from './ForgotPassword'
import {allUsers} from '../../variables/Variables'
import axios from 'axios'

class Login extends React.Component {  

   state = {
     passwordIsVisible : false,
     credentialError: false,
     errorText: '',
     loginUserScreen : true,
     createUserScreen : false,
     forgetPasswordScreen : false
   }

   showPasswordToggle = () => {
    this.setState({ passwordIsVisible : !this.state.passwordIsVisible })
    // console.log(this.state.passwordIsVisible);
   }

   loginCheckOld = (event) => {
        event.preventDefault()
        const email =  event.target.email.value
        const password =  event.target.password.value

        allUsers.forEach((user)=>{
            //  console.log(user.email)
            if( email === user.email && password === user.password ){
                console.log('matched')
                this.setState( {credentialError: !this.state.credentialError} )
                localStorage.setItem('role', "vendor");
                this.props.history.push('/admin/about-brand')
            }else{
                console.log('not matched')  
                this.setState( {credentialError: !this.state.credentialError} )           
            }
        })    
   }
   
   loginCheck =(event)=>{
    event.preventDefault()
    axios.post("http://localhost:5000/users/login_vendor",{
        email: event.target.email.value,
        password: event.target.password.value
    }).then(res=>{
        // setAuthToken(res.data.user_data.jwt_access_key)
        console.log(res.data)
        if( res.data.code == '0' ){

            localStorage.setItem('jwtToken' , res.data.access_key);
            console.log('matched')
                    this.setState( {credentialError: true , errorText: ''} )
                    localStorage.setItem('role', "vendor");
                    this.props.history.push('/admin/about-brand')

        }else{
            console.log('err')
            this.setState( {credentialError: true, errorText: res.data.message} )
        }
    }).catch(e=>{
        console.log('not matched')
        this.setState( {credentialError: !this.state.credentialError} )       
        // alert(e)
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

       axios.get('http://localhost:5000/admin/forgot_password?email='+event.target.email.value)
        .then(response => {
    // console.log(this.props.match.params)
    console.log(response.data)
    //   console.log("this - > ", this.state)
        

        //  console.log(user.email)
        if( response.data.code == 0 ){
            console.log('matched')
            this.setState( {credentialError: false} )
            this.setState({ loginUserScreen : !this.state.loginUserScreen })
            this.setState({ forgetPasswordScreen : false })
        }else{
            console.log('not matched')
            this.setState( {credentialError: true} )           
        }
})
.catch(function (error) {
    console.log(error);
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
                                    errorText={this.state.errorText}
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