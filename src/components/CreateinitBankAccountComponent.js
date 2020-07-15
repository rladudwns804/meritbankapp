import React, {Component} from 'react';
import axios from 'axios';
import {getJwt} from './helper/jwt';
import Header from './AccountHeader';

class CreateBank extends Component{

    state = {
        balance: 0
    }

    handelChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

        

    handelSubmit = event=>{
  
        const jwt = getJwt();

        if(!jwt){
            this.props.history.push('/login');
        }

        axios.post('http://localhost:8080/account/createinitial', {balance : this.state.balance}, {headers: {Authorization : `Bearer ${jwt}`}})
    
    };
    
    

    render(){
        const {balance} = this.state;
  
        return(
            <div className="account-background">
            <Header/>
            <div class= "account-view2 w-container">   
                 <h1 id = "account-title">Open Account</h1> 
           <form clasName= 'deposit' onSubmit={this.handelSubmit}>
               <lable for = 'depositamount' id = 'accountinitamount'>Initial Deposit Amount</lable>
               <input type = "text" id= 'createamount' name = 'initalamount' onChange= {this.handelChange('balance')}/>
               <input type = "submit" name = "continue"  value = "Continue" id= "create-continue3" ></input>
           </form>
           <div className= 'displayCreation3'>$ {balance}.00</div>
           
           </div>
        
       </div>
        )
    }


}


export default CreateBank;