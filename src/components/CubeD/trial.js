import React, { Component, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import createjs from "../../../node_modules/createjs-module/createjs";
import { TrialStyle } from "./CubeElements";
import gsap from "gsap";


// import Stats from '/jsm/libs/stats.module.js';
import { animation_sequence } from './cube_animation_sequence.js'
import { cubelets_form } from './cubelets.js'
import { cube_color } from './cubelet_colors.js'
import { layer_group } from './cubelet_group.js'
import { animate_execute } from './cube_animate_execute.js'
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls";
// /import Stats from '/jsm/libs/stats.module.js';
import * as THREE from "three";
import { scramble_read } from "./cube_scramble_read_v3";
class Trial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      refreshValue: props.refreshValue,
    };
    console.log(this.state.resetState);
  }

  refreshScreen = () => {
    this.setState({ refreshing: true });
    this.setState(({ refreshValue }) => ({
      refreshValue: refreshValue + 1,
    }));
    console.log("Screen refreshed!");
    this.setState({ refreshing: false });
  };

  // useEffect({
  //    height = this.props.height

  // }, [height])

  componentDidMount() {



    var raycaster = new THREE.Raycaster();  //raycaster object
    var mouse = new THREE.Vector2();  //to get the location of mouse
    var scene = new THREE.Scene();
    /* variables to create color */
    var flag = 1
    mouse.x = 100;
    mouse.y = 100;
    var meshs = [];
    var animation_flag = 0


    let mapDimensions = this.mount.getBoundingClientRect();
    let width = this.mount.clientWidth;
    let height = this.mount.clientHeight;
    var
      FIELD_OF_VIEW = 45,
      WIDTH = width,
      HEIGHT = height,
      ASPECT_RATIO = WIDTH / HEIGHT,
      NEAR = 1,
      FAR = 10000

    var camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, ASPECT_RATIO, NEAR, FAR)
    camera.position.z = 600
    camera.position.x = 600
    camera.position.y = 300
    camera.tanFOV = Math.tan(((Math.PI / 180) * camera.fov / 2))//  For maintaining scale on windowResize.
    camera.oneToOne = function () {

      //  Return the Z position at which to place an object for exactly 100% scale.
      //  https://github.com/mrdoob/three.js/blob/dev/examples/js/renderers/CSS3DRenderer.js#L142

      return - 0.5 / Math.tan(this.fov * Math.PI / 360) * HEIGHT
    }
    camera.lookAt(scene.position)
    scene.add(camera)
    /* adding webgl renderer */

    console.log("Width", width, "height", height, mapDimensions);
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x36454f);
    renderer.setSize(width, height, true);
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
      DEG2RAD: function (deg) {
        return (Math.PI / 180) * deg
      },

      lerp: function (x, y, t) {

        return (1 - t) * x + t * y;

      },
    };
    var pad = 5;
    // gap between the layers
    var padding = pad;
    // radius of the fillet used on corners of cube
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.font = "30pt arial bold";
    ctx.fillText('Rubiks Cube', 10, 64);
    const texture = new THREE.TextureLoader().load("rubiksLogoClassic.png");

    //let texture = new THREE.CanvasTexture(ctx.canvas);
    texture.anisotropy = anisotropy
    //loader used for texture
    function init() {

      meshs = cubelets_form(scene, 3, padding, texture)
      console.log(meshs)
      cube_color(meshs)
      const axesHelper = new THREE.AxesHelper(5);
      //scene.add( axesHelper );

    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();

      var currentURL = window.location.href;

      var url_split = currentURL.split("?")

      if (url_split.length > 1) {

        var scramble_arr = url_split[1].split("=")
        var soln_arr = url_split[2].split("=")
        var play_button = url_split[3].split("=")
        play = play_button[1]
        var url_scramble = scramble_arr[1].replace(/%20/g, "")
        var url_soln = soln_arr[1].replace(/%20/g, "")
        url_scra1 = url_scramble.replace(/%27/g, "'")
        url_soln1 = url_soln.replace(/%27/g, "'")
        scramble = url_scra1.split('')
        soln = url_soln1.split('')
        current_move = scramble.slice(cube.length)
        current_soln = soln.slice(cube_sol.length)
        if (scramble.length > cube.length) {
          console.log(current_move)
          moves = scramble_read(current_move, scramble, cube, 0)


          for (var i = 0; i < moves.length; i++) {

            console.log(moves)
            var moves2 = moves[i]
            var moves3 = moves2.split("_")
            console.log(moves3[1])
            var moves1 = layer_group(scene, meshs, moves3[1], padding, Number(moves3[0]), moves3[2])
            console.log(moves1[2])
            moves1[0].rotateOnWorldAxis(moves1[1], moves1[2])
            if (i == moves.length - 1) {
              //var scramble_mesh = new THREE.Mesh(new THREE.BoxGeometry().copy(meshs[0].geometry), new THREE.MeshBasicMaterial().copy(meshs[0].material))
              //scramble_state = store_scramble(meshs)

              cube = scramble
            }
          }
        }

        if (soln.length > cube_sol.length) {
          moves6 = scramble_read(current_soln, soln, cube_sol, 0)
          console.log(moves6)
          cube_sol = soln
          animate_execute(scene, meshs, moves6, padding)

        }



      }
      if (animation_flag == 0) {
        var myvar

        myvar = setTimeout(animation_sequence(scene, meshs, camera), 1500)
        animation_flag = 1

      }

      render();

    }

    function render() {

      raycaster.setFromCamera(mouse, camera);



      renderer.render(scene, camera);
    };
    init();
    animate();

  }
  render() {
    return (
      <>
        <TrialStyle ref={(ref) => (this.mount = ref)} />
      </>
    );
  }
}
export default Trial;
