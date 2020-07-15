import React, { Component } from 'react';
import axios from 'axios';
import Header from  './AccountHeader';
import { getJwt } from "./helper/jwt";
import CreateBank from './CreateBankAccountComponent';

class Business extends Component{

  state = {
    business : [],
    account : [],
    dbaId: [],
    dbaBal:[]
  }


  async componentDidMount(){
    const jwt = getJwt();
    
    if(!jwt){
      return(
        <div>profile not found</div>
      )
    }


    axios.get('http://localhost:8080/account/getaccountdetail', {headers:{Authorization : `Bearer ${jwt}`}}).then(res => {this.setState({account:res.data});})
    axios.get('http://localhost:8080/account/getdbachecking', {headers:{Authorization : `Bearer ${jwt}`}}).then(res => {this.setState({business:res.data});})
    this.props.history.push('/business')
 

    
   
  }

render(){

  if(this.state.account.numberOfDBAChecking === 0){
    return(
      <CreateBank/>
    )
  }
  const numberOfAccount = this.state.account.numberOfDBAChecking;
 
  const getDba = this.state.business.map((item,index)=>(
    <div>
  
    <a id = "cTrans" href = "/transaction" style= {{textDecoration: 'none'}}>
    <div className="view-dba">
    <p id="dba"> Business Account {item.accountId}:</p>
    <p id="dba-amount">${item.balance}</p>
    </div>
    </a>
    </div>
));
 

    return (
      
        <div className="account-background">
          <Header/>
          <div className="account-view3 w-container">
            <h1 id="account-title"> Business Accounts </h1>
        {getDba}
          </div>
        </div>
      
    );}
}

export default Business;