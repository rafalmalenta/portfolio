import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

export default function About(props){
    var langague = props.match.params.lang;

    //console.log(props)
    //console.log(to)
    return(
       <div class="about">
           <h1>{props.about.h1[langague]}</h1>
           <h2>{props.about.h2[langague]}</h2>
       </div>
    )
  
}
