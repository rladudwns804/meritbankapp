import React, { Component } from 'react';
import axios from 'axios';
import Header from  './AccountHeader';
import {getJwt} from './helper/jwt';

class IRAAccount extends Component{

  state = {
    bankAccounts : [],
    account: '',
    amount:  0,
    account2: '',
    dropDown: ''
  }

  async componentDidMount(){
    const jwt = getJwt();

    axios.get('http://localhost:8080/account/getbankaccount', {headers:{Authorization : `Bearer ${jwt}`}}).then(res => {this.setState({bankAccounts:res.data});})
  }

  handelChange = input => e => {
    
    this.setState({ [input]: e.target.value });
  };


  handelSubmit = event =>{
    event.preventDefault();
    const jwt = getJwt();


    if(this.state.dropDown ==='/withdraw'){
      axios.post(`http://localhost:8080/account${this.state.dropDown}/${this.state.account}/${this.state.amount}`, {balance : this.state.balance}, {headers: {Authorization : `Bearer ${jwt}`}})

    }

    else if(this.state.dropDown === '/deposit'){
      axios.post(`http://localhost:8080/account${this.state.dropDown}/${this.state.account}/${this.state.amount}`, {balance : this.state.balance}, {headers: {Authorization : `Bearer ${jwt}`}})

    }

    else{
    axios.post(`http://localhost:8080/account${this.state.dropDown}/${this.state.account}/${this.state.account2}/${this.state.amount}`, {balance : this.state.balance}, {headers: {Authorization : `Bearer ${jwt}`}})
    }
      
  }
    
render(){
 
 
  const getAccounts = this.state.bankAccounts.map((item,index)=>(
    <option value = {item.accountId} > {item.accountType.toUpperCase()}: {item.accountId}</option>    
      ));


  if(this.state.dropDown ==='/transfer'){
    return(
      <div className="account-background">
      <Header/>
      <div className="account-view2 w-container" >
        <h1 id="account-title"> Perform Transaction </h1>
        <form clasName= 'deposit' onSubmit={this.handelSubmit}>
        <div class = "dropdown-selectaccount2">
          <select class = "dropbtn2" value = {this.state.dropDown} onChange = {this.handelChange("dropDown")}>
          <option value = '/withdraw' >Withdraw</option>
          <option value = '/deposit'>Deposit</option>
          <option value = '/transfer'>Transfer</option>
          </select>
        </div>
        <div class= "dropdown-selectaccount3">
        <select class = "dropbtn2"value = {this.state.account} onChange = {this.handelChange("account")} >
        <option>Please Select Account</option>
            {getAccounts}
        </select>
        </div>
        <div class= "dropdown-selectaccount4">
        <select class = "dropbtn2"value = {this.state.account2} onChange = {this.handelChange("account2")} >
        <option>Please Select Account</option>
            {getAccounts}
        </select>
        </div>
        <lable for = 'depositamount' id = 'transfer2'>Transaction Amount</lable>
                <input type = "text" id= 'transamount2' name = 'transamount' onChange= {this.handelChange('amount')}/>
                <input type = "submit" name = "continue"  value = "Continue" id= "create-continue4" ></input>
                <div className= 'displayTransaction2'>$ {this.state.amount}.00</div>
   </form>
      </div>
      
    </div>
    )
  }  

 

    return (
      
        <div className="account-background">
          <Header/>
          <div className="account-view2 w-container" >
            <h1 id="account-title"> Perform Transaction </h1>
            <form clasName= 'deposit' onSubmit={this.handelSubmit}>
            <div class = "dropdown-selectaccount2">
              <select class = "dropbtn2" value = {this.state.dropDown} onChange = {this.handelChange("dropDown")}>
              <option>Please Select Transaction</option>
              <option value = '/withdraw' >Withdraw</option>
              <option value = '/deposit'>Deposit</option>
              <option value = '/transfer'>Transfer</option>
              </select>
            </div>

            <div class= "dropdown-selectaccount3">
            <select class = "dropbtn2"value = {this.state.account} onChange = {this.handelChange("account")} >
            <option>Please Select Account</option>
            {getAccounts}
            </select>
            </div>
            <lable for = 'depositamount' id = 'transfer'>Transaction Amount</lable>
                    <input type = "text" id= 'transamount' name = 'transamount' onChange= {this.handelChange('amount')}/>
                    <input type = "submit" name = "continue"  value = "Continue" id= "create-continue2" ></input>
                    <div className= 'displayTransaction'>$ {this.state.amount}.00</div>
       </form>
          </div>
          
        </div>
      
    );}
}

export default IRAAccount;