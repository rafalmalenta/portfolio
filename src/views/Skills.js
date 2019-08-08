import React from "react";

export default function Skills(props){
       console.log(props.skills.h1);
       console.log(props.lang)
    return(
       <div class="container-fluid">
         <div class="col-12">
            <h1>{props.skills.h1[props.lang[0]]}</h1>
            <h2>{props.skills.h2[props.lang[0]]}</h2>
         </div>
         <div class="row d-flex justify-content-center">
            <div class="col-lg-2 col-md-3 col-sm-6 text-center">HTML5
               <img width="100%" src="./assets/HTML5.png" alt="HTML5"></img>           
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center">CSS3
               <img width="100%" src="./assets/CSS3.png" alt="CSS3"></img>    
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center">Java script
               <img width="100%" src="./assets/javascript.png" alt="javascript"></img> 
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center">PHP
               <img width="100%" src="./assets/php.png" alt="PHP"></img> 
            </div>
         </div>
         <div class="col-12">            
            <h2>{props.skills.h3[props.lang[0]]}</h2>
         </div>
         <div class="row d-flex justify-content-center">
            <div class="col-lg-2 col-md-3 col-sm-6 text-center">React
               <img width="100%" src="./assets/react.png" alt="react"></img> 
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center text-center">Vue
               <img width="100%" src="./assets/vue.png" alt="vue"></img> 
            </div>
         </div>
         <div class="col-12">            
            <h2>{props.skills.h4[props.lang[0]]}</h2>
         <div>
            
         </div>
         </div>
       </div>
    )
  
}
