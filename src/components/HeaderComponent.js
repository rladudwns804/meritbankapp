import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{


    render(){
        return(
      
          <div data-collapse="small" data-animation="over-right" data-duration="400" role="banner" class="navbar w-nav">
          <div class="w-container"><a href="/home" class="brand w-nav-brand"></a>
            <nav role="navigation" class="w-nav-menu"><a href="/home" class="nav-linka w-nav-link">HOME</a><a href="/checking" class="nav-linka-2 w-nav-link">CHECKING</a>
            <a href="/savings" class="nav-linka-3 w-nav-link">SAVINGS</a><a href="/cd" class="nav-linka-4 w-nav-link">CD</a><a href="/ira" class="nav-linka-4 w-nav-link">IRA</a>
            </nav>
            <div class="w-nav-button">
              <div class="icon w-icon-nav-menu"></div>
            </div><a href="/login" class="link-3">Log In</a></div>
            
        </div>
      
         
        );
     }
  
}

export default Header;
