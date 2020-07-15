import React, { Component } from 'react';



class Personal extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


render(){
  const { values, handleChange } = this.props;
return(
<div className = "personalInfo">
<div className = "container-12 w-container">
        <form className = 'personal'>
            <p id="personal">    <span id ="pdetail"><br/>Personal Detail<br/></span> <span id= "leaglname">Please use your full leagl name</span></p>
        <lable for = "fname"id="label1" >First Name </lable>  <lable for ="mname" id="label2">  Middle Name (optional)</lable><br/><br/>
        <input type ="text" id = "fname" name = "fname" onChange={handleChange('firstName')} defaultValue={values.firstName}></input> 
        <input type = "text" id = "mname" name = "mname"onChange={handleChange('middleName')} defaultValue={values.middleName}></input>  <br/><br/><br/><br/><br/><br/><br/><br/>
        <label for = "lname" id = "label3">Last Name</label>   <label for = "suffix" id = "label4"> Suffix </label>
        <input type = "text" id = "lname" name = "lname"onChange={handleChange('lastName')} defaultValue={values.lastName}></input> 
        <div class="dropdown">
  <button class="dropbtn">None</button>
  <div class="dropdown-content">
    <a href="#">Jr</a>
    <a href = "#">Sr</a>
    <a href="#">I</a>
    <a href="#">II</a>
    <a href="#">III</a>
  </div>
</div>
</form>

    <div className = "container-13 w-container">
    <p id="identification"> Identification</p><br/>

    <form className= 'identify'>
    <label for = "dob" id = "label6"> Date of Birth</label>  <label class = "control-label"  for = "ssn" id =  "label7">Social Security Number</label> <br/><br/>
    <input type = "text" id="dob" name = "dob"onChange={handleChange('dob')} defaultValue={values.dob}></input>
    <input type = "email" id= "ssn" class="form-control" maxLenght = "12"onChange={handleChange('ssn')} defaultValue={values.ssn}></input>

    </form>

    </div>

    <div className= "container-14 w-container">
        <form className= "address"></form>
        <p id = "homeaddress"> Home Address </p>
        <label for = "street" id = "label8">Street Address</label> <label for = "other" id = "label9">Suit/Apt/Other</label><br/><br/>
        <input type = "text" id="street" name = "street address" onChange={handleChange('street')} defaultValue={values.street}></input>
        <input type = "text" id = "other" name = "other" onChange={handleChange('apt')} defaultValue={values.apt}></input><br/><br/><br/><br/><br/><br/><br/>
        <label for = "zip"id = "label10"> Zip Code</label> <br/><br/>
        <input type = "text" id="zip" name = "zip" onChange={handleChange('zip')} defaultValue={values.zip}></input><br/><br/><br/><br/><br/><br/><br/>
        <label for = "email" id = "label11">Email Adderss</label> <label for = "phone" id = "label12">Phone Number</label><br/><br/>
        <input type = "text" id="email" name = "email" onChange={handleChange('email')} defaultValue={values.email}></input>
        <input type = "text" id = "phone" name = "phone" onChange={handleChange('phone')} defaultValue={values.phone}></input><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>

    </div>
    <input type = "submit" name = "continue"  value = "Continue" id= "enroll-continue" onClick={this.continue}></input>
    </div>
);}
}

export default Personal;