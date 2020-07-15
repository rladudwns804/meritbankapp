import React from 'react';
import {Link} from 'react-router-dom';

function Savings(){
    return(
        <body class="body-3">
  <h1 class="heading-2">           FOR THE BRIGHT FUTURE OF<br/><br/>                     OPEN SAVINGS WITH           </h1>
  <h1 class="heading-3">YOUR CHILD<br/>‍<br/>MERIT AMERICA</h1>
  <div class="container-6 w-container">
    <div class="text-block-20">MERIT AMERICA SAVINGS ACCOUNT<br/>‍</div>
    <div class="w-layout-grid grid">
      <div class="text-block-21">     <br/>     <br/><br/>      <br/><br/>      <br/>                     Rewarding Growth<br/>‍<br/>                    <span class="text-span-6">See your rate grow as your account grow</span></div>
      <div id="w-node-ebb52926a9d3-c68b8e99" class="text-block-22">‍<br/><br/>   <br/>   <br/>    <br/>    <br/>                         Trusted Relationship<br/>  <br/>                         <span class="text-span-7">Relationship that was built on trust as your account grow</span></div>
      <div class="text-block-23"><br/><br/><br/><br/><br/><br/><br/>                        Track Your Growth<br/>‍<br/>                  <span class="text-span-8">         With our tool, you can track your growth anywhere</span></div>
      <div class="text-block-24"><br/><br/><br/><br/><br/><br/>     <br/>                   Save more with our reward program<br/>  <br/>    <span class="text-span-9">                      Get cashback deals from your favorite restaurants and café</span><br/>‍</div>
    </div>
    <div className = 'enroll-today2'> <Link to = "/enroll" id = "opentoday2"><span id='enroll-text'>ENROLL TODAY</span></Link> </div>
  </div>
  
</body>
    )
    /* <div class="container-7 w-container">
    <div class="text-block-25">Increase Rate<br/>‍<br/>‍<span class="text-span-10">As your savings grow, see your interest rate grow as well</span></div>
  </div>*/
}

export default Savings;