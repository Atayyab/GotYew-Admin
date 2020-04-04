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
     state:'',
     city:'',
     email: '',
     password: '',
     terms: '',
     fileInput: '' ,
     fileURL:  ''
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
            console.log(this.state)
        })   
         
   }


   //get form select values

   handleDropdownChange = event =>{
        const {name, value} = event
        this.setState({
        [name]: value
        },()=>{
            console.log(this.state)
        })   
         
   }
   

   changeToStep2 = (event) => {
     event.preventDefault();
       this.setState({ currentStep : 2 },()=>{
           console.log('step changed to:',this.state.currentStep);
       })        
   }

   changeToStep3 = (event) => {
     event.preventDefault();
       this.setState({ currentStep : 3 },()=>{
           console.log('step changed to:',this.state.currentStep);
       })        
   }


   // profile picture upload

   handleFileUpload = (event) => {
    event.preventDefault()
    // console.log(event.target.files[0])
    const fileInput = event.target.files[0]
    const fileURL = event.target.value;
    // const reader = new FileReader();
    // const processedURL = reader.readAsDataURL(file)
    // reader.onloadend = function(e){        
    //          this.setState({
    //              img : [reader.result]
    //          })                       
    //   }    
    this.setState({fileInput: fileInput , fileURL: fileURL },()=>{console.log(this.state)} )      
   }

   //Send data to service
   handleFormSubmit = (event) => {
    //    event.preventDefault();
       console.log(this.state)
       this.props.history.push('/home')
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
                                    />

                                        :
                                       
                                        
                                    <Step3 
                                       handleFileUpload={ this.handleFileUpload }  
                                       handleFormSubmit={ this.handleFormSubmit }
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