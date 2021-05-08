// @ts-nocheck
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TrialStyle } from './CubeElements';
import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls';
// /import Stats from '/jsm/libs/stats.module.js';
import CUBE from './CubeThree/CUBE';
import getAlgs_URL from './Parser/getAlgs_URL';

import { animate_read } from './CubeThree/cube_animate_read_3';
import { usePlay } from './AlgProvider';

export const Trial = () => {
    const mount = useRef(null);
    const tick = useRef(0);
    let cube_sol = useRef([]);
    let cube = useRef([]);
    //TODO: Try using useRef with camera.current, renderer etc
    //const [count, setCount] = useState(0);
    var playC = usePlay();
    //const [plays, setPlay] = useState(0);

    let camera = useRef(null);
    let scene = useRef(null);
    let width = useRef(null);
    let height = useRef(null);
    let renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    });
    let cube1 = useRef(null);
    const controlsA = useRef(null);
    var url_scra1 = 'a';
    var url_soln1 = 'a';
    var scramble = [];
    var soln: any[] | ConcatArray<string> = [];
    //   var cube = [];
    var current_move = [];
    var current_soln = [];
    //   var cube_sol = [];
    var play_flag = 0;
    var focus = 0;
    // var scramble_state = [];
    var sc_be_so = 0;
    let frameId: number;
    var mycube: NodeJS.Timeout;
    const renderScene = () => {
        renderer.render(scene.current, camera.current);
    };

    useEffect(() => {
        width.current = mount.current.clientWidth;
        height.current = mount.current.clientHeight;

        scene.current = new THREE.Scene();
        // var face_plane = [];
        //used in time line to keep track on which move to be made
        var FIELD_OF_VIEW = 45;
        var WIDTH = width.current;
        var HEIGHT = height.current;
        var ASPECT_RATIO = WIDTH / HEIGHT;
        var NEAR = 1;
        var FAR = 10000;

        camera.current = new THREE.PerspectiveCamera(FIELD_OF_VIEW, ASPECT_RATIO, NEAR, FAR);

        //renderer.setClearColor(themes[props.theme].primary);
        renderer.setClearColor('#fff');
        renderer.setSize(width.current, height.current, true);
        mount.current.appendChild(renderer.domElement);

        // controls = new OrbitControls(camera.current, renderer.domElement);

        cube1.current = new CUBE(3, camera.current, renderer, scene.current);
        cube1.current.add();
        cube1.current.color();

        return () => {
            if (mount.current !== null) {
                mount.current.removeChild(renderer.domElement);
            }
            //scene.remove(cube);
        };
    }, []);

    useEffect(() => {
        var controls = new OrbitControls(camera.current, renderer.domElement);

        function cube_play() {
            var cube_soln_animate = animate_read(soln, soln, [], 0);

            if (tick.current < cube_soln_animate.length) {
                cube1.current.animateMove(cube_soln_animate[tick.current], 600);

                tick.current = tick.current + 1;
            }
            if (tick.current == cube_soln_animate.length) {
                tick.current = 0;
                play_flag = 3;
                clearInterval(mycube);
            }
        }
        window.addEventListener('visibilitychange', () => {
            if (document.visibilityState != 'visible') {
                focus = 1;
                clearInterval(mycube);
            } else if (document.visibilityState == 'visible' && focus == 1) {
                setInterval(mycube, 600);
                focus = 2;
            }
        });
        // const handleResize = () => {
        //     width = mount.current.clientWidth;
        //     height = mount.current.clientHeight;
        //     renderer.setSize(width, height);
        //     camera.current.aspect = width / height;
        //     camera.current.updateProjectionMatrix();
        //     renderScene();
        // };
        const handleResize = () => {
            let width = mount.current.clientWidth;
            let height = mount.current.clientHeight;
            renderer.setSize(width, height);
            camera.current.aspect = width / height;
            camera.current.updateProjectionMatrix();
            renderScene();
        };
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();

            var currentURL = window.location.href;

            var url_split = currentURL.split('?');

            if (url_split.length > 1) {
                var scramble_arr = url_split[1].split('=');
                var soln_arr = url_split[2].split('=');
                // var play_button = url_split[3].split("=");
                // play = play_button[1];

                var url_scramble = scramble_arr[1].replace(/%20/g, '');
                var url_soln = soln_arr[1].replace(/%20/g, '');
                url_scra1 = url_scramble.replace(/%27/g, "'");
                url_soln1 = url_soln.replace(/%27/g, "'");
                scramble = url_scra1.split(''); //the actual scramble input from user

                var s = getAlgs_URL(url_soln1);

                soln = s.split('');

                //the actual solution input from user
                current_move = scramble.slice(cube.current.length); //the current scramble move to be executed
                current_soln = soln.slice(cube_sol.current.length); //the current solution move to be executed

                /********THE BELOW PART IS TO HANDLE VARIOUS USER INPUTS*********/
                //i.e :- For example if user deletes scramble and only solution is present

                /***********BELOW CODE IS EXECUTED ONLY IF USER ENTERS SOMETHING NEW IN SCRAMBLE FIELD***********/

                // if (animation_flag == 0) {
                //     var myvar;
                //     camera.current.position.x = 300;
                //     camera.current.position.y = 200;
                //     camera.current.position.z = 1000;

                //     const line2 = beg_cross(scene,meshs,ctx ,c,padding,renderer)
                //     animation_flag = 1;
                // }
                if (scramble.length > 0) {
                    if (sc_be_so == 1) {
                        cube1.current.fastMove(scramble.concat(soln), 0);
                        cube.current = scramble;
                    }
                    if (cube.current.length == 0 && soln.length > 0 && sc_be_so == 0) {
                        cube1.current.fastMove(scramble, 0);
                        cube.current = scramble;
                    }
                    if (scramble.length > cube.current.length && sc_be_so == 0) {
                        var scramble_check = scramble.slice(0, cube.current.length);

                        if (
                            JSON.stringify(scramble_check) === JSON.stringify(cube.current) &&
                            soln.length == 0
                        ) {
                            cube1.current.liveMove(current_move, scramble, cube.current, 0);
                        } else if (
                            JSON.stringify(scramble_check) !== JSON.stringify(cube.current) &&
                            soln.length == 0
                        ) {
                            cube1.current.fastMove(cube.current.concat(soln), 1);
                            cube1.current.fastMove(scramble.concat(soln), 0);
                        }
                        if (
                            JSON.stringify(scramble_check) === JSON.stringify(cube.current) &&
                            soln.length > 0
                        ) {
                            cube1.current.fastMove(cube.current.concat(soln), 1);
                            cube1.current.fastMove(scramble.concat(soln), 0);
                        } else if (
                            JSON.stringify(scramble_check) !== JSON.stringify(cube.current) &&
                            soln.length > 0
                        ) {
                            cube1.current.fastMove(cube.current.concat(soln), 1);
                            cube1.current.fastMove(scramble.concat(soln), 0);
                        }
                        cube.current = scramble;
                    }
                    if (scramble.length == cube.current.length) {
                        if (JSON.stringify(scramble) !== JSON.stringify(cube.current)) {
                            cube1.current.fastMove(cube.current.concat(soln), 1);
                            cube1.current.fastMove(scramble.concat(soln), 0);
                            cube.current = scramble;
                        }
                    }
                    if (scramble.length < cube.current.length) {
                        cube1.current.fastMove(cube.current.concat(soln), 1);
                        cube1.current.fastMove(scramble.concat(soln), 0);
                        cube.current = scramble;
                    }
                    var soln_check = soln.slice(0, cube_sol.current.length);
                    if (soln.length > cube_sol.current.length) {
                        if (JSON.stringify(soln_check) === JSON.stringify(cube_sol.current)) {
                            cube1.current.liveMove(current_soln, soln, cube_sol.current, 0);
                        }
                        if (JSON.stringify(soln_check) !== JSON.stringify(cube_sol.current)) {
                            cube1.current.fastMove(cube_sol.current, 1);
                            cube1.current.fastMove(soln, 0);
                        }
                        cube_sol.current = soln;
                    } else if (soln.length < cube_sol.current.length) {
                        cube1.current.fastMove(cube_sol.current, 1);
                        cube1.current.fastMove(soln, 0);
                        cube_sol.current = soln;
                    }

                    if (soln.length == cube_sol.current.length) {
                        if (JSON.stringify(soln) !== JSON.stringify(cube_sol.current)) {
                            cube1.current.fastMove(cube_sol.current, 1);
                            cube1.current.fastMove(soln, 0);
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
                    sc_be_so = 1;
                    cube1.current.fastMove(cube.current.concat(soln), 1);
                    cube.current = scramble;
                }

                if (playC == 'true' && (play_flag == 0 || play_flag == 2)) {
                    // this is when the user initially presses the play button so that solution moves gets inversed
                    if (play_flag == 0) {
                        cube1.current.fastMove(soln, 1);

                        mycube = setInterval(cube_play, 800);
                        play_flag = 1; // done so that setinterval is not called recursively
                    }
                    // this is done to see if pause was pressed in between
                    else if (play_flag == 2) {
                        mycube = setInterval(cube_play, 800);
                        play_flag = 1; // done so that setinterval is not called recursively
                    }
                }

                if (playC == 'false') {
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
            frameId = window.requestAnimationFrame(animate);
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

        window.addEventListener('resize', handleResize);
        start();

        controlsA.current = { start, stop };

        return () => {
            stop();
            window.removeEventListener('resize', handleResize);
            //scene.remove(cube);
        };
    }, [playC]);

    return (
        <>
            <TrialStyle ref={mount} />
        </>
    );
};

export default Trial;
