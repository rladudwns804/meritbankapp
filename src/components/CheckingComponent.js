import React from 'react';
import Footer from './FooterCompponent';
import {Link} from 'react-router-dom';
function Checking(){

    return(
        <body class="body-4">
  <h1 class="heading-4">   FAMILY<br/><br/>‍<br/>   FRIENDS<br/><br/>‍<br/>   MERIT AMERICA </h1>
  <div class="container-8 w-container">
    <div class="text-block-26">CHECKING WITH MERIT AMERICA<br/>‍</div>
    <div class="w-layout-grid grid-2">
      <div class="text-block-27"><br/><br/><br/><br/><br/><br/>                <br/>                24/7 Access to your Checking<br/><br/><span class="text-span-11">                        Easy Access to your account with our online banking and ATMs</span></div>
      <div class="text-block-28"><br/><br/><br/><br/><br/><br/>               World&#x27;s Leading Security<br/><br/><span class="text-span-12">                       Your account is safe with our leading security technology that                         monitors your account 24/7</span><br/>‍</div>
      <div id="w-node-5f119904a207-058b6267" class="text-block-30"><br/><br/><br/><br/><br/>                      Manage Your Money With Budget Tool<br/><br/><span class="text-span-13">                                 Use our comprehensive budget tool to set your savings goals <br/>                                 and see your usage history</span></div>
      <div class="text-block-29"><br/><br/><br/><br/><br/>                       Pay Anywhere With Merit America<br/><br/><span class="text-span-14">                                   Use your debit card and checking account to buy and<br/>                                   pay your favorite vendor around the world </span><br/></div>
    </div>
  </div>
  <div class="container-9 w-container">
    <div class="text-block-31">College Student<br/>‍</div>
    <div class="text-block-32"><br/><br/><br/><br/>Start your new Journey with Merit America<br/><br/><br/><br/><br/><br/><br/>Merit America is dedicated to offer fee free service to all student<br/><br/><br/><br/><br/>‍</div>
    <div className = 'enroll-today2'> <Link to = "/enroll" id = "opentoday3"><span id='enroll-text'>ENROLL TODAY</span></Link> </div>
  </div>
  
 
</body>
    )
}

export default Checking;