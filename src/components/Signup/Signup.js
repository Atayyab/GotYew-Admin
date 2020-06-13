import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'





class Login extends React.Component {  

   state = {
     currentStep : 1, //Default form step   
     passwordIsVisible : false,       
     createUserScreen : false,     
     firstName: '',
     lastName: '',    
     email: '',
     password: '',
   }


   //show hide password

   showPasswordToggle = () => {
    this.setState({ passwordIsVisible : !this.state.passwordIsVisible })    
   }


   //get form input values

   handleStepChange = event =>{
        const {name, value} = event.target

        this.setState({
        [name]: value
        },()=>{
            // console.log(this.state)
        })   
         
   }


   //get form select values

   handleDropdownChange = event =>{
        const {name, value} = event
        this.setState({
        [name]: value
        },()=>{
            // console.log(this.state)
        })   
         
   }
   

   changeToStep2 = (event) => {
     event.preventDefault();
       this.setState({ currentStep : 2 },()=>{
        //    console.log('step changed to:',this.state.currentStep);
       })        
   }

   changeToStep3 = (event) => {
     event.preventDefault();
       this.setState({ currentStep : 3 },()=>{
        //    console.log('step changed to:',this.state.currentStep);
       })        
   }



   //Send data to service
   handleFormSubmit = (event) => {
    //    event.preventDefault();       
       const User = {
                      firstName : this.state.firstName,
                      lastName : this.state.lastName,
                      email : this.state.email,
                      password : this.state.password,
                    }
       console.log(User,'Registered user details');
       this.setState({
                        firstName : '',
                        lastName : '',
                        email : '',
                        password : '',
                    })
       this.props.history.push('/admin/about-brand')
   }


   render(){



    return(
          <section id="login-area">  
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>                        
                 <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                 <div className="row">
                        <div className="login-area form--container">
                            <div className="login-area-logo-container">                                
                            </div>
                            <React.Fragment>
                                <form>
                                    {

                                        this.state.currentStep === 1 ?

                                    
                                    <Step1                                                                                                                   
                                        handleStepChange = { this.handleStepChange }
                                        handleDropdownChange = { this.handleDropdownChange }
                                        currentStep = {this.currentStep}
                                        changeToStep2 = {this.changeToStep2}
                                        firstName =  { this.state.firstName }
                                        lastName =  { this.state.lastName }
                                        state = { this.state.state }
                                        city = { this.state.city }
                                    />

                                        : this.state.currentStep === 2 ?


                                    <Step2   
                                       currentStep = { this.currentStep }
                                       changeToStep3 = { this.changeToStep3 }
                                       handleDropdownChange = {this.handleDropdownChange}                                    
                                       showPasswordToggle={ this.showPasswordToggle }
                                       showPasswordClassName={ this.state.passwordIsVisible }
                                       showPasswordEyeClassName={ this.state.passwordIsVisible }
                                       handleStepChange={ this.handleStepChange }
                                       handleCheckboxSelect={ this.handleCheckboxSelect }
                                       handleFormSubmit={ this.handleFormSubmit }
                                    />

                                        :
                                       
                                        
                                    <Step3                                     
                                    />                                   
                                    }
                                </form>                   
                            </React.Fragment>                                                                                                
                        </div>                        
                     </div> {/*<!--row-->*/}
                 </div> {/*column ends*/}
                 <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>             
          </section>
        );   
   }
}

export default Login