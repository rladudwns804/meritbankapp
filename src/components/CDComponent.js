import React, { Component } from 'react';
import axios from 'axios';

class CD extends Component{

  state= {
    offering1 :[],
    offering2: [],
    offering3: [],
    offering4: [],
    offering5: []
};

async componentDidMount(){
    axios.all([
        axios.get('http://localhost:8080/cdofferings/1'),
        axios.get('http://localhost:8080/cdofferings/2'),
        axios.get('http://localhost:8080/cdofferings/3'),
        axios.get('http://localhost:8080/cdofferings/4'),
        axios.get('http://localhost:8080/cdofferings/5')
    ])
    .then(axios.spread((offer1Res, offer2Res, offer3Res, offer4Res, offer5Res)=> { 
        const offer1 = offer1Res; const offer2 = offer2Res; const offer3 = offer3Res; const offer4 = offer4Res; const offer5 = offer5Res;
        this.setState({offer1, offer2, offer3, offer4, offer5}); console.log(offer1Res, offer2Res, offer3Res, offer4Res, offer5Res);}));
}



  render(){
    return(
    <body class="body-2">
    <div class="text-block-4">Grow Your Future with {this.state.offering1.term}<br/>‍<br/><br/>Merit America</div>
    <div class="container-4 w-container">
      <div class="text-block-5"><br/><br/>Explore CD Options<br/><br/><br/><br/>‍</div>
      <div class="text-block-6">Higher interested rate and flexibility makes CD a great alternative to traditional savings account.<br/><br/>Explore our comprehensive rate and grow your future with Merit America</div>
      
   
      <div class="text-block-8">CALCULATE INTEREST PAYMENT<br/>‍</div>
      <div class="w-form">
        <form id="email-form" name="email-form" data-name="Email Form" class="form-2"><input type="text" class="text-field-4 w-input2" maxlength="256" name="Amount" data-name="Amount" placeholder="Amount" id="Amount"/><input type="submit" value="Calculate" data-wait="Please wait..." class="submit-button-2 w-button"/>
          <div data-hover="" data-delay="0" class="w-dropdown">
            <div class="dropdown-toggle-2 w-dropdown-toggle">
              <div class="w-icon-dropdown-toggle"></div>
              <div class="text-block-10">Select CD Term</div>
            </div>
            <nav class="w-dropdown-list"><a href="#" class="w-dropdown-link">Link 1</a><a href="#" class="w-dropdown-link">Link 2</a><a href="#" class="w-dropdown-link">Link 3</a></nav>
          </div>
        </form>
       </div>
      <div class="text-block-11"><span id = 'cdcal'>CD PAYMENT CALCULATOR</span></div>
      <div class="text-block-16"><span id= 'cdamount'>$0.00</span></div>
      <div class="text-block-17"><span id= 'cdlable'>INTEREST AMOUNT</span></div>
      
    </div>
 
  </body>
    );}
}

export default CD;