import React from 'react'
import {Link} from 'react-router-dom'


const LoginForm = props => {

    const showPasswordClassName = `${ props.showPasswordClassName ? 'text' : 'password' }`
    const showPasswordEyeClassName = `${ props.showPasswordEyeClassName ? 'fa fa-eye password-switch' : 'fa fa-eye-slash password-switch' }`
    const showCredentialError = `${ props.showCredentialError ? 'error show' : 'error hide' }`

    // console.log(props);
  return(
    <div>
        <div className="form--container--heading-area">
            <h1 className="theme-heading">Login</h1>            
            <p className={showCredentialError}>{props.errorText}</p>
        </div>
        <form  onSubmit={ (event)=>props.loginCheck(event) } >
            <div className="form-group">
                <label className="text-grey-color float-label">Email address</label>
                <input type="email" className="form-control" name="email" />
            </div>
            <div className="form-group">
                <label className="text-grey-color float-label">Password</label>
                <input type={showPasswordClassName} className="form-control" name="password" />
                <i className={showPasswordEyeClassName} onClick={ ()=>{props.showPasswordToggle() } } ></i>
            </div>
            <button className="btn btn-block btn-info">PROCEED</button>            
        </form>  
        <div className="form--container bottom-links">
            <ul>
                <li><Link to="/authgate/signup" >Create Account</Link></li>
                <li className="pull-right" onClick={ ()=>{ props.showForgetPasswordForm() } }>Forgot Password</li>
                
            </ul>
            <ul>
                <li className="pull-right"><Link to="/authgate/login-admin" ><b>Admin Login >></b></Link></li>
            </ul>
        </div>  
    </div>


  );
}

export default LoginForm