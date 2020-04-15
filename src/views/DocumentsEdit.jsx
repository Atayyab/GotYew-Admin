import React from 'react'
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromHTML , convertToRaw , ContentState } from 'draft-js';
// import draftToHtml from './draftjs-to-html';
// import htmlToDraft from './html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class DocumentsEdit extends React.Component{
    

    constructor(props) {
        super(props)
        // console.log()
        this.state = {
          editorState: EditorState.createWithContent(
                            ContentState.createFromBlockArray(
                            convertFromHTML(this.props.location.state.eBody)
                            )
                        ),
           updatedTextFromEditor : ''

        }
      }


updateTextHandle=(editorState)=>{
    // console.log(editorState.getCurrentContent())
    this.setState({        
        editorState
    })
    
}


sendUpdatedTextHandle=(editorState)=>{
    // console.log(editorState.getCurrentContent())
    // this.setState({        
    //     editorState
    // })
    console.log( convertToRaw(this.state.editorState.getCurrentContent())  );

    
}


  render(){
    //   console.log(this.props.location.state.eBody)
      return(
        <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
             <Card
                title="Edit Document"
                category=""                
                content={        
                        <div>                
                            <Editor
                               editorState={this.state.editorState}  
                               onEditorStateChange={this.updateTextHandle}                       
                            />
                            <button className="btn btn-primary" onClick={ ()=>{this.sendUpdatedTextHandle()} }>Update</button>
                        </div>
                        }
             />                
            </Col>
           </Row>
        </Grid>
        </div>
      )
  }
}

export default DocumentsEdit