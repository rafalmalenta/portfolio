import React from "react";

export default function PortfolioItem(props){
    
    var langague = props.lang;
    var source={
        en:"Source code",
        pl:"Kod źródłowy",
    }
    var live={
        en:"Live",
        pl:"Podgląd",
    }
    return(
       <div className="block" >
           <div className="left">
                <a href={props.github}>{source[`${langague}`]}</a>            
           </div>
           <div className="middle"> 
           {props.value}              
           </div>
           <div className="right">
                <a href={props.live}>{live[`${langague}`]}</a>               
           </div>
       </div>
    )
  
}
