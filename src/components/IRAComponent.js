import React from 'react';
import {Link} from 'react-router-dom';



function IRA(){
    return(
     
        <body class="body-5">
        <div class="text-block-13"><br/><br/><br/><br/><br/><br/>      YOUR RETIRMENT IS SAFE WITH US<br/>‍<br/>‍<br/><br/><br/>                  MERIT AMERICA<br/>‍</div>
        <div class="container-10 w-container">
          <div class="text-block-33">PLAN YOUR RETIREMENT<br/>‍</div>
          <div class="text-block-34"><br/><br/><br/><br/><br/>WHAT IS IRA?</div>
          <div class="text-block-35"><br/><br/>Individual Retirement Account(IRA) is a investing tool that provides tax-advantages for retirement savings</div>
          <div class="text-block-36"><br/><br/><br/><br/><br/><br/>WHY IRA?</div>
          <div class="text-block-37"><br/><br/>IRA gives significant tax advantage for the retirement savings. Start now to build strong foundation for your retirement</div>
          <div class="text-block-38"><br/><br/><br/><br/><br/><br/>TYPES OF IRA</div>
          <div class="text-block-39"><br/><br/>There is three types of IRA: Traditional, Roth, and Roll</div>
        </div>
        <div class="container-11 w-container">
          <div class="text-block-40">YOUR RETIRMENT YOUR CHOICE<br/>‍</div>
          <div class="text-block-41"><br/><br/><br/> CHOOSE YOUR RETIREMENT</div>
          <div className = 'enroll-today3'> <Link to = "/enroll" id = "opentoday2"><span id='enroll-text2'>ENROLL</span></Link> </div>       
          </div>

      </body>
    );
}

export default IRA;