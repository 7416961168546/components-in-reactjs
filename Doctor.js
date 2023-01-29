import React from "react";
import img3 from "./images/doctor.jpg";

function Doctor()
{
    return(
        <div class="div1">
            <div class="div2">
                <div class="div3">
                <div class="heading">
                <h1><i><strong>Doctor</strong></i></h1>
                </div>
                <div class="img">
                <img src={img3} height="250px" width="150px" vw="150px"></img>
                </div>
                <div class="link">
                <a href="https://www.webmd.com/health-insurance/insurance-doctor-types" target="-self"><h2>visit here</h2></a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Doctor;