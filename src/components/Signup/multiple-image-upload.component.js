import React, { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        e.preventDefault()
        this.fileArray = []
        
        this.fileObj.push(e.target.files)
        this.props.uploadMultipleFile(this.fileObj);
        for (let j = 0; j < this.fileObj.length; j++) {
            for (let i = 0; i < this.fileObj[j].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[j][i]))
            // console.log(j, " ", i)
            // console.log(this.props)
        }
    }
        this.setState({ file: this.fileArray })
        e.target.files = null
        // console.log(this.fileArray)
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." width="50" height="50"/>
                    ))}
                </div>

                <div className="form-group">
	                    <label> </label>
	                    <label>Image : </label>
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                {/* <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button> */}
            </form >
        )
    }
}