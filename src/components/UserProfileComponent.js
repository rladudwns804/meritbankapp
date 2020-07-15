import React, {Component} from 'react';
import axios from 'axios';
import {getJwt} from './helper/jwt'
import Header from './HeaderComponent';


class UserProfile extends Component{

    state = {
        user: [],
        userDetail : []
    }


    
  async componentDidMount(){
    const jwt = getJwt();
    
    if(!jwt){
        return(
        <div>profile not found</div>);
    }

    axios.get('http://localhost:8080/account/getaccountdetail', {headers:{Authorization : `Bearer ${jwt}`}}).then(res => {this.setState({user:res.data});})
    axios.get('http://localhost:8080/account/getuserdetail', {headers:{Authorization : `Bearer ${jwt}`}}).then(res => {this.setState({userDetail:res.data});})

  }



    render(){
        return(
            <div className="account-background">
            <Header/>
            <div className="account-view w-container">
            <h1 id="account-title"> USER PROFILE </h1>
            <div className = "fprofile"> First Name: {this.state.user.firstName} </div>
            <div className = "mprofile"> Middle Name: {this.state.user.middleName} </div>
            <div className = "lprofile"> Last Name: {this.state.user.lastName} </div>
            <div className = "streetprofile"> Address: {this.state.userDetail.street} </div>
            <div className = "emailprofile"> Email: {this.state.userDetail.email} </div>
            <div className = "phoneprofile"> Phone: {this.state.userDetail.phone} </div>
            </div>
            </div>
        );
    }

}

export default UserProfile;