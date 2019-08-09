import React from "react";


export default function Skills(props){      
   var langague = props.match.params.lang;   
  
    return(
       <div class="container-fluid">
         <div class="col-12">
            <h1>{props.skills.h1[langague]}</h1>
            <h2>{props.skills.h2[langague]}</h2>
         </div>
         <div class="row d-flex justify-content-center">
            <div class="col-lg-2 col-md-3 col-sm-6 text-center fadein">HTML5
               <img width="100%" src="./assets/HTML5.png" alt="HTML5"></img>           
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center fadein">CSS3
               <img width="100%" src="./assets/CSS3.png" alt="CSS3"></img>    
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center fadein">Java script
               <img width="100%" src="./assets/javascript.png" alt="javascript"></img> 
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center fadein">PHP
               <img width="100%" src="./assets/php.png" alt="PHP"></img> 
            </div>
         </div>
         <div class="col-12">            
            <h2>{props.skills.h3[langague]}</h2>
         </div>
         <div class="row d-flex justify-content-center">
            <div class="col-lg-2 col-md-3 col-sm-6 text-center fadein">React
               <img width="100%" src="./assets/react.png" alt="react"></img> 
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center text-center fadein">Vue
               <img width="100%" src="./assets/vue.png" alt="vue"></img> 
            </div>
         </div>
         <div class="col-12">            
            <h2>{props.skills.h4[langague]}</h2>
         <div>
            
         </div>
         </div>
       </div>
    )
  
}
