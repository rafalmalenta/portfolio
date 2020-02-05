import React from "react";
import PortfolioItem from "../Components/PortfolioItem"

export default function Portfolio(props){
    var langague = props.match.params.lang;
    var PortfolioItems = [
        {
            decribtion : {
                en: `My newes full stack project under development bidding app made with symfony and docrine.`,
                pl: `Mój najnowszy full stackowy projekt wykonywany w symfony 4 i doctrine.`,
            },
            github: `https://github.com/rafalmalenta/bidding_app`,
            live:`http://ba.rafalmalenta.usermd.net/`,
        },
        {
            decribtion : {
                en: `My game created with React and MobX, project is not finished but contains basic functionality, such as
                    movement using w,s,a,d keys, including collisions with borders, receiving and dealing damage, and can be paused with Space key.`,
                pl: `Moja gra w przegladarce stworzona w react z wykorzystaniem MobX, nie jest skończona ale posiada podstawowa funkcjonalność
                    to znaczy sterowanie klawiszami w,s,a,d, detekcja kolizji z granicą mapy, otrzymywanie i zadawanie obrażeń, pauzowanie spacją.`,
            },
            github: `https://github.com/rafalmalenta/HnS`,
            live: `http://mygame.rafalmalenta.usermd.net/`,

        },
        {
            decribtion : {
                en: `Recruitment task from github, uses REST API of The Guardian magazine. Made in pure Vanilla.js`,
                pl: `Znalezione na githubie zadanie rekrutacyjne dla JS developera korzysta z api guardiana, wykonane w Vanilla.js.`,
            },
            github: `https://github.com/rafalmalenta/sudh`,
            live: `http://sudh.rafalmalenta.usermd.net/`,

        }
    ];

    const list = PortfolioItems.map((item,index)=>{
        return <PortfolioItem key={index} value ={item.decribtion[`${langague}`]} github={item.github} live={item.live} lang={langague}/>
    })
    return(
       <div  >
           {list}
       </div>
    )
  
}
