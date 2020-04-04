import React from 'react'
import {Link} from 'react-router-dom'


const LoginForm = props => {


    const showCredentialError = `${ props.showCredentialError ? 'error show' : 'error hide' }`

    // console.log(props);
  return(
    <div>
        <div className="form--container--heading-area">
            <h3 className="theme-heading forgot-password">Forgot Password</h3>            
            <p className={showCredentialError}>Invalid username or password. Please try again</p>
        </div>
        <form  onSubmit={ (event)=>props.handleForgotPassword(event) } >
            <div className="form-group">
                <label className="text-grey-color float-label">Email address</label>
                <input type="email" className="form-control" name="email" />
            </div>
            <button className="btn btn-block btn-info">PROCEED</button>            
        </form>  
        <div className="form--container bottom-links">
            <ul>
                <li onClick={()=>{props.showLoginForm()}}>Login</li>
                <li className="pull-right"><Link to="/authgate/signup">Create Account</Link></li>
            </ul>
        </div>  
    </div>


  );
}

export default LoginForm