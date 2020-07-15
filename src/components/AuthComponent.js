import React, { Component} from 'react';
import axios from 'axios';
import { getJwt } from "./helper/jwt";
import {withRouter} from 'react-router-dom';

class Auth extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            user: undefined
        }
    }
    
    
    async componentDidMount(){
        const jwt = getJwt();
           
             if(!jwt){
                this.props.history.push('/login')
              }
              

        axios.get('http://localhost:8080/test/getuser', {headers: {'Authorization' : `Bearer ${jwt}`}}).then(res => 
            this.setState({user: res.data})).catch(err =>{
                localStorage.removeItem('jwt');
                this.props.history.push('/login');
            })
       }
    
    render(){

        if(this.state.user === undefined){
            return(
                <div><h1>Loading...</h1></div>
            )
        }


        return(
            <div>
                {this.props.children}
            </div>
        )
    }


 
    }




export default withRouter(Auth);