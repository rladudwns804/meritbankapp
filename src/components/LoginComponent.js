import React, { Component } from 'react';
import Header from './HeaderComponent';
import axios from 'axios';

class Login extends Component{
   constructor(props){
       super(props)
   
   this.state={
       userName: '',
       password: ''
   }


   this.handelChange = this.handelChange.bind(this);
   this.handelSubmit = this.handelSubmit.bind(this);
}
   handelChange = event =>{
       this.setState({userName: event.target.value, password: event.target.value });
   }

   handelSubmit = event =>{
       event.preventDefault();
        axios.post('http://localhost:8080/authenticate', { userName: this.state.userName, password: this.state.password})
        .then (res =>{
            const token = res.data.jwt;
            localStorage.setItem('jwt', token);
            this.props.history.push('/account');
        });
   }
   
    render(){

    
    return(
    <div className = 'usercreate'>
        <div className = 'login-header'>
        
        <div class="div-block-2">
                  <div class="w-formlog">
                  
                      <form id="email-form" name="email-form" data-name="Email Form" onSubmit ={this.handelSubmit}>
                        <lable id = 'login-username'>MERITAMERICA LOGIN</lable>
                      <input type="text" class="text-field-2 w-input" maxlength="256" name="Username" data-name="Username" placeholder="Enter your Login" id="Username" onChange= {this.handelChange}></input>
                      <lable id = 'login-password'>PASSWORD</lable>
                      <input type="password" class="text-field w-input" maxlength="256" name="Password" data-name="Password" placeholder="Enter password" id="Password" required="" onChange= {this.handelChange}></input>
                      <input type="submit" value="Sign in" data-wait="Please wait..." class="submit-button w-button"></input>
                      <label class="w-checkbox"><input type="checkbox" id="Save Online ID" name="Save-Online-ID" data-name="Save Online ID" class="w-checkbox-input checkbox"></input></label>
                      <span for="Save Online ID" class="checkbox-label w-form-label">Save Online ID</span><a href="#" class="link-2">Forgot Password?</a>
                       <div><a href="/enroll" class="link">Forgot Username?</a></div>
                       <div class="enroll-linklogin"><a href="/enroll" className='enroll-loginpage'>Open an Account </a></div>
                       <a href="/home" class="brand2 w-nav-brand"></a>
                      </form>
                      
                          </div>
                          </div>
   
</div>
<div className = 'login-footer'></div>
</div>

    );}
}

export default Login;