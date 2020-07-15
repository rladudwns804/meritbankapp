import React, { Component } from 'react';
import Header from  './AccountHeader';
import axios from 'axios';
import {getJwt} from './helper/jwt';
import CreateAccount from './CreateBankAccountComponent'

class IRAAccount extends Component{

  state = {
    roll : [],
    roth : [],
    traditional : [],
    account: []
  }



  async componentDidMount(){
    const jwt = getJwt();
    
    
    
    axios.get('http://localhost:8080/account/getiraroth', {headers: {Authorization: `Bearer ${jwt}`}}).then(res => {this.setState({roth:res.data});})
    axios.get('http://localhost:8080/account/getiraroll', {headers: {Authorization: `Bearer ${jwt}`}}).then(res => {this.setState({roll:res.data});})
    axios.get('http://localhost:8080/account/getiratraditional', {headers: {Authorization: `Bearer ${jwt}`}}).then(res => {this.setState({traditional:res.data});})
    axios.get('http://localhost:8080/account/getaccountdetail', {headers:{Authorization : `Bearer ${jwt}`}}).then(res => {this.setState({account:res.data});})
  }



render(){
  let rollac = this.state.account.numberOfRoll;
  let rothac = this.state.account.numberOfRoth;
  let tradac = this.state.account.numberOfTrad;

  if(rollac === 0 && rothac === 0 && tradac === 0){
    return(
      <CreateAccount/>
    )
  }

  else if(tradac ===1 && rothac ===0 && rollac ===0) {
    return(
      <div className="account-background">
          <Header/>
          <div className="account-view w-container">
            <h1 id="account-title"> IRA Accounts </h1>
         <a id = "cTrans" href = "/transaction" style= {{textDecoration: 'none'}}>
          <div className="view_checking">
          <p id="check"> IRA Traditional {this.state.traditional.accountId}:</p>
            <p id="checking-amount">${this.state.traditional.balance}</p>
          </div>
          </a>
          </div>
          </div>
    )
  }


  else if(tradac ===0 && rothac ===1 && rollac ===0) {
    return(
      <div className="account-background">
          <Header/>
          <div className="account-view w-container">
            <h1 id="account-title"> IRA Accounts </h1>
         <a id = "cTrans" href = "/transaction" style= {{textDecoration: 'none'}}>
          <div className="view_checking">
          <p id="check"> IRA Roth {this.state.roth.accountId}:</p>
            <p id="checking-amount">${this.state.roth.balance}</p>
          </div>
          </a>
          </div>
          </div>
    )
    }
  
  else if(tradac ===0 && rothac ===0 && rollac === 1) {
    return(
      <div className="account-background">
          <Header/>
          <div className="account-view w-container">
            <h1 id="account-title"> IRA Accounts </h1>
         <a id = "cTrans" href = "/transaction" style= {{textDecoration: 'none'}}>
          <div className="view_checking">
          <p id="check"> IRA Roll {this.state.roll.accountId}:</p>
            <p id="checking-amount">${this.state.roll.balance}</p>
          </div>
          </a>
          </div>
          </div>
    )
    }


    else if (tradac ===1 && rothac === 0 && rollac === 1){
      return( <div className="account-background">
      <Header/>
      <div className="account-view w-container">
        <h1 id="account-title"> IRA Accounts </h1>
     <a id = "cTrans" href = "/transaction" style= {{textDecoration: 'none'}}>
      <div className="view_checking">
      <p id="check"> IRA Traditional {this.state.traditional.accountId}:</p>
        <p id="checking-amount">${this.state.traditional.balance}</p>
      </div>
      </a>
      <a href = "/transaction"  style= {{textDecoration: 'none'}}>
      <div className="view_savings">
      <p id="save"> IRA Roll {this.state.roll.accountId}:</p>
            <p id="savings-amount">${this.state.roll.balance}</p>
      </div>
      </a>
      </div>
      </div>
      )
    }

    else if (tradac ===1 && rothac === 1 && rollac === 0){
      return( <div className="account-background">
      <Header/>
      <div className="account-view w-container">
        <h1 id="account-title"> IRA Accounts </h1>
     <a id = "cTrans" href = "/transaction" style= {{textDecoration: 'none'}}>
      <div className="view_checking">
      <p id="check"> IRA Traditional {this.state.traditional.accountId}:</p>
        <p id="checking-amount">${this.state.traditional.balance}</p>
      </div>
      </a>
      <a href = "/transaction"  style= {{textDecoration: 'none'}}>
      <div className="view_savings">
      <p id="save"> IRA Roth {this.state.roth.accountId}:</p>
            <p id="savings-amount">${this.state.roth.balance}</p>
      </div>
      </a>
      </div>
      </div>
      )
    }

    else if (tradac ===0 && rothac === 1 && rollac === 1){
      return( <div className="account-background">
      <Header/>
      <div className="account-view w-container">
        <h1 id="account-title"> IRA Accounts </h1>
     <a id = "cTrans" href = "/transaction" style= {{textDecoration: 'none'}}>
      <div className="view_checking">
      <p id="check"> IRA Roll {this.state.roll.accountId}:</p>
        <p id="checking-amount">${this.state.roll.balance}</p>
      </div>
      </a>
      <a href = "/transaction"  style= {{textDecoration: 'none'}}>
      <div className="view_savings">
      <p id="save"> IRA Roth {this.state.roth.accountId}:</p>
            <p id="savings-amount">${this.state.roth.balance}</p>
      </div>
      </a>
      </div>
      </div>
      )
    }

    return (
      
        <div className="account-background">
          <Header/>
          <div className="account-view2 w-container">
            <h1 id="account-title"> IRA Accounts </h1>
         <a id = "cTrans" href = "/transaction" style= {{textDecoration: 'none'}}>
          <div className="view_checking">
          <p id="check"> IRA Traditional {this.state.traditional.accountId}:</p>
            <p id="checking-amount">${this.state.traditional.balance}</p>
          </div>
          </a>
          <a href = "/transaction"  style= {{textDecoration: 'none'}}>
          <div className="view_savings">
            <p id="save"> IRA Roll {this.state.roll.accountId}:</p>
            <p id="savings-amount">${this.state.roll.balance}</p>
          </div>
          </a>
          <a href = "/transaction"  style= {{textDecoration: 'none'}}>
          <div className="view_savings2">
            <p id="save"> IRA Roth {this.state.roth.accountId}:</p>
            <p id="savings-amount">${this.state.roth.balance}</p>
          </div>
          </a>
       
          </div>
          
        </div>
      
    );}
}

export default IRAAccount;