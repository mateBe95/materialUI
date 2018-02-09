import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import '../styles/inputFile.css'
import { Link } from 'react-router-dom'

const styles = {
  block: {
    maxWidth: 100
  },
  checkbox: {
    marginBottom: 16
  },
  uploadButton: {
    verticalAlign: 'middle'
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

class ServiceRequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileInput: null,
      name: '',
      email: '',
      phone: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleFilePath = event => {
    const target = event.target
    // Array.from converts array-like to array (so that map works)
    const files = Array.from(target.files)
    if (files.length === 0) {
      this.setState({
        fileInput: null
      })
    } else {
      const fileNames = files.map(f => f.name).join(', ')
      this.setState({
        fileInput: fileNames
      })
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }




  render() {
    let fileValue = this.state.fileInput || 'Select a file to upload'
    return (
      <div className="container" flow-text>
        <div className="row">
          <div className="col s12 m8 offset-m2 flow-text">
            <h2>Please use this form to request services.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField 
            floatingLabelText="Name" 
            name='name' 
            onChange={this.handleInputChange}
            fullWidth={true}/>
          </div>
          <div className="col s12 m6">
            <TextField 
            floatingLabelText="Email" 
            name='email' 
            onChange={this.handleInputChange}
            fullWidth={true}/>
          </div>

          <div className="col s12 m6">
            <TextField 
            floatingLabelText="Phone" 
            name='phone' 
            onChange={this.handleInputChange}
            fullWidth={true}/>
          </div>
          <div className="col s12 m6">
            <TextField 
            floatingLabelText="Department" 
            fullWidth={true}/>
          </div>

          <div className="col s12 m6">
            <TextField 
            floatingLabelText="Project Description" 
            fullWidth={true}/>
          </div>
          <div className="col s12 m6">
            <TextField 
            floatingLabelText="Project Goal" 
            fullWidth={true}/>
          </div>

          <div className="col s12 m6">
            <TextField 
            floatingLabelText='Project budget' 
            multiLine fullWidth/>
          </div>
          <div className="col s12 m6">
            <TextField 
            floatingLabelText='Secondary Target Audience' 
            multiLine 
            fullWidth/>
          </div>

          <div className="col s12 m6">
            <TextField 
            floatingLabelText='MultiLine and FloatingLabel' 
            fullWidth/>
          </div>
          <div className="col s12 m6">
            <TextField 
            floatingLabelText='MultiLine and FloatingLabel' 
            fullWidth/>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6">
            <DatePicker hintText='Set date!'/>
          </div>
          <div className="col s12 m6">
            <div className='file-field input-field'>
              <div
                className='btn'
                style={{
                backgroundColor: 'green'
              }}>
                <span>Upload File</span>
                <input id='upload' type='file' multiple onChange={this.handleFilePath}/>
              </div>
              <div className='file-path-wrapper'>
                <input value={fileValue} className='file-path validate' type='text' readOnly />
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col s12 m6">
            <Checkbox label='Simple' style={styles.checkbox} inputStyle={{ width: '90px'}}/>
            <Checkbox label='Simple' style={styles.checkbox} inputStyle={{ width: '90px'}}/>
            <Checkbox label='Simple' style={styles.checkbox} inputStyle={{ width: '90px'}}/>
            <Checkbox label='Simple' style={styles.checkbox} inputStyle={{ width: '90px'}}/>
          </div>
          <div className="col s12 m6">
            <Checkbox label='Simple' style={styles.checkbox} inputStyle={{ width: '90px'}}/>
            <Checkbox label='Simple' style={styles.checkbox} inputStyle={{ width: '90px'}}/>
            <Checkbox label='Simple' style={styles.checkbox} inputStyle={{ width: '90px'}}/>
            <Checkbox label='Simple' style={styles.checkbox} inputStyle={{ width: '90px'}}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12 offset-1">
            <RaisedButton label='Submit' primary/>
            <Checkbox 
            label={
              <span>
              I have read the {' '}
              <Link to='/planning-guide' style={{ fontWeight:500, color:'orange' }}>
              Planning guide
              </Link>
              </span>
            }
            
            style={styles.checkbox}
            inputStyle={{ width: '35px'}}
            />
          </div>

        </div>

      </div>
    )
  }
}

export default ServiceRequest