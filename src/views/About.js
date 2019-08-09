import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

export default function About(props){
    //console.log(props)
    //console.log(to)
    return(
       <div class="about">
           <h1>{props.about.h1[props.lang[0]]}</h1>
           <h2>{props.about.h2[props.lang[0]]}</h2>
       </div>
    )
  
}
