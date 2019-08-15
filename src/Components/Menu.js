import React,{useEffect} from 'react'
import {HashRouter as Router, Link } from "react-router-dom";

export default function Menu(props) { 
  
  var section = props.match.params.section || "";
  var langage = props.match.params.lang;
  
  const menu = {
    li:{
        pl:["Umiejętności","Portfolio","Kontakt"],
        en:["Skills","Portfolio","Contact"],
    },
  };

  function toggleColapse() {    
    document.getElementById('colapser').classList.toggle("change");
  }
  
  function otherLangague(langagueShort){
    if(langagueShort==="en")
      return "pl";
    else
      return "en"
  };
  function langagueName(langagueShort){
    if(langagueShort==="pl")
      return "Polski";
    else
      return "English"
  };  
  return(     
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top"  onClick={toggleColapse} data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" >
        <Link to={`/${langage}`}class="navbar-brand typewriter"  >
          <h4>Rafał Malenta</h4></Link>
            <button id="colapser" class="navbar-toggler" type="button" >
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>         
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav col-lg-12">
            <li class="nav-item col-lg-3 ">
              <Link to= {`/${langage}/skills`} replace class="nav-link">{menu.li[langage][0]} </Link>
            </li>
            <li class="nav-item col-lg-3">
              <Link to={`/${langage}/portfolio`} class="nav-link">{menu.li[langage][1]}</Link>
            </li>
            <li class="nav-item col-lg-3">
              <Link to={`/${langage}/kontakt`} class="nav-link">{menu.li[langage][2]}</Link>
            </li>
           <li class="nav-item col-lg-3" >
           <Link class="nav-link" to={`/${otherLangague(langage)}/${section}`}> {langagueName(otherLangague(langage))} </Link></li>
          </ul>    
        </div>
      </nav>
      </Router>
      
     
    )
  }

