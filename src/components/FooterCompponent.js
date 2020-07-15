import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

function Footer(props) {
    return(
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navbar-2 w-nav">
    <div class="w-container"><a href="#" class="w-nav-brand"></a>
      <nav role="navigation" class="w-nav-menu"><a href="#" class="w-nav-link">Home</a><a href="#" class="w-nav-link">About</a><a href="#" class="w-nav-link">Contact</a></nav>
      <div class="w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
    
    <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 MeritAmerica Team 3</p>
                    </div>
                </div>
  </div>
           
         
      
    );
}

export default Footer;