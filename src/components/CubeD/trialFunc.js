import React, {
  Component,
  useLayoutEffect,
  useState,
  useEffect,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import createjs from "../../../node_modules/createjs-module/createjs";
import { TrialStyle } from "./CubeElements";
import gsap from "gsap";
import * as themes from "../themes";

// import Stats from '/jsm/libs/stats.module.js';
import { animation_sequence } from "./cube_animation_sequence.js";
import { beg_cross } from "./cube_beg_cross.js";
import { cubelets_form } from "./cubelets.js";
import { fast_execute } from "./cube_fast_execute.js";
import { cube_color } from "./cubelet_colors.js";

import { animate_execute } from "./cube_animate_execute.js";
import { draw_text } from "./cube_text.js";
import { face_plane_make } from "./cube_face_plane.js";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls";
// /import Stats from '/jsm/libs/stats.module.js';
import * as THREE from "three";
import { scramble_read } from "./cube_scramble_read_v3";
import { animate_read } from "./cube_animate_read_3";
import CUBE from "./CUBE.js";
import getAlgs_URL from "./Parser/getAlgs_URL";
import validateAlgs from "./Parser/validateAlg";
export const Trial = (props) => {
  const mount = useRef(null);
  const tick = useRef(0);
  let cube_sol = useRef([]);
  let cube = useRef([]);
  const [count, setCount] = useState(0);
  const playBtn = useRef(props.play);
  const [plays, setPlay] = useState(0);
  playBtn.current = props.play;
  // console.log("Play", props.play);
  // console.log("rendered", count);
  let camera = undefined;
  let renderer = undefined;
  let scene = undefined;
  let cube1;
  var url_scra1 = "a";
  var url_soln1 = "a";
  var scramble = [];
  var soln = [];
  //   var cube = [];
  var current_move = [];
  var current_soln = [];
  //   var cube_sol = [];
  var play_flag = 0;
  var focus = 0;
  // var scramble_state = [];
  var play = "false";
  var sc_be_so = 0;
  let frameId;
  var mycube;
  const renderScene = () => {
    renderer.render(scene, camera);
  };
  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;

    var flag = 1;
    scene = new THREE.Scene();
    // var face_plane = [];
    var animation_flag = 0;
    //used in time line to keep track on which move to be made
    var FIELD_OF_VIEW = 45,
      WIDTH = width,
      HEIGHT = height,
      ASPECT_RATIO = WIDTH / HEIGHT,
      NEAR = 1,
      FAR = 10000;

    camera = new THREE.PerspectiveCamera(
      FIELD_OF_VIEW,
      ASPECT_RATIO,
      NEAR,
      FAR
    );

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(themes[props.theme].primary);
    renderer.setSize(width, height, true);
    mount.current.appendChild(renderer.domElement);

    // controls = new OrbitControls(camera, renderer.domElement);

    cube1 = new CUBE(3, camera, renderer, scene);
    cube1.add();
    cube1.color();
  }, [props.width, props.height]);
  useEffect(() => {
    var controls = new OrbitControls(camera, renderer.domElement);
    function cube_play() {
      var cube_soln_animate = animate_read(soln, soln, [], 0);
      console.log(cube_soln_animate);
      console.log("tick teri mkb", tick);
      if (tick.current < cube_soln_animate.length) {
        cube1.animateMove(cube_soln_animate[tick.current], 400);

        tick.current = tick.current + 1;
      }
      if (tick.current == cube_soln_animate.length) {
        tick.current = 0;
        play_flag = 3;
        clearInterval(mycube);
      }
    }
    window.addEventListener("visibilitychange", (event) => {
      if (document.visibilityState != "visible") {
        focus = 1;
        clearInterval(mycube);
      } else if (document.visibilityState == "visible" && focus == 1) {
        setInterval(mycube, 600);
        focus = 2;
      }
    });
    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      var currentURL = window.location.href;

      var url_split = currentURL.split("?");

      if (url_split.length > 1) {
        var scramble_arr = url_split[1].split("=");
        var soln_arr = url_split[2].split("=");
        var play_button = url_split[3].split("=");
        play = play_button[1];

        var url_scramble = scramble_arr[1].replace(/%20/g, "");
        var url_soln = soln_arr[1].replace(/%20/g, "");
        url_scra1 = url_scramble.replace(/%27/g, "'");
        url_soln1 = url_soln.replace(/%27/g, "'");
        scramble = url_scra1.split(""); //the actual scramble input from user

        var s = getAlgs_URL(url_soln1);

        soln = s.split("");
        // console.log(validateAlgs(s).legalAlg);

        //the actual solution input from user
        current_move = scramble.slice(cube.current.length); //the current scramble move to be executed
        current_soln = soln.slice(cube_sol.current.length); //the current solution move to be executed

        /********THE BELOW PART IS TO HANDLE VARIOUS USER INPUTS*********/
        //i.e :- For example if user deletes scramble and only solution is present

        /***********BELOW CODE IS EXECUTED ONLY IF USER ENTERS SOMETHING NEW IN SCRAMBLE FIELD***********/

        // if (animation_flag == 0) {
        //     var myvar;
        //     camera.position.x = 300;
        //     camera.position.y = 200;
        //     camera.position.z = 1000;

        //     const line2 = beg_cross(scene,meshs,ctx ,c,padding,renderer)
        //     animation_flag = 1;
        // }
        if (scramble.length > 0) {
          if (sc_be_so == 1) {
            cube1.fastMove(scramble.concat(soln), 0);
            cube.current = scramble;
          }
          if (cube.current.length == 0 && soln.length > 0 && sc_be_so == 0) {
            cube1.fastMove(scramble, 0);
            cube.current = scramble;
          }
          if (scramble.length > cube.current.length && sc_be_so == 0) {
            var scramble_check = scramble.slice(0, cube.current.length);
            console.log(scramble_check);
            if (
              JSON.stringify(scramble_check) === JSON.stringify(cube.current) &&
              soln.length == 0
            ) {
              console.log("!!!");
              cube1.liveMove(current_move, scramble, cube.current, 0);

              // console.log(scramble_meshs);
            } else if (
              JSON.stringify(scramble_check) !== JSON.stringify(cube.current) &&
              soln.length == 0
            ) {
              console.log("1234");
              cube1.fastMove(cube.current.concat(soln), 1);
              cube1.fastMove(scramble.concat(soln), 0);
            }
            if (
              JSON.stringify(scramble_check) === JSON.stringify(cube.current) &&
              soln.length > 0
            ) {
              console.log("!!!");
              cube1.fastMove(cube.current.concat(soln), 1);
              cube1.fastMove(scramble.concat(soln), 0);

              console.log(scramble_check);
            } else if (
              JSON.stringify(scramble_check) !== JSON.stringify(cube.current) &&
              soln.length > 0
            ) {
              console.log("1234");
              cube1.fastMove(cube.current.concat(soln), 1);
              cube1.fastMove(scramble.concat(soln), 0);
            }
            cube.current = scramble;
          }
          if (scramble.length == cube.current.length) {
            if (JSON.stringify(scramble) !== JSON.stringify(cube.current)) {
              cube1.fastMove(cube.current.concat(soln), 1);
              cube1.fastMove(scramble.concat(soln), 0);
              cube.current = scramble;
            }
          }
          if (scramble.length < cube.current.length) {
            cube1.fastMove(cube.current.concat(soln), 1);
            cube1.fastMove(scramble.concat(soln), 0);
            cube.current = scramble;
          }
          var soln_check = soln.slice(0, cube_sol.current.length);
          if (soln.length > cube_sol.current.length) {
            console.log(soln_check);

            if (
              JSON.stringify(soln_check) === JSON.stringify(cube_sol.current)
            ) {
              console.log("!!!");
              cube1.liveMove(current_soln, soln, cube_sol.current, 0);

              // console.log(scramble_meshs);
            }
            if (
              JSON.stringify(soln_check) !== JSON.stringify(cube_sol.current)
            ) {
              console.log("!!!");
              cube1.fastMove(cube_sol.current, 1);
              cube1.fastMove(soln, 0);

              // console.log(scramble_meshs);
            }
            cube_sol.current = soln;
          } else if (soln.length < cube_sol.current.length) {
            cube1.fastMove(cube_sol.current, 1);
            cube1.fastMove(soln, 0);
            cube_sol.current = soln;
          }

          if (soln.length == cube_sol.current.length) {
            if (JSON.stringify(soln) !== JSON.stringify(cube_sol.current)) {
              cube1.fastMove(cube_sol.current, 1);
              cube1.fastMove(soln, 0);
              cube_sol.current = soln;
            }
          }

          sc_be_so = 0;
        }

        if (
          scramble.length == 0 &&
          sc_be_so == 0 &&
          cube.current.length > scramble.length
        ) {
          console.log("====");
          sc_be_so = 1;
          cube1.fastMove(cube.current.concat(soln), 1);
          cube.current = scramble;
        }

        if (play == "true" && (play_flag == 0 || play_flag == 2)) {
          // this is when the user initially presses the play button so that solution moves gets inversed
          if (play_flag == 0) {
            cube1.fastMove(soln, 1);

            mycube = setInterval(cube_play, 600);
            play_flag = 1; // done so that setinterval is not called recursively
          }
          // this is done to see if pause was pressed in between
          else if (play_flag == 2) {
            mycube = setInterval(cube_play, 600);
            play_flag = 1; // done so that setinterval is not called recursively
          }
        }

        if (play == "false") {
          if (play_flag == 1) {
            play_flag = 2; // so that the moves dont get inversed again
            clearInterval(mycube);
          }
          if (play_flag == 3) {
            play_flag = 0;
          }
        }
      }
      //   if (playBtn == "true") {
      //     face_plane_make(face_plane, "true", tx1, tx2, tx3, tx4, tx5, tx6);
      //   }
      //   if (playBtn == "false") {
      //     face_plane_make(face_plane, "false", tx1, tx2, tx3, tx4, tx5, tx6);
      //   }

      renderScene();
    };
    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    window.addEventListener("resize", handleResize);
    start();

    controls.current = { start, stop };

    return () => {
      stop();
      window.removeEventListener("resize", handleResize);

      //scene.remove(cube);
    };
  }, [props.play]);
  return (
    <>
      <TrialStyle ref={mount} />
    </>
  );
};

export default Trial;
