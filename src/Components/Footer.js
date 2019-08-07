import React from "react";

export default function Footer(props){
    //console.log(props)
    var date = new Date();
    return(
        <div class="container-fluid ">
        <div class="col-12 text-center" style={{fontSize :"24px"}}>Rafał Malenta {date.getFullYear()}</div>
        <div class="row">
          <div class="col-sm-6 text-center" >GitHub</div>
          <div class="col-sm-6 text-center " >Linkedin</div>
        </div>
        </div>
        
    )
  
}
