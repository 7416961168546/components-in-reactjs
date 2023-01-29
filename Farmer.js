import React from "react";
import img1 from "./images/farmer.jpg";
function Farmer()
{
    return(
            
            <div class="div1">
                <div class="div2">
                    <div class="div3">
            <h1><i><strong>Farmer</strong></i></h1>
            <div class="img">
            <img src={img1} height="250%" width="250%"/><br></br>
            </div>
            <a href="https://en.wikipedia.org/wiki/Farmer" target="-self"><h2>visit here</h2></a>
            </div>
            </div>
        </div>
    );
}

export default Farmer;