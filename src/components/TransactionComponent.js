import React, { Component } from 'react';
import axios from 'axios';
import Header from  './HeaderComponent';
import { getJwt} from './helper/jwt';
 class Transaction extends Component{

  state = {
    account: undefined,
    transaction: []
  }

 async componentDidMount(){
   const jwt = getJwt();
      axios.get(`http://localhost:8080/account/transaction/0`, {headers:{Authorization : `Bearer ${jwt}`}}).then(res => {
        this.setState({transaction: res.data});})
  }

  render(){

    const renderTransaction = this.state.transaction.map((item,index)=>(
    
    <table>
      <tr>
      <th>Account</th>
      <th>Transaction Type</th>
      <th>Amount</th>
      </tr>

      <tr>
      <td>{item.accountId}</td>
      <td>{item.type}</td>
      <td>{item.amount} </td>
      </tr>
      </table>
))

    return (
      
        <div className="account-background">
          <Header/>
          <div className="account-view2 w-container">
            <h1 id="account-title"> Personal Accounts </h1>
          {renderTransaction}
          </div>
          
        </div>
      
    );}
}

export default Transaction;