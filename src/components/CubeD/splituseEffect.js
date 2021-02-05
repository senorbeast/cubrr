import React, {
    Component,
    useLayoutEffect,
    useState,
    useEffect,
    useRef,
} from "react";
import ReactDOM from "react-dom";
import createjs from "createjs-module";
import { TrialStyle } from "./CubeElements";
import gsap from "gsap";
import * as themes from "../themes";

// import Stats from '/jsm/libs/stats.module.js';
import { animation_sequence } from "./cube_animation_sequence.js";
import { beg_cross } from "./cube_beg_cross.js";
import { cubelets_form } from "./cubelets.js";
import { fast_execute } from "./cube_fast_execute.js";
import { cube_color } from "./cubelet_colors.js";
import { layer_group } from "./cubelet_group.js";
import { animate_execute } from "./cube_animate_execute.js";
import { draw_text } from "./cube_text.js";
import { face_plane_make } from "./cube_face_plane.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// /import Stats from '/jsm/libs/stats.module.js';
import * as THREE from "three";
import { scramble_read } from "./cube_scramble_read_v3";

export const Trial = (props) => {
    const mount = useRef(null);
    const [mounted, setmounted] = useState(true);
    const playBtn = useRef(props.play);
    const [plays, setPlay] = useState(0);

    console.log("rendered", props.play);
    let camera = undefined;
    let renderer = undefined;
    let scene = undefined;
    let meshs = undefined;
    let ctx = undefined;
    let c = undefined;
    let padding = undefined;
    let play = props.play;
    const renderScene = () => {
        renderer.render(scene, camera);
    };

    useEffect(() => {
        let width = mount.current.clientWidth;
        let height = mount.current.clientHeight;
        var raycaster = new THREE.Raycaster(); //raycaster object
        var mouse = new THREE.Vector2(); //to get the location of mouse
        scene = new THREE.Scene();
        /* variables to create color */
        var flag = 1;
        mouse.x = 100;
        mouse.y = 100;
        meshs = [];

        var core = [];
        var ret = [];
        var face_plane = [];

        //   let mapDimensions = this.mount.getBoundingClientRect();
        //   let width = this.mount.clientWidth;
        //   let height = this.mount.clientHeight;
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
        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setClearColor(themes[props.theme].primary);
        renderer.setSize(width, height, true);
        //mount.current.appendChild(renderer.domElement);
        var anisotropy = renderer.capabilities.getMaxAnisotropy();
        var mov1 = 0;
        var moves = [];
        var moves6 = [];
        var moves_sol = [];
        var url_scra1 = "a";
        var url_soln1 = "a";
        var scramble = [];
        var soln = [];
        var cube = [];
        var current_move = [];
        var current_soln = [];
        var cube_sol = [];
        var scramble_state = [];
        var play = "false";
        const MathUtils = {
            DEG2RAD: function (deg) {
                return (Math.PI / 180) * deg;
            },

            lerp: function (x, y, t) {
                return (1 - t) * x + t * y;
            },
        };
        var pad = 5;
        // gap between the layers
        padding = pad;
        // radius of the fillet used on corners of cube
        c = document.createElement("canvas");
        ctx = c.getContext("2d");
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
            //making cubelets
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
        meshs = ret[0]; //27 cubelets
        core = ret[1]; //core
        face_plane = ret[2]; //Letters
        cube_color(meshs); //color

        const handleResize = () => {
            width = mount.current.clientWidth;
            height = mount.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderScene();
        };

        mount.current.appendChild(renderer.domElement);
        setmounted(true);
        console.log("UseEffect 1 ", "Play =", props.play, "Mounted=", mounted);
        return () => {
            //Cleanup Code
            setmounted((prev) => {
                !prev;
            });
            console.log(
                "UseEffect 1 Cleanup ",
                "Play =",
                props.play,
                "Mounted=",
                mounted
            );
            window.removeEventListener("resize", handleResize);
            if (mount.current !== null) {
                mount.current.removeChild(renderer.domElement);
            }
            //scene.remove(cube);
        };
    }, [props.theme, props.width, props.height]);

    useEffect(() => {
        console.log("UseEffect 2 ", "Play =", props.play, "Mounted=", mounted);
        if (mounted) {
            var animation_flag = 0;
            let frameId;
            var controls = new OrbitControls(camera, renderer.domElement);

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
                    if (scramble.length > cube.length) {
                        console.log(scramble);
                        moves = scramble_read(current_move, scramble, cube, 0);
                        console.log(moves);

                        fast_execute(scene, meshs, padding, moves);
                        cube = scramble;
                    }

                    if (soln.length > cube_sol.length) {
                        moves6 = scramble_read(current_soln, soln, cube_sol, 0);
                        console.log(moves6);
                        cube_sol = soln;
                        fast_execute(scene, meshs, padding, moves6);
                    }
                }
                if (animation_flag == 0) {
                    var myvar;
                    camera.position.x = 300;
                    camera.position.y = 200;
                    camera.position.z = 1000;
                    myvar = setTimeout(
                        beg_cross(scene, meshs, ctx, c, padding, renderer),
                        1500
                    );
                    // const line2 = setTimeout(draw_text(scene,"Nobista", renderer) ,2500)
                    animation_flag = 1;
                }
                if (play == "true") {
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
                if (play == "false") {
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
            controls.current = { start, stop };
            start();
        }
        //window.addEventListener("resize", handleResize);

        return () => {
            stop();
            console.log(
                "UseEffect 2 cleanup",
                "Play =",
                props.play,
                "Mounted=",
                mounted
            );
            //window.removeEventListener("resize", handleResize);
            //scene.remove(cube);

            // if (mount.current !== null) {
            //     mount.current.removeChild(renderer.domElement);
            // }
        };
    }, [mounted, props.theme, props.width, props.height, props.play]);
    return (
        <>
            <TrialStyle ref={mount} />
        </>
    );
};

export default Trial;
