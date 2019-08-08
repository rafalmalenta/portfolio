import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
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
        langague: ["pl","en"],
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
    console.log("rendered")
    return(
        <Router>
            <Menu lang={this.state.langague} menu={this.state.content.menu} switchLangague={this.switchLangague.bind(this)}/>
            <div class="viewcontainer ">
            <Route exact path="/" 
            render={()=><About lang={this.state.langague} about={this.state.content.about} />}
            />    
            <Route 
                path="/skills/" 
                render={()=><Skills lang={this.state.langague} skills={this.state.content.skills} />}
                />
            
            <Route path="/portfolio/" component={Portfolio} />
            <Route path="/kontakt/" component={Contact} />         
         </div> 
         <Footer />      
        </Router>
        
    )
  }
}
