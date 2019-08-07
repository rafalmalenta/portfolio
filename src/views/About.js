import React from "react";


export default function About(props){
    //console.log(props)
    return(
       <div class="about">
           <h1>{props.about.h1[props.lang[0]]}</h1>
           <h2>{props.about.h2[props.lang[0]]}</h2>
       </div>
    )
  
}
