mport React, { Component, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import createjs from "../../../node_modules/createjs-module/createjs";
import { TrialStyle } from "./CubeElements";
import gsap from "gsap";


      // import Stats from '/jsm/libs/stats.module.js';
import {animation_sequence} from './cube_animation_sequence.js'
import {beginner_cross} from './cube_beg_cross.js'
import {cubelets_form} from './cubelets.js'
import {fast_execute} from './cube_fast_execute.js'
import {cube_color} from './cubelet_colors.js'
import {layer_group} from './cubelet_group.js'
import {animate_execute} from './cube_animate_execute.js'
import {face_plane_make} from './cube_face_plane.js'
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls";
// /import Stats from '/jsm/libs/stats.module.js';
import * as THREE from "three";
import { scramble_read } from "./cube_scramble_read_v3";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


export const Trial = () => {
 const mount = useRef(null)
  const [isAnimating, setAnimating] = useState(true)
  const controls = useRef(null)
 const [width, height] = useWindowSize();
    

    useEffect(() => {
    let width = mount.current.clientWidth
    let height = mount.current.clientHeight
    let frameId

    var raycaster = new THREE.Raycaster();  //raycaster object
      var mouse = new THREE.Vector2();  //to get the location of mouse
      var scene = new THREE.Scene();
      /* variables to create color */
      var flag = 1 
      mouse.x = 100;
      mouse.y = 100;
      var meshs = [];
      
      var core = []
      var ret = []
      var face_plane =[ ]
      var animation_flag = 0
      
       
    //   let mapDimensions = this.mount.getBoundingClientRect();
    //   let width = this.mount.clientWidth;
    //   let height = this.mount.clientHeight;
      var
        FIELD_OF_VIEW = 45,
        WIDTH         = width,
        HEIGHT        = height,
        ASPECT_RATIO  = WIDTH / HEIGHT,
        NEAR          = 1,
        FAR           = 10000
      
        var camera = new THREE.PerspectiveCamera( FIELD_OF_VIEW, ASPECT_RATIO, NEAR, FAR )
        camera.position.z = 600
        camera.position.x = 600
        camera.position.y = 300
        camera.tanFOV = Math.tan((( Math.PI / 180 ) * camera.fov / 2 ))//  For maintaining scale on windowResize.
        camera.oneToOne = function(){
          
          //  Return the Z position at which to place an object for exactly 100% scale.
          //  https://github.com/mrdoob/three.js/blob/dev/examples/js/renderers/CSS3DRenderer.js#L142
      
          return - 0.5 / Math.tan( this.fov * Math.PI / 360 ) * HEIGHT
        }
        camera.lookAt( scene.position )
        scene.add( camera )
      /* adding webgl renderer */
     
    //   console.log("Width", width, "height", height, mapDimensions);
      var renderer = new THREE.WebGLRenderer({ alpha: true ,antialias:true});
      renderer.setClearColor( 0x36454f );
      renderer.setSize(width, height,true);
      this.mount.appendChild(renderer.domElement);
      var anisotropy = renderer.capabilities.getMaxAnisotropy()
      var controls = new OrbitControls(camera, renderer.domElement);
      var mov1 = 0
      var moves = []
      var moves6 = []
      var moves_sol = []
      var url_scra1 = "a"
      var url_soln1 = "a"
      var scramble = []
      var soln = []
      var cube = []
      var current_move = []
      var current_soln = []
      var cube_sol = []
      var scramble_state = []
      var play = "false"
      const MathUtils = {
        DEG2RAD: function(deg){
          return (Math.PI / 180) * deg
        },
      
        lerp: function ( x, y, t ) {
      
        return ( 1 - t ) * x + t * y;
      
      },};
      var pad = 5;
      // gap between the layers
      var padding = pad;
      // radius of the fillet used on corners of cube
      const tx1 = document.createElement('canvas').getContext('2d');
      tx1.font = "150pt poppins ";
      tx1.fillText('F', 100, 140);
      const tx2 = document.createElement('canvas').getContext('2d');
      tx2.font = "150pt roboto";
      tx2.fillText('B', 100, 140);
      const tx3 = document.createElement('canvas').getContext('2d');
      tx3.font = "150pt roboto";
      tx3.fillText('R', 100, 140);
      const tx4 = document.createElement('canvas').getContext('2d');
      tx4.font = "150pt roboto";
      tx4.fillText('L', 100, 140);
      const tx5 = document.createElement('canvas').getContext('2d');
      tx5.font = "150pt roboto";
      tx5.fillText('U', 100, 140);
      const tx6 = document.createElement('canvas').getContext('2d');
      tx6.font = "150pt roboto";
      tx6.fillText('D', 100, 140);
     
      // const texture = new THREE.TextureLoader().load("rubiksLogoClassic.png" );
      
      let texture1 = new THREE.CanvasTexture(tx1.canvas);
      let texture2 = new THREE.CanvasTexture(tx2.canvas);
      let texture3 = new THREE.CanvasTexture(tx3.canvas);
      let texture4 = new THREE.CanvasTexture(tx4.canvas);
      let texture5 = new THREE.CanvasTexture(tx5.canvas);
      let texture6 = new THREE.CanvasTexture(tx6.canvas);

    


      texture1.anisotropy = renderer.capabilities.getMaxAnisotropy()
      texture2.anisotropy = renderer.capabilities.getMaxAnisotropy()
      texture3.anisotropy = renderer.capabilities.getMaxAnisotropy()
      texture4.anisotropy = renderer.capabilities.getMaxAnisotropy()
      texture5.anisotropy = renderer.capabilities.getMaxAnisotropy()
      texture6.anisotropy = renderer.capabilities.getMaxAnisotropy()
      //loader used for texture
      ret = cubelets_form ( scene , 3 , padding , texture1, texture2,texture3,texture4,texture5,texture6)
      meshs = ret[0]
      core = ret[1]
      face_plane = ret[2]
      cube_color(meshs)
    const renderScene = () => {
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      width = mount.current.clientWidth
      height = mount.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderScene()
    }

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        
        var currentURL = window.location.href;
        
        var url_split = currentURL.split("?")
       
        if(url_split.length > 1)
        {
      
          var scramble_arr = url_split[1].split("=")
          var soln_arr = url_split[2].split("=")
          var play_button = url_split[3].split("=")
          play = play_button[1]
          
          var url_scramble = scramble_arr[1].replace( /%20/g,"" )
          var url_soln = soln_arr[1].replace( /%20/g,"" )
          url_scra1 = url_scramble.replace( /%27/g,"'")
          url_soln1 = url_soln.replace( /%27/g,"'")
          scramble = url_scra1.split('')
          soln = url_soln1.split('')
          current_move = scramble.slice(cube.length)
          current_soln = soln.slice(cube_sol.length)
          if ( scramble.length > cube.length )
          {
            // console.log(current_move)
            moves = scramble_read(current_move , scramble , cube , 0)
            console.log(moves)
           
            fast_execute(scene,meshs,padding,moves)
            cube = scramble
            
          }
          
          if ( soln.length > cube_sol.length )
          {
            moves6 = scramble_read(current_soln , soln , cube_sol , 0)
            console.log(moves6)
            cube_sol = soln
            fast_execute(scene,meshs,padding,moves6)
            
          }
          
          
        
        }  
        // if (  animation_flag == 0 )
        //   { var myvar 
        //     console.log(meshs)
        //     myvar = setTimeout(animation_sequence(scene, meshs,core,camera) ,1500)
        //     animation_flag = 1
          
        //   }
        if ( play == "true" )
        {
          console.log("true")
          face_plane_make(face_plane,"true",tx1,tx2,tx3,tx4,tx5,tx6)
        }
        if ( play == "false" )
        {
          console.log("true")
          face_plane_make(face_plane,"false",tx1,tx2,tx3,tx4,tx5,tx6)
        }
        
        

      renderScene()
      frameId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate)
      }
    }

    const stop = () => {
      cancelAnimationFrame(frameId)
      frameId = null
    }

    mount.current.appendChild(renderer.domElement)
    window.addEventListener('resize', handleResize)
    start()

    controls.current = { start, stop }

    return () => {
      stop()
      window.removeEventListener('resize', handleResize)
      mount.current.removeChild(renderer.domElement)

      scene.remove(cube)
      geometry.dispose()
      material.dispose()
    }
  })


  useEffect(
    () => {
      if (isAnimating) {
        controls.current.start()
      } else {
        controls.current.stop()
      }
    },
    [isAnimating],
  )
    return (
      <>
        <TrialStyle ref={mount} onClick={() => setAnimating(!isAnimating)}/>
      </>
    );
  };

export default Trial;
