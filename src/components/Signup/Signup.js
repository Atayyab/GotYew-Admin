import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import axios from 'axios';





class Login extends React.Component {  

   state = {
     currentStep : 1, //Default form step   
     passwordIsVisible : false,       
     createUserScreen : false,     
     firstName: '',
     lastName: '',    
     location: {lat : 0, lng : 0},    
     email: '',
     file: '',
     state:'',
     city:'',
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
   
   handleChange = (loc) => {
	    this.setState({
			location: loc
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


   handleFileChange=(fileObj) =>{
       
		console.log(fileObj)
        var fileArray = []
        // this.fileObj.push(e.target.files)
        for (let j = 0; j < fileObj.length; j++) {
            for (let i = 0; i < fileObj[j].length; i++) {
            fileArray.push(fileObj[j][i])
            // this.fileArray.push(URL.createObjectURL(fileObj[j][i]))
            // console.log(j, " ", i)
            // console.log(this.state)
        }
    }
    console.log( fileArray)
        this.setState({ file: fileArray[0] })
        // e.target.files = null
		
    
  }
   checkData = () => {
    console.log(this.state)
    // setTimeout(function () {
    //     console.log('boo')
    //   }, 1000000)
  }

   //Send data to service
   handleFormSubmit = () => {
    //    event.preventDefault();    
    console.log("Handle Form Submit", this.state)   
       const User = {
                      firstName : this.state.firstName,
                      lastName : this.state.lastName,
                      email : this.state.email,
                      state : this.state.state,
                      city : this.state.city,
                      password : this.state.password
                    }
                    
		const fd = new FormData();
			fd.append('firstName', this.state.firstName);
			fd.append('lastName', this.state.lastName);
			fd.append('latitude', this.state.location.lat);
			fd.append('longitude', this.state.location.lng);
            fd.append('email', this.state.email);
            if(this.state.file)
            fd.append('file', this.state.file)
			fd.append('state', this.state.state);
			fd.append('city', this.state.city);
			fd.append('password', this.state.password);
			axios.post('http://3.123.184.89:5000/admin/add_vendor', fd)
            .then(res => console.log(res.data));
       console.log(User,'Registered user details');
       this.setState({
                        firstName : '',
                        lastName : '',
                        email : '',
                        state : '',
                        city : '',
                        password : '',
                    })
       this.props.history.push('/authgate/login')
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
                                        currentStep = { this.currentStep }
                                        changeToStep3 = { this.changeToStep3 }
                                        handleDropdownChange = {this.handleDropdownChange}             
                                        handleChange={ this.handleChange }
                                        handleFileChange={ this.handleFileChange }
                                        handleStepChange={ this.handleStepChange }
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