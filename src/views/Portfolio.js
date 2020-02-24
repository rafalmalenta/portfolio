import React from "react";
import PortfolioItem from "../Components/PortfolioItem"

export default function Portfolio(props){
    var langague = props.match.params.lang;
    var PortfolioItems = [
        {
            decribtion : {
                en: `Front end app made with react, redux, styled-components, fetches movies from movie .`,
                pl: `Frontendowa apka z wykorzystaniem react, redux, styled-components.`,
            },
            github: `https://github.com/rafalmalenta/developers/tree/master/Frontend`,
            live:`http://mews.rafalmalenta.usermd.net/`,
        },
        {
            decribtion : {
                en: `Front end app made with angular it fetches 10 most polluted cities from given country and then their describtion from wikipedia .`,
                pl: `Frontendowa apka z wykorzystaniem angulara pobiera 10 najbardziej zanieczyszczonych miast z podenago kraju a potem ich opis z wikipedii.`,
            },
            github: `https://github.com/rafalmalenta/pollution-app`,
            live:`http://somerec.rafalmalenta.usermd.net/`,
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
