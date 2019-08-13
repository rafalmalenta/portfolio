import React from "react";
import { HashRouter as Router, Route, Redirect} from "react-router-dom";
import Menu from "./Menu";
import About from "../views/About";
import Contact from "../views/Contact";
import Portfolio from "../views/Portfolio";
import Footer from "./Footer";
import Skills from "../views/Skills";

export default class Layout extends React.Component{
constructor(){
    super();  
    this.state={        
        content:{
            menu:{
                li:{
                    pl:["Umiejętności","Portfolio","Kontakt"],
                    en:["Skills","Portfolio","Contact"],
                },
            },
            about:{
                h1:{
                    pl:"Rafał Malenta ",
                    en:"Rafał Malenta ",
                },
                h2:{
                    pl:"web developer",
                    en:"web developer",
                }
            },
            skills:{
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
            },
            
        }
    }
}
switchLangague(langague){
    var array;
    if (langague==="pl") array = ["en","pl"];
    else array = ["pl","en"];    
    this.setState({langague: array})
}

render(){           
    return(
        <Router>
            <Route exact path="/" render={() =>  <Redirect to="/pl/" />}
                />              
            <Route path="/:lang/:section?" 
                render={(props)=>
                    <Menu { ...props } menu={this.state.content.menu} /> }                
            />           
            <div class="viewcontainer ">
            <Route exact path="/:lang/" 
                render={(props)=><About { ...props } about={this.state.content.about} />}
                />    
            <Route 
                path="/:lang/skills" 
                render={(props)=><Skills { ...props } skills={this.state.content.skills} />}
                />            
            <Route path="/portfolio/" component={Portfolio} />
            <Route path="/:lang/kontakt/"
                render={(props)=><Contact {...props} />} 
                />         
         </div> 
         <Footer />      
        </Router>
        
    )
  }
}
