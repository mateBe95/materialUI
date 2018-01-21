import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick(){
    this.setState({
      open: !this.state.open
    })
  }

   handleClose() {
  this.setState({
    open: false
  })
   } 
  
  render() {
    return (
      <div className="App">
         <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick	= {() => this.handleClick()}
            
          />
          <Drawer 
          open={this.state.open}
          docked={false}
          onRequestChange={(open)=>this.setState({open})}
          >
          <MenuItem onClick={()=> this.handleClose()}>Menu Item</MenuItem>
          <MenuItem onClick={()=> this.handleClose()}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
