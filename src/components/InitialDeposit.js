import React, { Component } from 'react';

class initialDeposit extends Component{

    continue = e =>{
      e.preventDefault();
      this.props.handelSubmit();
    }

  
      render(){

       const{ values, handelChange} = this.props;
          
          return(

            
                <div class= "container-17 w-container">   
                <form clasName= 'deposit'>
                    <lable for = 'depositamount' id = 'label13'>Initial Deposit Amount</lable>
                    <input type = "text" id= 'initialamount' name = 'initalamount' onChange= {handelChange('balance')} defaultValue = {values.balance} />
                </form>
                <div className= 'displayAmount'>$ {values.balance}</div>
                <input type = "submit" name = "continue"  value = "Continue" id= "enroll-continue" onClick={this.continue}></input>
                </div>
                
            

          );
      }
}


export default initialDeposit;