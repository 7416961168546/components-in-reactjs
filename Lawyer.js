import React from "react";
import img4 from "./images/law.jpg";

function Lawyer()
{
    return(
        <div class="div1">
            <div class="div2">
                <div class="div3">
        
            <h1><i><strong>Lawyer</strong></i></h1>
            <div class="img">
            <img src={img4} height="250%" width="250%"></img><br></br>
            </div>
            <a href="https://www.britannica.com/topic/lawyer" target="-self"><h2>visit here</h2></a>
            </div>
            </div>
        </div>
    );
}

export default Lawyer;