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

export const Trial = (props) => {
    const mount = useRef(null);
    const [count, setCount] = useState(0);
    const playBtn = useRef(props.play);
    const [plays, setPlay] = useState(0);
    playBtn.current = props.play;
    console.log("Play", props.play);
    console.log("rendered", count);

    useEffect(() => {
        console.log("rendered in UseEffect", count);
        console.log("Play in UseEFFect", props.play);
        let width = mount.current.clientWidth;
        let height = mount.current.clientHeight;
        let frameId;
        var mycube;
        var raycaster = new THREE.Raycaster(); //raycaster object
        var mouse = new THREE.Vector2(); //to get the location of mouse
        var scene = new THREE.Scene();
        /* variables to create color */
        var flag = 1;
        mouse.x = 100;
        mouse.y = 100;
        var scramble_meshs = [];
        var meshs = [];
        var cube_sol = [];
        var core = [];
        var ret = [];
        var face_plane = [];
        var animation_flag = 0;
        var tick = 0; //used in time line to keep track on which move to be made
        var slider_value = 0;
        //   let mapDimensions = this.mount.getBoundingClientRect();
        //   let width = this.mount.clientWidth;
        //   let height = this.mount.clientHeight;
        var FIELD_OF_VIEW = 45,
            WIDTH = width,
            HEIGHT = height,
            ASPECT_RATIO = WIDTH / HEIGHT,
            NEAR = 1,
            FAR = 10000;

        var camera = new THREE.PerspectiveCamera(
            FIELD_OF_VIEW,
            ASPECT_RATIO,
            NEAR,
            FAR
        );
        camera.position.z = 600;
        camera.position.x = 600;
        camera.position.y = 300;
        camera.tanFOV = Math.tan(((Math.PI / 180) * camera.fov) / 2); //  For maintaining scale on windowResize.
        camera.oneToOne = function () {
            //  Return the Z position at which to place an object for exactly 100% scale.
            //  https://github.com/mrdoob/three.js/blob/dev/examples/js/renderers/CSS3DRenderer.js#L142

            return (-0.5 / Math.tan((camera.fov * Math.PI) / 360)) * HEIGHT;
        };
        camera.lookAt(scene.position);
        scene.add(camera);
        /* adding webgl renderer */

        //   console.log("Width", width, "height", height, mapDimensions);
        var renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setClearColor(themes[props.theme].primary);
        renderer.setSize(width, height, true);
        mount.current.appendChild(renderer.domElement);
        var anisotropy = renderer.capabilities.getMaxAnisotropy();
        var controls = new OrbitControls(camera, renderer.domElement);
        // var mov1 = 0;
        var moves = [];
        var moves6 = [];
        //var moves_sol = [];
        var url_scra1 = "a";
        var url_soln1 = "a";
        var scramble = [];
        var soln = [];
        var cube = [];
        var current_move = [];
        var current_soln = [];
        var cube_sol = [];
        var play_flag = 0;
        // var scramble_state = [];
        var play = "false";
        var sc_be_so = 0;
        var pad = 5;
        // gap between the layers
        var padding = pad;
        // radius of the fillet used on corners of cube
        var c = document.createElement("canvas");
        var ctx = c.getContext("2d");
        const tx1 = document.createElement("canvas").getContext("2d");
        tx1.font = "150pt poppins ";
        tx1.fillText("F", 100, 140);
        const tx2 = document.createElement("canvas").getContext("2d");
        tx2.font = "150pt roboto";
        tx2.fillText("B", 100, 140);
        const tx3 = document.createElement("canvas").getContext("2d");
        tx3.font = "150pt roboto";
        tx3.fillText("R", 100, 140);
        const tx4 = document.createElement("canvas").getContext("2d");
        tx4.font = "150pt roboto";
        tx4.fillText("L", 100, 140);
        const tx5 = document.createElement("canvas").getContext("2d");
        tx5.font = "150pt roboto";
        tx5.fillText("U", 100, 140);
        const tx6 = document.createElement("canvas").getContext("2d");
        tx6.font = "150pt roboto";
        tx6.fillText("D", 100, 140);

        // const texture = new THREE.TextureLoader().load("rubiksLogoClassic.png" );

        let texture1 = new THREE.CanvasTexture(tx1.canvas);
        let texture2 = new THREE.CanvasTexture(tx2.canvas);
        let texture3 = new THREE.CanvasTexture(tx3.canvas);
        let texture4 = new THREE.CanvasTexture(tx4.canvas);
        let texture5 = new THREE.CanvasTexture(tx5.canvas);
        let texture6 = new THREE.CanvasTexture(tx6.canvas);

        texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture2.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture3.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture4.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture5.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture6.anisotropy = renderer.capabilities.getMaxAnisotropy();
        //loader used for texture
        ret = cubelets_form(
            scene,
            3,
            padding,
            texture1,
            texture2,
            texture3,
            texture4,
            texture5,
            texture6
        );
        meshs = ret[0];
        core = ret[1];
        face_plane = ret[2];
        cube_color(meshs);
        const renderScene = () => {
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            width = mount.current.clientWidth;
            height = mount.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderScene();
        };
        function cube_play() {
            var cube_soln_animate = animate_read(soln, soln, [], 0);
            console.log(cube_soln_animate);
            if (tick < cube_soln_animate.length) {
                animate_execute(
                    scene,
                    meshs,
                    cube_soln_animate[tick],
                    padding,
                    400
                );
                tick = tick + 1;
            }
            if (tick == cube_soln_animate.length) {
                tick = 0;
                play_flag = 3;
                clearInterval(mycube);
            }
        }

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
                scramble = url_scra1.split("");
                soln = url_soln1.split("");
                current_move = scramble.slice(cube.length);
                current_soln = soln.slice(cube_sol.length);
                /********TODO**********/
                //When solution is edited in between//
                //When moves are copy pasted in solution//

                if (scramble.length > cube.length) {
                    console.log(scramble);
                    var scramble_check = scramble.slice(0, cube.length - 1);
                    if (
                        JSON.stringify(scramble_check) === JSON.stringify(cube)
                    ) {
                        moves = scramble_read(current_move, scramble, cube, 0);

                        fast_execute(scene, meshs, padding, moves);

                        // console.log(scramble_meshs);
                        cube = scramble;
                    } else {
                        var inv = scramble_read(
                            cube.concat(cube_sol),
                            cube.concat(cube_sol),
                            [],
                            1
                        );
                        fast_execute(scene, meshs, padding, inv);
                        var so = scramble_read(
                            scramble.concat(cube_sol),
                            scramble.concat(cube_sol),
                            [],
                            0
                        );
                        fast_execute(scene, meshs, padding, so);
                        cube = scramble;
                    }
                }
                if (scramble.length < cube.length) {
                    var inv = scramble_read(
                        cube.concat(cube_sol),
                        cube.concat(cube_sol),
                        [],
                        1
                    );
                    fast_execute(scene, meshs, padding, inv);
                    var so = scramble_read(
                        scramble.concat(cube_sol),
                        scramble.concat(cube_sol),
                        [],
                        0
                    );
                    fast_execute(scene, meshs, padding, so);
                    cube = scramble;
                }
                if (scramble.length == cube.length) {
                    if (JSON.stringify(scramble) !== JSON.stringify(cube)) {
                        // console.log("laudde lag gaye",soln);
                        // console.log(cube_sol)
                        var inv = scramble_read(
                            cube.concat(cube_sol),
                            cube.concat(cube_sol),
                            [],
                            1
                        );
                        fast_execute(scene, meshs, padding, inv);
                        var so = scramble_read(
                            scramble.concat(cube_sol),
                            scramble.concat(cube_sol),
                            [],
                            0
                        );
                        fast_execute(scene, meshs, padding, so);
                        cube = scramble;
                    }
                }
                if (scramble.length == 0) {
                    if (soln.length > 0 && sc_be_so == 0) {
                        console.log("IAM");
                        var inv = scramble_read(cube_sol, cube_sol, [], 1);
                        fast_execute(scene, meshs, padding, inv);
                        sc_be_so = 1;
                    }
                }
                //If there is scramble --> Then only execute the solution
                if (scramble.length > 0) {
                    console.log(scramble.length);
                    if (sc_be_so == 1) {
                        var so = scramble_read(soln, soln, [], 0);
                        fast_execute(scene, meshs, padding, so);
                        cube_sol = soln;

                        play_flag = 0;
                    }
                    sc_be_so = 0;
                    if (soln.length > cube_sol.length) {
                        var sol_check = soln.slice(0, cube_sol.length - 1);
                        if (
                            JSON.stringify(sol_check) ===
                            JSON.stringify(cube_sol)
                        ) {
                            moves6 = scramble_read(
                                current_soln,
                                soln,
                                cube_sol,
                                0
                            );
                            console.log(moves6);
                            cube_sol = soln;
                            fast_execute(scene, meshs, padding, moves6);
                            play_flag = 0;
                        } else {
                            var inv = scramble_read(cube_sol, cube_sol, [], 1);
                            fast_execute(scene, meshs, padding, inv);
                            var so = scramble_read(soln, soln, [], 0);
                            fast_execute(scene, meshs, padding, so);
                            cube_sol = soln;
                        }
                    }
                    if (soln.length < cube_sol.length) {
                        var inv = scramble_read(cube_sol, cube_sol, [], 1);
                        fast_execute(scene, meshs, padding, inv);
                        var so = scramble_read(soln, soln, [], 0);
                        fast_execute(scene, meshs, padding, so);
                        cube_sol = soln;
                    }
                    if (soln.length == cube_sol.length) {
                        console.log(
                            JSON.stringify(soln) === JSON.stringify(cube_sol)
                        );
                        if (JSON.stringify(soln) !== JSON.stringify(cube_sol)) {
                            console.log("laudde lag gaye", soln);
                            console.log(cube_sol);
                            var inv = scramble_read(cube_sol, cube_sol, [], 1);
                            fast_execute(scene, meshs, padding, inv);
                            var so = scramble_read(soln, soln, [], 0);
                            fast_execute(scene, meshs, padding, so);
                            cube_sol = soln;
                        }
                    }
                }
            }
            // if (animation_flag == 0) {
            //     var myvar;
            //     camera.position.x = 300;
            //     camera.position.y = 200;
            //     camera.position.z = 1000;

            //     const line2 = animation_sequence(scene,meshs,core,camera)
            //     animation_flag = 1;
            // }

            if (play == "true" && (play_flag == 0 || play_flag == 2)) {
                var inverse = scramble_read(soln, soln, [], 1); //FINDS THE INVERSE MOVES FOR THE SOLUTION
                // this is when the user initially presses the play button so that solution moves gets inversed
                if (play_flag == 0) {
                    fast_execute(scene, meshs, padding, inverse); // this execcutes the inverse move
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

            if (playBtn == "true") {
                face_plane_make(
                    face_plane,
                    "true",
                    tx1,
                    tx2,
                    tx3,
                    tx4,
                    tx5,
                    tx6
                );
            }
            if (playBtn == "false") {
                face_plane_make(
                    face_plane,
                    "false",
                    tx1,
                    tx2,
                    tx3,
                    tx4,
                    tx5,
                    tx6
                );
            }

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

        mount.current.appendChild(renderer.domElement);
        //window.addEventListener("resize", handleResize);
        start();

        controls.current = { start, stop };

        return () => {
            stop();
            window.removeEventListener("resize", handleResize);
            if (mount.current !== null) {
                mount.current.removeChild(renderer.domElement);
            }
            //scene.remove(cube);
        };
    }, [props.theme, props.width, props.height]);

    return (
        <>
            <TrialStyle ref={mount} />
        </>
    );
};

export default Trial;
