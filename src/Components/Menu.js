import React,{useEffect} from 'react'
import {HashRouter as Router, Link } from "react-router-dom";

export default function Menu(props) { 
  
  var section = props.match.params.section || "";
  var langage = props.match.params.lang;
  
  const menu = {
    li:{
        pl:["Umiejętności","Kontakt","Portfolio"],
        en:["Skills","Contact","Portfolio"],
    },
  };

  function toggleMenu() {
    let nav = document.querySelector("#nav");
    let icon = document.querySelector(".navbar-toggler");
    if(nav.style.maxHeight == "0px"){
      nav.style.maxHeight = "11em";
      icon.classList.add("change");
    }
    else {
      nav.style.maxHeight = "0px";
      icon.classList.remove("change");
    }

    console.log(nav.style)
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
      <div class="fixed-top">
      <nav class="row" id="nav" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" >
        <div class="col-lg-3">
          <Link to={`/${langage}`} class="typewriter nav-link "  >
            <h4>Rafał Malenta</h4>
          </Link>
        </div>
        <div class="col-lg-2 ">
          <Link to= {`/${langage}/${menu.li['en'][0]}`} class="nav-link">{menu.li[langage][0]} </Link>
        </div>
        <div class="col-lg-2">
          <Link to={`/${langage}/${menu.li['en'][1]}`} class="nav-link">{menu.li[langage][1]}</Link>
        </div>
        <div class="col-lg-2">
          <Link to={`/${langage}/${menu.li['en'][2]}`} class="nav-link">{menu.li[langage][2]}</Link>
        </div>
       <div class="col-lg-2" >
       <Link to={`/${otherLangague(langage)}/${section}`} class="nav-link"> {langagueName(otherLangague(langage))} </Link>
       </div>
      </nav>
      <div onClick={toggleMenu} class="Menu_toggler">
        <span>Menu</span>
        <button id="colapser" class="navbar-toggler" type="button">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </div>
      </div>
      </Router>
      
     
    )
  }

