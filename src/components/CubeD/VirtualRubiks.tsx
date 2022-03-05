import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';
import { RubiksStyle } from './UX/CubeElements';
import * as themes from '../themes';
import { animate_read } from './CubeThree/cube_animate_read_3';
import CUBE from './CubeThree/CUBE';
import getAlgs_URL from './Parser/getAlgs_URL';
import { useMoveNum, useSetMoveNum, usePlay } from './AlgProvider';
// import useSol from './AlgProvider';
// import useScra from './AlgProvider';
import validateAlgs from './Parser/validateAlg';
// import { face_plane_make } from "./CubeThree/cube_face_plane";

interface TProps {
    widthp: number;
    heightp: number;
    theme: string;
}

export const VirtualRubiksC = (props: TProps) => {
    const mount = useRef(null);
    let playBtn = useRef(false);
    playBtn.current = usePlay();
    let MoveNum = useRef(0);
    MoveNum.current = useMoveNum();
    let MoveSet = useRef((_arg0: number): void => {});
    MoveSet.current = useSetMoveNum();
    //console.log("Scratrial", useScra(), useSol());
    // console.log('Play', playBtn.current);

    useEffect(() => {
        console.log('rendered in UseEffect', playBtn.current);
        //@ts-ignore
        let width = mount.current.clientWidth; //@ts-ignore
        let height = mount.current.clientHeight;
        let frameId: number | null;
        var mycube: NodeJS.Timeout;

        /* variables to create color */
        var scene = new THREE.Scene(); //https://threejs.org/docs/index.html?q=SCENE#api/en/scenes/Scene
        var cube_sol: string | any[] = [];

        var tick = 0; //used in time line to keep track on which move to be made
        var WIDTH = width;
        var HEIGHT = height;
        // Frustum
        var FIELD_OF_VIEW = 45;
        var ASPECT_RATIO = WIDTH / HEIGHT;
        var NEAR = 1;
        var FAR = 10000;

        var animation_flag = 0;
        var camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, ASPECT_RATIO, NEAR, FAR); //https://threejs.org/docs/index.html?q=CAMERA#api/en/cameras/PerspectiveCamera

        /* adding webgl renderer */

        var renderer = new THREE.WebGLRenderer({
            alpha: true, // OUR CANVAS CONTAINS A TRANSPARENCY BUFFER
            antialias: true, //GIVES OUT BETTER CUBE QUALITY
        }); //@ts-ignore
        renderer.setClearColor(themes[props.theme].primary); //PRIMARY COLOR SAME AS THE WEBSITE THEME
        renderer.setSize(width, height, true); //SIZE OF CUBE RENDERER ACCORDING TO WEBSITE
        //@ts-ignore
        mount.current.appendChild(renderer.domElement); //MOUNTING RENDERER ONTO THE WEBSITE
        //var anisotropy = renderer.capabilities.getMaxAnisotropy();
        var controls = new OrbitControls(camera, renderer.domElement); //https://threejs.org/docs/index.html?q=CONTROLS#examples/en/controls/OrbitControls
        // var mov1 = 0;
        //var moves_sol = [];
        var url_scra1 = 'a'; //ACTUAL SCRAMBLE WRITTEN BY THE USER TEMPORARILY STORED HERE (NOTE : THIS VARIABLE CAN BE REMOVED)
        var url_soln1 = 'a'; //ACTUAL SOLUTION WRITTEN BY THE USER TEMPORARILY STORED HERE (NOTE : THIS VARIABLE CAN BE REMOVED)
        var scramble = []; //SCRAMBLE AFTER REPLACING THE HTML URL REFERENCE CODES
        var soln: string[] = []; //SOLUTION AFTER REPLACING THE HTML URL REFERENCE CODES
        var val_scra: string[] = [];
        var val_soln: string[] = [];
        var cube: any[] = []; //SCRAMBLE MOVES DONE ON THE CUBE IS STORED HERE WHICH WILL USE DURING OUR RUNTIME
        var current_move = []; //CURRENT SCRAMBLE TO BE DONE ON THE CUBE THIS WILL CHANGE WITH THE USER ADDING SCRAMBLE
        var current_soln = []; //CURRENT SOLUTION TO BE DONE ON THE CUBE THIS WILL CHANGE WITT THE USER ADDING SOLUTION
        var cube_sol: string | any[] = []; //SOLUTION MOVES DONE ON THE CUBE IS STORED HERE WHICH WILL USE DURING OUR RUNTIME
        var play_flag = 0; /* 0 : CUBE IS INITIAL POSITION FROM WHERE YOU CAN PLAY THE CUBE IT WILL START FROM THE BEGINNING OR FROM WHERE YOU HAVE PAUSED 
                             1 : CUBE IS IN PAUSED POSITION ( NOTE: HERE WE STOP THE SETINTERVAL FUNCTION )
                             2 : CUBE WAS PAUSED NOW THE USER WANTS TO PLAY THE CUBE FROM THE CURRENT POSITION
                             3 : ALL THE MOVES ENTERED BY USER HAVE BEEN PLAYED ON THE CUBE SO STOP THE ANIMATIO*/
        var focus = 0; //NEED TO DISCUSS WITH HRISHI BHAI
        // var scramble_state = [];
        //var play = "false";
        var sc_be_so = 0; //SCRAMBLE BEFORE SOLUTION VALUE : 0 - SCRAMBLE IS GIVEN BY USER BEFORE SOLUTION
        //  1 - SCRAMBLE IS GIVEN BY USER AFTER SOLUTION BUT THE GIVEN SSOLUTION IS IMPLEMENTED ON THE CUBE
        // gap between the layers
        // radius of the fillet used on corners of cube
        var c = document.createElement('canvas'); //2D CANVAS TO ADD TEXT
        var ctx = c.getContext('2d');
        var slider_no = 0; // TELLS IF THE USER WANTS TO A SPECIFIC POINT ON THE CUBE
        var cube1 = new CUBE(3, camera, renderer, scene); //CREATING A OBJECT OF CUBE CLASS
        /* FORMING CUBELETS AND ADDING CUBE TO SCENE */
        cube1.add();
        /* ADDING COLOR TO CUBE */
        cube1.color();
        /* ADDING TEXT TO THE 2D CANVAS */
        cube1.text('HRISHI BHAII', ctx, c);
        /* RENDERING SCENE USING WEBGL RENDERER */
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
        /* CUBE ANIMATION HANDLER */
        function cube_play() {
            var cube_soln_animate = animate_read(soln, soln, [], 0);

            if (tick < cube_soln_animate.length) {
                cube1.animateMove(cube_soln_animate[tick], 400);

                tick = tick + 1;
                console.log('Move values', tick);
                // console.log(cube_soln_animate[tick]);
                MoveSet.current(tick);
                //ISSUE : -Moveset not working  -- Fixed
                // console.log(MoveSet.current);
            }
            if (tick == cube_soln_animate.length) {
                tick = 0;
                play_flag = 3;
                clearInterval(mycube);
            }
        }
        window.addEventListener('visibilitychange', () => {
            if (document.visibilityState != 'visible') {
                focus = 1;
                clearInterval(mycube);
            } else if (document.visibilityState == 'visible' && focus == 1) {
                //@ts-ignore
                setInterval(mycube, 600);
                focus = 2;
            }
        });
        /* FUNCTION THAT RERENDERERS SCENE WRITTEN SO THAT RENDERING IS STOPPED IF USER SHIFTS TAB */
        const animate = () => {
            requestAnimationFrame(animate);
            /* CONTROLS NEEDS TO BE UPDATED EVERYTIME WE RENDER THE SCENE */
            controls.update();
            var currentURL = window.location.href;

            /* URL NEEDS TO BE SPLITTED TO GET THE SCRAMBLE AND SOLUTION ( EVERTHING AFTER ? IS SCRAMBLE AND SOLUTION ) */
            var url_split = currentURL.split('?');
            /* IF USER ENTERS SCRAMBLE OR SOLUTION */
            if (url_split.length > 1) {
                /* SPLITTING SCRAMBLE AND SOLUTION ( SCRAMBLE = SOLUTION ) */
                var scramble_arr = url_split[1].split('=');
                var soln_arr = url_split[2].split('=');

                /* REPLACING HTML URL ENCODING REFERENCE CODES BY STRINGS EASIER TO HANDLE */
                var url_scramble = scramble_arr[1].replace(/%20/g, '');
                var url_soln = soln_arr[1].replace(/%20/g, '');
                url_scra1 = url_scramble.replace(/%27/g, "'");
                url_soln1 = url_soln.replace(/%27/g, "'");

                /* THE ACTUAL SCRAMBLE INPUT FROM THE USER */
                //scramble = url_scra1.split('');
                /* USING THE API TO GET SCRAMBLE FROM THE URL */
                var sa = getAlgs_URL(url_scra1);
                /* USING THE API TO GET SOLUTION FROM THE URL */
                var s = getAlgs_URL(url_soln1);

                /* THE ACTUAL SOLUTION INPUT FROM USER */
                //soln = s.split('');

                val_scra = validateAlgs(sa).legalAlg; //validated scramble entered by user
                val_soln = validateAlgs(s).legalAlg; //validated solution entered by user
                //console.log( val_scra );
                //console.log( val_soln );
                //current_move = scramble.slice(cube.length); //the current scramble move to be executed
                //current_soln = soln.slice(cube_sol.length); //the current solution move to be executed

                /********THE BELOW PART IS TO HANDLE VARIOUS USER INPUTS*********/
                //i.e :- For example if user deletes scramble and only solution is present
                //https://app.diagrams.net/#G1oIhS2a-5cExQxtVM7U2Dl7XwmcAsL6R7

                /* PLAY CUBE ANIMATION */
                // if (animation_flag == 0) {
                //     //var myvar;
                //     camera.position.x = 300;
                //     camera.position.y = 200;
                //     camera.position.z = 1000;

                //     cube1.animate_sequence();
                //     animation_flag = 1;
                // }
                /* SCRAMBLE AND SOLUTION HANDLER */
                // REFER THIS FOR THE MOVES HANDLER IMPLEMENTATION WILL BE DONE IN THE PACKAGE ITSELF https://drive.google.com/file/d/1oIhS2a-5cExQxtVM7U2Dl7XwmcAsL6R7/view?usp=sharing
                /***********BELOW CODE IS EXECUTED ONLY IF USER ENTERS SOMETHING NEW IN SCRAMBLE FIELD***********/

                if (
                    typeof val_scra !== 'undefined' &&
                    typeof val_soln !== 'undefined' &&
                    MoveNum.current == validateAlgs(val_soln.toString()).movesNum
                ) {
                    cube1.move_handler(
                        val_scra.concat(val_soln),
                        0,
                        val_scra.length,
                        MoveNum.current,
                    );
                }

                if (playBtn.current && (play_flag == 0 || play_flag == 2)) {
                    // this is when the user initially presses the play button so that solution moves gets inversed
                    if (play_flag == 0) {
                        //INVERSE THE SOLUTION ONLY IF THE SLIDER WAS AT LAST MOVES
                        if (MoveNum.current == validateAlgs(val_soln.toString()).movesNum) {
                            cube1.fastMove(soln, 1);
                        }
                        //IF SLIDER NOT AT LAST MOVES START PLAYING ANIMATION FROM THE SLIDER MOVE
                        else {
                            tick = slider_no;
                        }

                        mycube = setInterval(cube_play, 600);
                        play_flag = 1; // done so that setinterval is not called recursively
                    }
                    // this is done to see if pause was pressed in between
                    else if (play_flag == 2) {
                        //if slider is not where it was previously paused then move the tick value to current slider position
                        if (tick != slider_no) {
                            tick = slider_no;
                            mycube = setInterval(cube_play, 600);
                        } else {
                            mycube = setInterval(cube_play, 600);
                        }

                        play_flag = 1; // done so that setinterval is not called recursively
                    }
                }

                if (!playBtn.current) {
                    if (play_flag == 1) {
                        slider_no = MoveNum.current; //storing the slider current value
                        play_flag = 2; // so that the moves dont get inversed again
                        clearInterval(mycube);
                    }
                    if (play_flag == 3) {
                        play_flag = 0;
                    }
                }
            }

            // console.log(MoveNum.current);
            //DONE:
            /*IF SLIDER VALUE GREATER THAN CURRENT VALUE */
            //TODO:
            /*
            1. IF SLIDER VALUE LESS THAN CURRENT VALUE
               PROCDEDURE:
               1.INVERSE THE MOVES TO SLIDER VALUE 
               2.STORE THIS AS CURRENT STATE OF CUBE(TICK == SLIDER VALUE) 
            2. WHENEVER USER ENTERS SOLUTION OR SCRAMBLE WHILE THE ANIMATION IS GOING CUBE NEEDS 
               TO GO TO THE END MOVE AND THEN DO THE CHANGES FROM USER 
            
            */
            //ERROR TO BE RESOLVED :
            /*
            1. WHEN SCRAMBLE IS DELETED FIRST AND SOLUTION AFTERWARDS AND THEN SCRAMBLE IS TYPED CUBE DOESNT TO GO
            TO CORRECT POSITION
            
            */

            if (
                slider_no != MoveNum.current &&
                MoveNum.current != validateAlgs(val_soln.toString()).movesNum &&
                (play_flag == 0 || play_flag == 2) //to see if user is not playing animation
            ) {
                console.log('*787878787');
                slider_no = MoveNum.current;
                cube1.move_handler(
                    val_scra.concat(val_soln),
                    1,
                    val_scra.length,
                    MoveNum.current - 1,
                );
            }
            // if (playBtn.current ) {
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
            // }
            // if (!playBtn.current ) {
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
            // }

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
        window.addEventListener('resize', handleResize);
        start();
        // @ts-ignore
        controls.current = { start, stop };

        return () => {
            stop();
            console.log('Unmount uE1');
            window.removeEventListener('resize', handleResize);
            if (mount.current !== null) {
                // @ts-ignore
                mount.current.removeChild(renderer.domElement);
            }
            //scene.remove(cube);
        }; // @ts-ignore
    }, [props.theme]);

    return (
        <>
            <RubiksStyle ref={mount} />
        </>
    );
};

export default VirtualRubiksC;
