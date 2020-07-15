import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{


    render(){
        return(
      
          <div data-collapse="small" data-animation="over-right" data-duration="400" role="banner" class="navbar w-nav">
          <div class="w-container"><a href="/home" class="brand w-nav-brand"></a>
            <nav role="navigation" class="w-nav-menu"><a href = "/account" class = "nav-link 6 w-nav-link">Personal</a>
            <a href="/business" class="nav-link w-nav-link">DBA Checking</a><a href="/iraaccount" class="nav-link-2 w-nav-link">IRA</a>
            <a href="/transact" class="nav-link-3 w-nav-link">Transaction</a><a href="/cdaccount" class="nav-link-4 w-nav-link">CD</a>
            <a href = "/createbank" class = "nav-link-5 w-nav-link">Open Account</a><a href = "/closeaccount" class = "nav-link-6 w-nav-link">Close Account</a>
            </nav>
           
            <div class="w-nav-button">
              <div class="icon w-icon-nav-menu"></div>
            </div><a href="/login" class="link-3">Log In</a></div>
            
        </div>
      
         
        );
     }
  
}

export default Header;
    