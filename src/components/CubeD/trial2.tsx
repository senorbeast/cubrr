import { useEffect, useRef } from "react";
import { TrialStyle } from "./CubeElements";
import * as themes from "../themes";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { animate_read } from "./CubeThree/cube_animate_read_3";
import CUBE from "./CubeThree/CUBE";
import getAlgs_URL from "./Parser/getAlgs_URL";

import { useScra, useSol, usePlay } from "./AlgProvider";
// import { face_plane_make } from "./CubeThree/cube_face_plane";

interface TProps {
    widthp: number;
    heightp: number;
    theme: string;
}

export const Trial = (props: TProps) => {
    console.log("TRAIL2");
    const mount = useRef(null);
    const playBtn = usePlay();
    console.log("Scratrial", useScra(), useSol());
    console.log("props trail", props);
    // console.log("Play", props.play);
    // console.log("rendered", count);

    useEffect(() => {
        console.log("rendered in UseEffect");
        // console.log("Play in UseEFFect", props.play);
        //@ts-ignore
        let width = mount.current.clientWidth; //@ts-ignore
        let height = mount.current.clientHeight;
        let frameId: number | null;
        var mycube: NodeJS.Timeout;

        // var scene = new THREE.Scene();
        /* variables to create color */
        var scene = new THREE.Scene();
        var cube_sol: string | any[] = [];
        // var face_plane: never[] = [];
        var tick = 0; //used in time line to keep track on which move to be made
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

        /* adding webgl renderer */

        //   console.log("Width", width, "height", height, mapDimensions);
        var renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        }); //@ts-ignore
        renderer.setClearColor(themes[props.theme].primary);
        renderer.setSize(width, height, true); //@ts-ignore
        mount.current.appendChild(renderer.domElement);
        //var anisotropy = renderer.capabilities.getMaxAnisotropy();
        var controls = new OrbitControls(camera, renderer.domElement);
        // var mov1 = 0;
        //var moves_sol = [];
        var url_scra1 = "a";
        var url_soln1 = "a";
        var scramble = [];
        var soln: ConcatArray<any> = [];
        var cube: any[] = [];
        var current_move = [];
        var current_soln = [];
        var cube_sol: string | any[] = [];
        var play_flag = 0;
        var focus = 0;
        // var scramble_state = [];
        var play = "false";
        var sc_be_so = 0;
        // gap between the layers
        // radius of the fillet used on corners of cube
        var c = document.createElement("canvas");
        var ctx = c.getContext("2d");

        var cube1 = new CUBE(3, camera, renderer, scene);
        cube1.add();
        cube1.color();
        cube1.text("HRISHI BHAII", ctx, c);

        const renderScene = () => {
            renderer.render(scene, camera);
        };
        renderScene();
        const handleResize = () => {
            //@ts-ignore
            width = mount.current.clientWidth; //@ts-ignore
            height = mount.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderScene();
        };
        function cube_play() {
            var cube_soln_animate = animate_read(soln, soln, [], 0);

            if (tick < cube_soln_animate.length) {
                cube1.animateMove(cube_soln_animate[tick], 400);

                tick = tick + 1;
            }
            if (tick == cube_soln_animate.length) {
                tick = 0;
                play_flag = 3;
                clearInterval(mycube);
            }
        }
        window.addEventListener("visibilitychange", () => {
            if (document.visibilityState != "visible") {
                focus = 1;
                clearInterval(mycube);
            } else if (document.visibilityState == "visible" && focus == 1) {
                //@ts-ignore
                setInterval(mycube, 600);
                focus = 2;
            }
        });
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
                //console.log(url_soln1);
                var s = getAlgs_URL(url_soln1);
                //console.log("getalgs", s);
                soln = s.split("");
                // console.log(validateAlgs(s).legalAlg);

                //the actual solution input from user
                current_move = scramble.slice(cube.length); //the current scramble move to be executed
                current_soln = soln.slice(cube_sol.length); //the current solution move to be executed

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
                        cube = scramble;
                    }
                    if (cube.length == 0 && soln.length > 0 && sc_be_so == 0) {
                        cube1.fastMove(scramble, 0);
                        cube = scramble;
                    }
                    if (scramble.length > cube.length && sc_be_so == 0) {
                        var scramble_check = scramble.slice(0, cube.length);
                        console.log(scramble_check);
                        if (
                            JSON.stringify(scramble_check) ===
                                JSON.stringify(cube) &&
                            soln.length == 0
                        ) {
                            console.log("!!!");
                            cube1.liveMove(current_move, scramble, cube, 0);

                            // console.log(scramble_meshs);
                        } else if (
                            JSON.stringify(scramble_check) !==
                                JSON.stringify(cube) &&
                            soln.length == 0
                        ) {
                            console.log("1234");
                            cube1.fastMove(cube.concat(soln), 1);
                            cube1.fastMove(scramble.concat(soln), 0);
                        }
                        if (
                            JSON.stringify(scramble_check) ===
                                JSON.stringify(cube) &&
                            soln.length > 0
                        ) {
                            console.log("!!!");
                            cube1.fastMove(cube.concat(soln), 1);
                            cube1.fastMove(scramble.concat(soln), 0);

                            console.log(scramble_check);
                        } else if (
                            JSON.stringify(scramble_check) !==
                                JSON.stringify(cube) &&
                            soln.length > 0
                        ) {
                            console.log("1234");
                            cube1.fastMove(cube.concat(soln), 1);
                            cube1.fastMove(scramble.concat(soln), 0);
                        }
                        cube = scramble;
                    }
                    if (scramble.length == cube.length) {
                        if (JSON.stringify(scramble) !== JSON.stringify(cube)) {
                            cube1.fastMove(cube.concat(soln), 1);
                            cube1.fastMove(scramble.concat(soln), 0);
                            cube = scramble;
                        }
                    }
                    if (scramble.length < cube.length) {
                        cube1.fastMove(cube.concat(soln), 1);
                        cube1.fastMove(scramble.concat(soln), 0);
                        cube = scramble;
                    }
                    var soln_check = soln.slice(0, cube_sol.length);
                    if (soln.length > cube_sol.length) {
                        console.log(soln_check);

                        if (
                            JSON.stringify(soln_check) ===
                            JSON.stringify(cube_sol)
                        ) {
                            console.log("!!!");
                            cube1.liveMove(current_soln, soln, cube_sol, 0);

                            // console.log(scramble_meshs);
                        }
                        if (
                            JSON.stringify(soln_check) !==
                            JSON.stringify(cube_sol)
                        ) {
                            console.log("!!!");
                            cube1.fastMove(cube_sol, 1);
                            cube1.fastMove(soln, 0);

                            // console.log(scramble_meshs);
                        } //@ts-ignore
                        cube_sol = soln;
                    } else if (soln.length < cube_sol.length) {
                        cube1.fastMove(cube_sol, 1);
                        cube1.fastMove(soln, 0); //@ts-ignore
                        cube_sol = soln;
                    }

                    if (soln.length == cube_sol.length) {
                        if (JSON.stringify(soln) !== JSON.stringify(cube_sol)) {
                            cube1.fastMove(cube_sol, 1);
                            cube1.fastMove(soln, 0); //@ts-ignore
                            cube_sol = soln;
                        }
                    }

                    sc_be_so = 0;
                }

                if (
                    scramble.length == 0 &&
                    sc_be_so == 0 &&
                    cube.length > scramble.length
                ) {
                    console.log("====");
                    sc_be_so = 1;
                    cube1.fastMove(cube.concat(soln), 1);
                    cube = scramble;
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
            if (playBtn === true) {
                // @ts-ignore
                // face_plane_make(
                //     face_plane,
                //     "true", // @ts-ignore
                //     tx1, // @ts-ignore
                //     tx2, // @ts-ignore
                //     tx3, // @ts-ignore
                //     tx4, // @ts-ignore
                //     tx5, // @ts-ignore
                //     tx6
                // );
            }
            if (playBtn == false) {
                // face_plane_make(
                //     face_plane,
                //     "false", // @ts-ignore
                //     tx1, // @ts-ignore
                //     tx2, // @ts-ignore
                //     tx3, // @ts-ignore
                //     tx4, // @ts-ignore
                //     tx5, // @ts-ignore
                //     tx6
                // );
            }

            renderScene();
        };

        const start = () => {
            if (!frameId) {
                frameId = requestAnimationFrame(animate);
            }
        };

        const stop = () => {
            // @ts-ignore
            cancelAnimationFrame(frameId);
            frameId = null;
        };
        // @ts-ignore
        mount.current.appendChild(renderer.domElement);
        window.addEventListener("resize", handleResize);
        start();
        // @ts-ignore
        controls.current = { start, stop };

        return () => {
            stop();
            console.log("Unmount uE1");
            window.removeEventListener("resize", handleResize);
            if (mount.current !== null) {
                // @ts-ignore
                mount.current.removeChild(renderer.domElement);
            }
            //scene.remove(cube);
        }; // @ts-ignore
    }, [props.theme, props.widthp, props.heightp]);

    return (
        <>
            <TrialStyle ref={mount} />
        </>
    );
};

export default Trial;