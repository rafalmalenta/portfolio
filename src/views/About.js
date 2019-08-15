import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import * as THREE from "three"

export default function About(props){
    var langague = props.match.params.lang;
    function render(){
        var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

            var renderer = new THREE.WebGLRenderer();
            
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.setClearColor( 0xffffff )
            var xax = document.getElementById("rendererFather");
			xax.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0xaaff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				renderer.render( scene, camera );
			};

			animate();
        console.log("ratatata")
    };   //console.log(props)
    //console.log(to)
    return(
        <div class="container">
            <div class="about">
                <h1>{props.about.h1[langague]}</h1>
                <h2>{props.about.h2[langague]}</h2>
            </div>
            <div onClick={render} class="col-sm-12" id="rendererFather">dasdas
            </div>
       </div>
    )
  
}
