import React, {Component} from 'react';
import axios from 'axios';
import {getJwt} from './helper/jwt';
import {withRouter} from 'react-router-dom';
import Header from './AccountHeader';


class CreateBank extends Component{

    state = {
        balance: 0.00,
        dropDown : "/createdbachecking",
    }

    handelChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

        

    handelSubmit = event=>{
     
        
        const jwt = getJwt();

        if(!jwt){
            this.props.history.push('/login');
        }

        axios.post(`http://localhost:8080/account${this.state.dropDown}`, {balance : this.state.balance}, {headers: {Authorization : `Bearer ${jwt}`}})
        
        if(this.state.dropDown === '/createdbachecking'){this.props.history.push('/business')}

       else if(this.state.dropDown === '/createiratraditional'){this.props.event.push('/iraaccount')}
        else if(this.state.dropDown === '/createiraroth'){this.props.event.push('/iraaccount')}
        else if( this.state.dropDown === '/createiraroll'){this.props.event.push('/iraaccount')}
       else if(this.state.dropDown === '/createcd'){this.props.event.push('/cdaccount')}

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
                    <input type = "submit" name = "continue"  value = "Continue" id= "create-continue" ></input>
                    <div class="dropdown-selectaccount">
                    <select class = "dropbtn" value = {this.state.dropDown} onChange = {this.handelChange("dropDown")}>
                    <option value = "/createdbachecking"> DBA Checking Account</option>
                    <option value = "/createiratraditional">IRA Traditional Account</option>  
                    <option value = "/createiraroth">IRA Roth Account</option>
                    <option value = "/createiraroll">IRA Roll Account</option>
                    <option value = "/createcd">CD Account</option>
                    
                    </select>
                </div>
                </form>
                <div className= 'displayCreation'>$ {balance}.00</div>
                
                </div>
                
            </div>
            
        )
    }


}


export default withRouter(CreateBank);