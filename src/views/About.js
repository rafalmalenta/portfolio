import React, {useState, useEffect} from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import * as THREE from "three"

function About(props){
    useEffect(() => {
        render()
      }, [])
    var langague = props.match.params.lang;
    const about = {
        h1:{
            pl:"Rafał Malenta ",
            en:"Rafał Malenta ",
        },
        h2:{
            pl:"web developer",
            en:"web developer",
        }
    };   
    function render(){
            var scene = new THREE.Scene();            
            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );            
            var xax = document.getElementById("rendererFather");
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( xax.offsetWidth, (window.innerHeight+100) );
            renderer.setClearColor( 0xffffff )
            
			xax.appendChild( renderer.domElement );

            var geometry = new THREE.ConeGeometry( 3, 3, 4 );
            var material = new THREE.MeshLambertMaterial ( { color: 0xffffff } );
            var cone = new THREE.Mesh( geometry, material );
            material = new THREE.MeshLambertMaterial ( { color: 0xffffff } );
            var cone2 = new THREE.Mesh( geometry, material );
            cone2.rotation.x = 3.14;
            cone2.position.y = 1
           
            scene.add( cone );
            scene.add( cone2 )
            var light = new THREE.PointLight( 0xffffff, 1 , 100 );
            light.position.set( 0, 0, 5);
            scene.add( light );
            

            light = new THREE.PointLight( 0x5555ff, 1, 100 );
            light.position.set( 4, 0, -1 );
            scene.add( light );
            light = new THREE.PointLight( 0xff5555, 1, 100 );
            light.position.set( -4, 0, -1 );

            scene.add( light );
			
			camera.position.z = 6;

			var animate = function () {
				requestAnimationFrame( animate );
                cone.rotation.y += 0.01;
                cone2.rotation.y -= 0.01;
				renderer.render( scene, camera );
			};

			animate();       
    };   
    
    return(
        <div id="rendererFather" class="container">
            <div class="about">
                <h1>{about.h1[langague]}</h1>
                <h2>{about.h2[langague]}</h2>
            </div>   
       </div>
    )
  
}


export default About