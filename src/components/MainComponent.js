import React, {Component} from 'react';
import Home from './HomeComponent';
import Footer from './FooterCompponent'
import Header from './HeaderComponent'
import Checking from './CheckingComponent';
import Savings from './SavingsComponent';
import Cd from './CDComponent';
import Ira from './IRAComponent';
import Enroll from './EnrollComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Account from "./AccountComponent";
import Login from './LoginComponent';
import Business from './BusinessComponent';
import IRAAccount from './IRAAccountComponent'
import CreateBank from './CreateBankAccountComponent';
import CloseAccount from './CloseAccountComponent';
import UserProfile from './UserProfileComponent';
import Transact from './TransactComponent'
import Sucess from './SuccessComponent';
import Auth from './AuthComponent';



class Main extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const homePage = () =>{
            return (
                <Home />
            );
        }
       
        return(
            <div>
                    <Switch> 
                    
                        <Route path = '/home' component ={Home} />
                        <Route path='/checking' component={Checking} />
                        <Route exact path="/savings" component={Savings}/>
                        <Route exact path="/cd" component={Cd} />
                        <Route exact path="/ira" component={Ira} />
                        <Route exact path = "/enroll" component = {Enroll}/>
                        <Route path = "/login" component = {Login}/>
                       

                        <Auth>
                       
                        <Route exact path="/account" component={Account} />
                        <Route exact path = "/business" component = {Business}/>
                        <Route exact path = "/iraaccount" component = {IRAAccount}/>
                        <Route exact path = "/createbank" component = {CreateBank}/>
                        <Route exact path = "/closeaccount" component = {CloseAccount}/>
                        <Route exact path = "/userprofile" component = {UserProfile}/>
                        <Route exact path = "/transact" component = {Transact}/>
                        <Route exact path = "/sucess" component = {Sucess}/>
                        </Auth>
                        <Redirect to = '/home' />
                    </Switch>
                
            </div>
           
        );
    }

}

export default Main;
