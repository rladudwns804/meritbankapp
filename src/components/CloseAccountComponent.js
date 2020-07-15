import React, { Component } from 'react';
import axios from 'axios';
import {getJwt} from './helper/jwt';
import { render } from '@testing-library/react';
import Header from './AccountHeader';

class CloseAccount extends Component{

    state = {
        
        bankAccounts: [],
        account: '',
        type:''

    }

    async componentDidMount(){
        const jwt = getJwt();
    
        axios.get('http://localhost:8080/account/getbankaccount', {headers:{Authorization : `Bearer ${jwt}`}}).then(res => {this.setState({bankAccounts:res.data});})
      }

      handelChange = input => e => {
    
        this.setState({ [input]: e.target.value });
      };

    handleSubmit = event =>{
        const jwt = getJwt();
        
        if(!jwt){
            this.props.history.push('/closeaccount')
            return(
            <div>Account not found</div>
            
            );}

        

        axios.put(`http://localhost:8080/account/closebank/${this.state.account}`,{ withCredentials: true }, {headers:{Authorization : `Bearer ${jwt}`}}).then(res =>{
            this.setState({
                bankAccounts:res
            })

           
        }) 
    }

    render(){
        
  const getAccounts = this.state.bankAccounts.map((item,index)=>(
    <option value = {item.accountId} > {item.accountType.toUpperCase()}: {item.accountId}</option>    
      ));
      
        return(
            <div className="account-background">
            <Header/>
            <div className="account-view2 w-container" >
              <h1 id="account-title"> Close Account </h1>
              <p id="closeaccount-instruct"> <br/>Please select the account that you want to close and click close account</p>
              <form clasName= 'deposit' onSubmit={this.handleSubmit}>
              <div class= "dropdown-selectaccount5">
              <select class = "dropbtn3" value = {this.state.account} onChange = {this.handelChange("account")} >
              <option>Please Select Account</option>
              {getAccounts}
              </select>
              </div>
              <input type = "submit" name = "continue"  value = "Close Account" id= "close-continue" ></input>
              </form>
            </div>
            
          </div>
        );
    }

}


export default CloseAccount;