import React from "react";
import PortfolioItem from "../Components/PortfolioItem"

export default function Portfolio(props){
    var langague = props.match.params.lang;
    var PortfolioItems = [{            
            decribtion : {
                en: "My game created with React and MobX, project is not finished but contains basic functionality, such as"+
                    "movement using w,s,a,d keys, including collisions with borders, receiving and dealing damage, and can be paused with Space key.",
                pl: "Moja gra w przegladarce stworzona w react z wykorzystaniem MobX, nie jest skończona ale posiada podstawowa funkcjonalność"+
                    "to znaczy sterowanie klawiszami w,s,a,d, detekcja kolizji z granicą mapy, otrzymywanie i zadawanie obrażeń, pauzowanie spacją.",
            },
            github: "https://github.com/rafalmalenta/HnS",
            live:"http://mygame.rafalmalenta.usermd.net/",

        },
        {            
            decribtion : {
                en: "responsive weather app that uses REST API to fetch weather, created with React and Axios, REST endpoint give back 4 or 5 records "+
                    "depending from city, so in order to receive 7 of them for whole week i used recursive fetching.",
                pl: "Responsywna aplikacja pogodowa napisana w react i axios, wykorzystuje REST API do pobrania pogody, REST endpoint zwracał "+
                    "4 lub 5 rekordów w zależności od miasta. W celu otrzymania pogody na cały tydzień wykonałem rekurencyjnie fetch.",
            },
            github: "https://github.com/rafalmalenta/rectask2",
            live:"http://rectask2.rafalmalenta.usermd.net/",

        },
        {
            decribtion : {
                en: "Recruitment task from github, uses REST API of The Guardian magazine. Made in pure Vanilla.js",
                pl: "Znalezione na githubie zadanie rekrutacyjne dla JS developera korzysta z api guardiana, wykonane w Vanilla.js.",
            },
            github: "https://github.com/rafalmalenta/sudh",
            live:"http://sudh.rafalmalenta.usermd.net/",

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
