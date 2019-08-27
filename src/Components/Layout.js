import React  from "react";
import { HashRouter as Router, Route, Redirect} from "react-router-dom";
import Menu from "./Menu";
import About from "../views/About";
import Contact from "../views/Contact";
import Portfolio from "../views/Portfolio";
import Footer from "./Footer";
import Skills from "../views/Skills";

export default function Layout(){    
     return( 
     <Router>
        <Route exact path="/" render={() =>  <Redirect to="/pl/" />}
            />              
        <Route path="/:lang/:section?" 
            render={(props)=>{
                let langague = props.match.params.lang;                      
                if((langague === "pl") || (langague==="en"))                                    
                    return <Menu { ...props }  />
                else 
                    return <Redirect to="/pl/" />    
            }}               
        />           
        <div class="viewcontainer container">
        <Route exact path="/:lang/" 
            render={(props)=><About { ...props }  />}
            />    
        <Route 
            path="/:lang/Skills" 
            render={(props)=><Skills { ...props }  />}
            />        
        <Route path="/:lang/Contact/"
            render={(props)=><Contact {...props} />} 
            />  
        <Route path="/:lang/Portfolio/"
            render={(props)=><Portfolio {...props} />} 
            />             
     </div> 
     <Footer />      
    </Router>)
  }

