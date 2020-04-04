import React from 'react'
import {Link} from 'react-router-dom'


class Step3 extends React.Component{    
              
   constructor(props){
        super(props)
        this.state = {
             modalIsOpen : false
        }
   }


   modalToggle = (event) => {
       event.preventDefault();
       this.setState({
        modalIsOpen : !this.state.modalIsOpen
       }, )
    //    this.props.handleFormSubmit()
   }


   

   
    render(){
                                
        const modalOpenClassName = this.state.modalIsOpen ? 'signupModal modal fade in show' : 'signupModal modal fade'
        // const modalOpenStyle = this.state.modalIsOpen ? 'display:block' : 'display: none'

            return(
                <div id="createFormSecondSection">
                    <div className="form--container--heading-area create-acc">
                        <h1 className="theme-heading upload-picture-heading">Upload your picture</h1>
                        <p className="text-grey upload-picture-parag">Lorem Lipsum Dolor sit amet</p>            
                    </div>

                    <div className="form-group upload-profile-picture-wrapper">                                                
                        <input type="file" className="form-control" name="profilePicture" ref="file" onChange={event=>{this.props.handleFileUpload(event)} } />
                        <div className="camera-holder">
                            <i className="fa fa-camera camera" aria-hidden="true"></i>
                        </div>                        
                        <p className="text-center upload-pic-bottom-text">Please upload your best profile picture</p>                        
                    </div>
                   
                    <button className="btn btn-block theme-grad-btn proceed-btn" onClick={event=>{this.modalToggle(event)} }>CREATE ACCOUNT</button>                    



                    {/* Modal */}


                                                
                    <div className={modalOpenClassName} >
                            <div className="modal-dialog" >
                            <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="close"><span >&times;</span></button>                                
                                </div>
                                <div className="modal-body">
                                    <div className="modal-img-holder">
                                        <img src="img/illustration.svg" alt="jobby"/>
                                    </div>
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
                                  <Link to="/home" className="btn theme-grad-btn">Continue</Link>
                                </div>
                            </div>
                            </div>
                    </div>                                


                     {/* Modal end */}




                </div> 

            )
         

    }
}


export default Step3