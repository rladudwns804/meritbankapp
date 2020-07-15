import React, { Component } from 'react';
import Header from './HeaderComponent';

class UserCreation extends Component{

continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(){
    const { values, handleChange} = this.props;
      return(
        <div className = 'usercreate'>
          <div className= 'userinputform'>
            <form className= 'newUser'>
            <lable for = 'username' id = 'label14'>USERNAME</lable>
            <lable for = 'userpassword' id = 'label15'>PASSWORD</lable>
                <input type= "text" id="username" name = 'username' onChange={handleChange('userName')} defaultValue = {values.userName} />
                <input type= "password" id="userpassword" name = 'userpassword' onChange={handleChange('password')} defaultValue = {values.password} />
                <input type = "submit" name = "continue"  value = "Continue" id= "userCrateSubmit" onClick={this.continue}></input>
            </form>
            
            </div>
            
        </div>
      );
  }



}

export default UserCreation;