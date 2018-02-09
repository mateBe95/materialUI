import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Story extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 flow-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.</p>

            <p>We will look into each tip and determine where it might fit—on the website,
              in admissions materials, as a media story, social media post, and so on.</p>

            <p>Thank you for your help identifying the great work happening in the
              Franciscan University family.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Floating Label Text"
              fullWidth={true}/>

          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Floating Label Text"
              fullWidth={true}/>
          </div>

        </div>
        <div className="row">
          <div className="col s12">
            <TextField
              floatingLabelText="MultiLine and FloatingLabel"
              multiLine={true}
              fullWidth={true}/>
          </div>
          <div className="col s12">
            <RaisedButton 
            fullWidth={true}
            label="Submit" 
            primary={true}/>
          </div>

        </div>
      </div>

    )
  }
}

export default Story