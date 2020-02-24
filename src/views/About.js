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
            var xax = document.getElementById("rendererFather");
            var camera = new THREE.PerspectiveCamera( 75, xax.offsetWidth/window.innerHeight, 0.1, 1000 );

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( xax.offsetWidth, (window.innerHeight) );
            renderer.setClearColor( 0xffffff )
            
			xax.appendChild( renderer.domElement );
            var singleGeometry = new THREE.Geometry();
            var cone = new THREE.ConeGeometry( 3, 3, 6 );
            var coneMesh = new THREE.Mesh(cone);
            var material = new THREE.MeshLambertMaterial ( { color: 0xffffff } );

            var cone2 = new THREE.ConeGeometry( 3, 3, 6 );
            cone2.rotateZ(3.14);
            cone2.translate(0,1,0)

            var coneMesh2 = new THREE.Mesh(cone2);
            //coneMesh.updateMatrix(); // as needed
            singleGeometry.merge(coneMesh.geometry, coneMesh.matrix);
            //coneMesh2.updateMatrix(); // as needed
            singleGeometry.merge(coneMesh2.geometry, coneMesh2.matrix);
            var mesh = new THREE.Mesh(singleGeometry, material);


            scene.add( mesh );
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

			var animate = function (time) {
			    //console.log(renderer);
                //time *= 0.001
                //console.log(time)
				requestAnimationFrame( animate);
				//scene.rotation.y +=0.01
                mesh.rotation.y += 0.01;
                //mesh.rotation.x += x;
               //cone2.rotation.y -= 0.01;
				renderer.render( scene, camera );

			};
            requestAnimationFrame(animate);
    };
    function f(e) {

        //console.log(e)
    }
    return(
        <div id="rendererFather" class="container" onClick={event => f(event) }>
            <div class="about">
                <h1>{about.h1[langague]}</h1>
                <h2>{about.h2[langague]}</h2>
            </div>   
       </div>
    )
  
}


export default About
