import React from 'react'
import {HashRouter as Router, Link } from "react-router-dom";

export default function Menu(props) {  
  function toggleColapse() {
    document.getElementById('colapser').classList.toggle("change");
  }
    
    return(     
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand typewriter" href="#">
          <h4>Rafał Malenta</h4></a>
            <button id="colapser" onClick={toggleColapse}class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>         
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav col-lg-12">
            <li class="nav-item col-lg-3 ">
              <Link to="skills" class="nav-link">{props.menu.li[props.lang[0]][0]} </Link>
            </li>
            <li class="nav-item col-lg-3">
              <Link to="portfolio" class="nav-link">{props.menu.li[props.lang[0]][1]}</Link>
            </li>
            <li class="nav-item col-lg-3">
              <Link to="kontakt" class="nav-link">{props.menu.li[props.lang[0]][2]}</Link>
            </li>
           <li class="nav-item col-lg-3 nav-link " onClick={()=>props.switchLangague(props.lang[0])}  >{props.lang[1]}</li>
          </ul>    
        </div>
      </nav>
      </Router>
      
     
    )
  }

