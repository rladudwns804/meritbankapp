import React, {Component} from "react";
import Header from './AccountHeader';
import Footer from './FooterCompponent';
import { Link, withRouter } from "react-router-dom";
import {getJwt} from './helper/jwt';
import CreateBank from './CreateinitBankAccountComponent';
import Transaction from './TransactionComponent'


import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron
} from "reactstrap";

import axios from 'axios';



class Account extends Component {

  state = {
  user: [],
  pchecking: [],
  savings:[],
  transaction: []
  }



  async componentDidMount(){
    const jwt = getJwt();
 

  
      if(!jwt){
        this.props.history.push('/login')
      }

      

    axios.get('http://localhost:8080/account/getpchecking', {headers: {Authorization : `Bearer ${jwt}`}}).then(res => {this.setState({pchecking:res.data});})
    axios.get('http://localhost:8080/account/getsavings', {headers: {Authorization : `Bearer ${jwt}`}}).then(res =>this.setState({savings:res.data}))
    
    }
  


 
 render(){
   const pcheckingAccount = this.state.pchecking.accountId;

  if(!pcheckingAccount){
    return(
      <CreateBank/>
    )
  }


   const getTransaction =   
          <Transaction />  
    
    return (
      
        <div className="account-background">
          <Header/>
          <div className="account-view w-container">
            <h1 id="account-title"> Personal Accounts </h1>
            <div className="view_checking" onClick={this.getTransaction}>
          <p id="check"> Checking Account {this.state.pchecking.accountId}:</p>
            <p id="checking-amount">${this.state.pchecking.balance}</p>
          </div>
         
          <div className="view_savings">
            <p id="save"> Savings Account {this.state.savings.accountId}:</p>
            <p id="savings-amount">${this.state.savings.balance}</p>
          </div>
          
         
          </div>
          
        </div>
      
    );}
  
}
export default withRouter(Account);
