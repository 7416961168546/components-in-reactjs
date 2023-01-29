import React from "react";
import img2 from "./images/teacger.jpg";

function Teacher()
{
    return(
        <div class="div1">
            <div class="div2">
                <div class="div3">
        
            <h1><i><strong>Teacher</strong></i></h1>
            <div class="img">
            <img src={img2} height="250px" width="150px"></img><br></br>
            </div>
            <a href="https://en.wikipedia.org/wiki/Teacher" target="-self"><h2>visit here</h2></a>
            </div>
            </div>
        </div>
    );
}

export default Teacher;