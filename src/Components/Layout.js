import React from "react";
import { HashRouter as Router, Route, Redirect} from "react-router-dom";
import Menu from "./Menu";
import About from "../views/About";
import Contact from "../views/Contact";
import Portfolio from "../views/Portfolio";
import Footer from "./Footer";
import Skills from "../views/Skills";

export default class Layout extends React.Component{
constructor(props){
    super(props);  
    }

switchLangague(langague){
    var array;
    if (langague==="pl") array = ["en","pl"];
    else array = ["pl","en"];    
    this.setState({langague: array})
};
componentDidMount(){
    //console.log(matchPath)
}
render(){     
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
            <div class="viewcontainer ">
            <Route exact path="/:lang/" 
                render={(props)=><About { ...props }  />}
                />    
            <Route 
                path="/:lang/skills" 
                render={(props)=><Skills { ...props }  />}
                />            
            <Route path="/:lang/portfolio/" component={Portfolio} />
            <Route path="/:lang/kontakt/"
                render={(props)=><Contact {...props} />} 
                />         
         </div> 
         <Footer />      
        </Router>
        
    )
  }
}
