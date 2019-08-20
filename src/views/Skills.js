import React from "react";


export default function Skills(props){      
   var langague = props.match.params.lang;  
   const skills = {
      h1:{
          pl:"Technologie z którymi pracuję",
          en:"Technology stack",
      },
      h2:{
          pl:"Języki programowania",
          en:"Programming languages",
      },
      h3:{
          pl:"Frameworki",
          en:"Frameworks",
      },
      h4:{
          pl:"Narzędzia",
          en:"Tools",
      }
  };
  
    return(
       <div class="container-fluid">
         <div class="col-12">
            <h1>{skills.h1[langague]}</h1>
            <h2>{skills.h2[langague]}</h2>
         </div>
         <div class="row d-flex justify-content-center" >
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">HTML5
               <img width="100%" src="./assets/HTML5.png" alt="HTML5"></img>           
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">CSS3
               <img width="100%" src="./assets/CSS3.png" alt="CSS3"></img>    
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">Java script
               <img width="100%" src="./assets/javascript.png" alt="javascript"></img> 
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">PHP
               <img width="100%" src="./assets/php.png" alt="PHP"></img> 
            </div>
         </div>
         <div class="col-12">            
            <h2>{skills.h3[langague]}</h2>
         </div>
         <div class="row d-flex justify-content-center">
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">React
               <img width="100%" src="./assets/react.png" alt="react"></img> 
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">Vue
               <img width="100%" src="./assets/vue.png" alt="vue"></img> 
            </div>
         </div>
         <div class="col-12">            
            <h2>{skills.h4[langague]}</h2>
         <div>
         <div class="row d-flex justify-content-center">
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">Webpack
               <img width="100%" src="./assets/webpack.png" alt="webpack"></img> 
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">Node js
               <img width="100%" src="./assets/node.png" alt="nodejs"></img> 
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 text-center rotate">npm
               <img width="100%" src="./assets/npm.png" alt="npm"></img> 
            </div>
          </div>  
         </div>
         </div>
       </div>
    )
  
}
