import React, {Component} from 'react';
import Header from './HeaderComponent';
import Personal from './PersonalComponent';
import Confirm from './ConfirmComponent';
import Initial from './InitialDeposit';
import UserCreation from './UserCreationComponent';
import Success from './SuccessComponent';
import axios from 'axios';



class Enroll extends Component{
    state = {
        step: 1,
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        dob: '',
        ssn: '',
        street: '',
        apt:'',
        zip:'',
        email: '',
        phone: '',
        userName:'',
        password: ''
    };

    
    
      // Proceed to next step
      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };
    
      // Go back to prev step
      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };
    
      // Handle fields change
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

      handleSubmit = event => {
       
        axios.all([
          axios.post('http://localhost:8080/test/createuser', {
            userName: this.state.userName,
            password: this.state.password,
            active: 1
          }),
          
          axios.post('http://localhost:8080/test/createuserdetail',{
            street: this.state.street,
            apt: this.state.apt,
            zip : this.state.zip,
            email : this.state.email,
            phone: this.state.phone
          }),

          axios.post('http://localhost:8080/test/createaccountholder',{
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            ssn: this.state.ssn

          })
        ])
      }

render(){
const { step } = this.state;
const { firstName, middleName, lastName, suffix, dob, ssn, street, apt, zip, email, phone, initialDeposit, userName, password} = this.state;
const values = {firstName, middleName, lastName, suffix, dob, ssn, street, apt, zip, email, phone, initialDeposit, userName, password} ;


switch (step) {
    case 1:
      return (
          <div>
        <div className = 'login-header'/>
       
        
        <Personal
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
         <a href="/home" class="brand3 w-nav-brand">  </a>
        </div>
      );


        case 2:
        return(
            <div>
                 <div className = 'login-header'/>
                <UserCreation
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
         <a href="/home" class="brand5 w-nav-brand">  </a>
            </div>
        );

      case 3: 
        return (
          <div>
             <div className = 'login-header'/>
            <Confirm
            nextStep={this.nextStep}
            values= {values}
            handelSubmit ={this.handleSubmit} />
             <a href="/home" class="brand6 w-nav-brand"> </a>
            </div>
        );
        case 4:
            return<Success/>;
            default:
                (console.log('This is a multi-step form built with React.'))

}
}
}

export default Enroll;