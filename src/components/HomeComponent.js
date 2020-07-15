import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterCompponent';


function Home(props){

  
    return(
        
        <body class = "body">
            <Header/>
     
          <div class="text-block">  Merit America  </div>
            <div className = 'enroll-today'> <Link to = "/enroll" id = "opentoday">ENROLL TODAY</Link> </div>
            <div className= 'signin-home'><Link to = "/login" id = "home-login">SIGN-IN</Link>
                       
                </div>
    
            </body>

            
    );


}


export default Home;
