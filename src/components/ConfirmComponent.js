import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Head from './HeaderComponent';

class Confirm extends Component {


  
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
    this.props.handelSubmit();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    
    
    const {
      values: { firstName, middleName, lastName, street, apt, zip, email,phone,initialDeposit }
    } = this.props;

    return (
      <div className= "confirm-page">
      
            <List id='confirm-list'>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Middle Name" secondary={middleName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={street} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Suit/Apt/Others" secondary={apt} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Zip Code" secondary={zip} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
                <ListItem>
                <ListItemText primary="Phone Number" secondary={phone} />
                </ListItem>
              <ListItem>
              </ListItem>
            </List>
            <br />

            <Button id = 'back-confirm'
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button id = 'continue-confirm'
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
      </div>
     
    );
  }
}
export default Confirm;