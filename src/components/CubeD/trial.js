import React, { Component, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import createjs from "../../../node_modules/createjs-module/createjs";
import { TrialStyle } from "./CubeElements";
import gsap from "gsap";

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
        var raycaster = new THREE.Raycaster(); //raycaster object
        var mouse = new THREE.Vector2(); //to get the location of mouse
        var scene = new THREE.Scene();
        /* variables to create color */
        var black = new THREE.Color("#000000");
        var white = new THREE.Color("#FFFFFF");
        var base = new THREE.Color("#E9EBB3");
        var yellow = new THREE.Color("#F3FF00");
        var red = new THREE.Color("#FF5733");
        var orange = new THREE.Color("#FFAE00");
        var blue = new THREE.Color("#5DADE2");
        var green = new THREE.Color("#2ECC71");
        mouse.x = 100;
        mouse.y = 100;
        var meshs = [];
        var fl = 0;

        /* setting the position of camera */

        /* Setting the position and size of render*/
        let width = this.mount.clientWidth;
        let height = this.mount.clientHeight;
        var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
        camera.position.z = 3;
        camera.position.y = 1;
        camera.position.x = 0;
        camera.lookat = (0, 0, 0);
        //let width = this.props.width * 0.606;
        //let height = this.props.height * 0.606;
        let mapDimensions = this.mount.getBoundingClientRect();

        console.log("Width", width, "height", height, mapDimensions);
        /* adding webgl renderer */
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor("#3e3f42");
        renderer.setSize(width, height);

        // this.camera = new THREE.PerspectiveCamera(
        //     75,
        //     mapDimensions.width / mapDimensions.height,
        //     0.1,
        //     1000
        //);
        // renderer.setSize(mapDimensions.width, mapDimensions.height);
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild(renderer.domElement);
        /* Setting the position and size of render*/

        var controls = new OrbitControls(camera, renderer.domElement);
        var layer_arr = [];
        var meshs1 = [];
        var F = [6, 7, 8, 15, 16, 17, 24, 25, 26];
        var B = [0, 1, 2, 9, 10, 11, 18, 19, 20];
        var L = [0, 3, 6, 9, 12, 15, 18, 21, 24];
        var R = [2, 5, 8, 11, 14, 17, 20, 23, 26];
        var U = [18, 19, 20, 21, 22, 23, 24, 25, 26];
        var D = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        var fl = 0;
        var pivot = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN D LAYER-- */
        var pivot1 = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN U LAYER-- */
        var pivot2 = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN F LAYER-- */
        var pivot3 = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN B LAYER-- */
        var pivot4 = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN R LAYER-- */
        var pivot5 = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN L LAYER-- */
        var pivotm = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN MIDDLE LAYER -- */
        var pivots = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN STANDING LAYER -- */
        var pivote = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN EQUATORIAL LAYER -- */
        var ei = 0;
        var co = 0;
        var v1 = new THREE.Vector3();
        var gf = 0;
        var gd = 0;
        var ge = 0;
        var fe = 0;
        var gg = 0;
        var fd = 0;
        var td = 0;
        var td1 = 0;
        var current_cube = [];
        var url_scra1 = "a";
        var todo_moves = [];
        var mov1 = 0;
        var scramble_timeline = gsap.timeline({ defaults: { duration: 0.3 } });
        var rd = 0;
        var ru = 0;
        var rf = 0;
        var rb = 0;
        var rr = 0;
        var rl = 0;

        const MathUtils = {
            DEG2RAD: function (deg) {
                return (Math.PI / 180) * deg;
            },

            lerp: function (x, y, t) {
                return (1 - t) * x + t * y;
            },
        };
        var pad = 4;
        // gap between the layers
        var padding = pad / 100;
        // radius of the fillet used on corners of cube
        var settings = {
            radius: { value: 0.06 },
        };
        //loader used for texture
        var loader = new THREE.CubeTextureLoader();
        loader.setCrossOrigin("");
        loader.setPath("https://threejs.org/examples/textures/cube/pisa/");
        function init() {
            /* ---CREATION OF RUBIKS CUBE--- */
            var space, spacex, spacey;
            var light = new THREE.AmbientLight(0xffffff, 1);
            scene.add(light);
            var light2 = new THREE.PointLight(0xffffff, 0.5);
            scene.add(light2);

            for (var i = 0; i < 3; i++) {
                spacey = (0.5 + padding) * i;
                for (var j = 0; j < 3; j++) {
                    space = (0.5 + padding) * j;
                    for (var k = 0; k < 3; k++) {
                        //mesh created for every cube
                        var cube2 = new THREE.Mesh(
                            new THREE.BoxGeometry(0.5, 0.5, 0.5),
                            new THREE.MeshBasicMaterial({
                                color: 0xffffff,
                                wireframe: false,
                                skinning: true,
                                vertexColors: THREE.FaceColors,
                            })
                        );
                        spacex = (0.5 + padding) * k;

                        // setting position of rubiks in the scene
                        cube2.position.set(
                            -(0.5 + padding) + spacex,
                            -(0.5 + padding) + spacey,
                            -(0.5 + padding) + space
                        );
                        cube2.updateMatrixWorld(true);
                        cube2.matrixAutoUpdate = true;
                        scene.add(cube2);
                        meshs.push(cube2);

                        //this is made true so that we can add colours
                        cube2.material.vertexColors = true;
                        cube2.geometry.verticesNeedUpdate = true;
                    }
                }
                spacey = spacey + 1;
            }

            /* ---ADDITION OF COLOUS TO EVERY SIDE OF THE CUBE---- */

            //BASE COLUR
            for (var i = 0; i < 27; i++) {
                for (var j = 0; j < 12; j++) {
                    meshs[i].geometry.faces[j].color = black;
                }
            }
            for (var b = 0; b < B.length; b++) {
                meshs[B[b]].geometry.faces[11].color = blue;
                meshs[B[b]].geometry.faces[10].color = blue;
                //meshs[9].geometry.faces[11].color = yellow;
            }
            for (var l = 0; l < L.length; l++) {
                meshs[L[l]].geometry.faces[2].color = orange;
                meshs[L[l]].geometry.faces[3].color = orange;
            }
            for (var r = 0; r < R.length; r++) {
                meshs[R[r]].geometry.faces[0].color = red;
                meshs[R[r]].geometry.faces[1].color = red;
            }
            for (var u = 0; u < U.length; u++) {
                meshs[U[u]].geometry.faces[4].color = white;
                meshs[U[u]].geometry.faces[5].color = white;
            }
            for (var d = 0; d < D.length; d++) {
                meshs[D[d]].geometry.faces[6].color = yellow;
                meshs[D[d]].geometry.faces[7].color = yellow;
            }
            for (var f = 0; f < F.length; f++) {
                meshs[F[f]].geometry.faces[8].color = green;
                meshs[F[f]].geometry.faces[9].color = green;
            }

            /* --EVENT LISTENER FOR KEY PRESS-- */
            window.addEventListener("keypress", event);
        }

        /* --ASSIGNING KEYS TO THEIR RESPECTIVE LAYERS-- */
        function event(key) {
            //TIME GAP CALCULATION OF KEY PRESS SO THAT CONTINOUS PRESS IS DETECTED SINCE THIS CAN LEAD TO INDEFINITE ROTATION OF LAYER
            td = Math.abs(key.timeStamp - td1);
            if (td > 0.5) {
                if (key.keyCode == "118") {
                    layer_rotate(-1, "D", 1);
                }

                if (key.keyCode == "99") {
                    layer_rotate(1, "D", 1);
                }
                if (key.keyCode == "103") {
                    layer_rotate(-1, "R", 1);
                }
                if (key.keyCode == "102") {
                    layer_rotate(1, "R", 1);
                }

                if (key.keyCode == "119") {
                    layer_rotate(-1, "L", 1);
                }
                if (key.keyCode == "97") {
                    layer_rotate(1, "L", 1);
                }
                if (key.keyCode == "115") {
                    layer_rotate(-1, "F", 1);
                }
                if (key.keyCode == "100") {
                    layer_rotate(1, "F", 1);
                }
                if (key.keyCode == "122") {
                    layer_rotate(-1, "B", 1);
                }
                if (key.keyCode == "120") {
                    layer_rotate(1, "B", 1);
                }
                if (key.keyCode == "114") {
                    layer_rotate(-1, "U", 1);
                }
                if (key.keyCode == "101") {
                    layer_rotate(1, "U", 1);
                }
                if (key.keyCode == "109") {
                    layer_rotate(1, "M", 1);
                }
                if (key.keyCode == "108") {
                    layer_rotate(-1, "M", 1);
                }
                if (key.keyCode == "110") {
                    layer_rotate(1, "S", 1);
                }
                if (key.keyCode == "107") {
                    layer_rotate(-1, "S", 1);
                }
                if (key.keyCode == "98") {
                    layer_rotate(1, "E", 1);
                }
                if (key.keyCode == "106") {
                    layer_rotate(-1, "E", 1);
                }
            }
            td1 = key.timeStamp;
        }

        /* --THIS FUNCTION OVERSEES ROTATION OF LAYER BY TAKING 2 ARGUEMENTS NAME OF LAYER AND DIRECTION TO BE ROTATED-- */
        function layer_rotate(dir, layer, number) {
            var qi;
            var qf1 = 0;

            /*--FOR LAYER D-- */
            if (layer == "D") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.y * 100) / 100 == -(0.5 + padding)) {
                        layer_arr[qf1] = qi;
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivot.attach(meshs[qi]);
                        qf1 += 1;
                    }
                }
                scene.add(pivot);
                /* --ANTICLOCKWISE-- */
                if (number == 1) {
                    //console.log("D", pivot);
                    if (dir == -1) {
                        // createjs.Tween.get(pivot.rotation).to( { y: pivot.rotation.y + Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        scramble_timeline.to(pivot.rotation, {
                            y: pivot.rotation.y + Math.PI / 2,
                        });
                        pivot.updateMatrixWorld();
                        fd = 1;
                        rd = rd + Math.PI / 2;
                    }
                    /* --CLOCKWISE-- */
                    if (dir == 1) {
                        // createjs.Tween.get(pivot.rotation).to( { y: pivot.rotation.y - Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        scramble_timeline.to(pivot.rotation, {
                            y: pivot.rotation.y - Math.PI / 2,
                        });
                        pivot.updateMatrixWorld();
                        fe = 1;
                        rd = rd - Math.PI / 2;
                    }
                }
                if (number == 2) {
                    scramble_timeline.to(pivot.rotation, {
                        y: pivot.rotation.y + Math.PI,
                    });
                    pivot.updateMatrixWorld();
                    fe = 10;
                    rd = rd + Math.PI;
                }
            } else if (layer == "U") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.y * 100) / 100 == 0.5 + padding) {
                        layer_arr[qf1] = qi;
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivot1.attach(meshs[qi]);
                        qf1 += 1;
                    }
                }
                scene.add(pivot1);
                /* --ANTICLOCKWISE-- */
                if (number == 1) {
                    if (dir == -1) {
                        // createjs.Tween.get(pivot1.rotation).to( { y: pivot1.rotation.y + Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        scramble_timeline.to(pivot1.rotation, {
                            y: ru + Math.PI / 2,
                        });
                        pivot1.updateMatrixWorld();
                        fd = 2;
                        ru = ru + Math.PI / 2;
                    }
                    /* --CLOCKWISE-- */
                    if (dir == 1) {
                        //  createjs.Tween.get(pivot1.rotation).to( { y: pivot1.rotation.y - Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        scramble_timeline.to(pivot1.rotation, {
                            y: ru - Math.PI / 2,
                        });
                        pivot1.updateMatrixWorld();
                        fe = 2;
                        ru = ru + Math.PI / 2;
                    }
                }
                if (number == 2) {
                    scramble_timeline.to(pivot1.rotation, { y: ru + Math.PI });
                    //  createjs.Tween.get(pivot1.rotation).to( { y: pivot1.rotation.y + Math.PI } , 0.5 , createjs.Ease.linear).call(Complete)
                    fe = 11;
                    ru = ru + Math.PI;
                }
            } else if (layer == "F") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.z * 100) / 100 == 0.5 + padding) {
                        layer_arr[qf1] = qi;
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivot2.attach(meshs[qi]);
                        qf1 += 1;
                    }
                }
                scene.add(pivot2);
                /* --ANTICLOCKWISE-- */
                if (number == 1) {
                    if (dir == -1) {
                        // createjs.Tween.get(pivot2.rotation).to( { z: pivot2.rotation.z - Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        scramble_timeline.to(pivot2.rotation, {
                            z: rf + Math.PI / 2,
                        });
                        pivot2.updateMatrixWorld();
                        fd = 3;
                        rf = rf + Math.PI / 2;
                    }
                    /* --CLOCKWISE-- */
                    if (dir == 1) {
                        scramble_timeline.to(pivot2.rotation, {
                            z: rf - Math.PI / 2,
                        });
                        // createjs.Tween.get(pivot2.rotation).to( { z: pivot2.rotation.z + Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        pivot2.updateMatrixWorld();
                        fe = 3;
                        rf = rf - Math.PI / 2;
                    }
                }
                if (number == 2) {
                    scramble_timeline.to(pivot2.rotation, { z: rf + Math.PI });
                    // createjs.Tween.get(pivot2.rotation).to( { z: pivot2.rotation.z + Math.PI } , 0.5 , createjs.Ease.linear).call(Complete)
                    pivot2.updateMatrixWorld();
                    fe = 12;
                    rf = rf + Math.PI;
                }
            } else if (layer == "B") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.z * 100) / 100 == -(0.5 + padding)) {
                        layer_arr[qf1] = qi;
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivot3.attach(meshs[qi]);
                        qf1 += 1;
                    }
                }
                scene.add(pivot3);
                /* --ANTICLOCKWISE-- */
                if (number == 1) {
                    if (dir == -1) {
                        scramble_timeline.to(pivot3.rotation, {
                            z: rb - Math.PI / 2,
                        });
                        // createjs.Tween.get(pivot3.rotation).to( { z: pivot3.rotation.z - Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        pivot3.updateMatrixWorld();
                        fd = 4;
                        rb = rb - Math.PI / 2;
                    }
                    /* --CLOCKWISE-- */
                    if (dir == 1) {
                        scramble_timeline.to(pivot3.rotation, {
                            z: rb + Math.PI / 2,
                        });
                        // createjs.Tween.get(pivot3.rotation).to( { z: pivot3.rotation.z + Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        pivot3.updateMatrixWorld();
                        fe = 4;
                        rb = rb + Math.PI / 2;
                    }
                }
                if (number == 2) {
                    scramble_timeline.to(pivot3.rotation, { z: rb + Math.PI });
                    // createjs.Tween.get(pivot3.rotation).to( { z: pivot3.rotation.z + Math.PI } , 0.5 , createjs.Ease.linear).call(Complete)
                    pivot3.updateMatrixWorld();
                    fe = 13;
                    rb = rb + Math.PI;
                }
            } else if (layer == "R") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.x * 100) / 100 == 0.5 + padding) {
                        //console.log(qi);
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivot4.attach(meshs[qi]);
                        qf1 += 1;
                        //console.log(pivot4);
                    }
                }
                scene.add(pivot4);

                /* --ANTICLOCKWISE-- */
                if (number == 1) {
                    //console.log("R", pivot4);

                    if (dir == -1) {
                        scramble_timeline.to(pivot4.rotation, {
                            x: pivot4.rotation.x + Math.PI / 2,
                        });
                        // createjs.Tween.get(pivot4.rotation).to( { x: pivot4.rotation.x + Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)

                        pivot4.updateMatrixWorld();
                        fd = 5;
                        rr = rr + Math.PI / 2;
                    }
                    /* --CLOCKWISE-- */
                    if (dir == 1) {
                        scramble_timeline.to(pivot4.rotation, {
                            x: pivot4.rotation.x - Math.PI / 2,
                        });
                        // createjs.Tween.get(pivot4.rotation).to( { x: pivot4.rotation.x - Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        pivot4.updateMatrixWorld();
                        fe = 5;
                        rr = rr - Math.PI / 2;
                    }
                }

                if (number == 2) {
                    scramble_timeline.to(pivot4.rotation, {
                        x: pivot4.rotation.x + Math.PI,
                    });
                    // createjs.Tween.get(pivot4.rotation).to( { x: pivot4.rotation.x + Math.PI } , 0.5 , createjs.Ease.linear).call(Complete)
                    pivot4.updateMatrixWorld();
                    fe = 14;
                    rr = rr + Math.PI;
                }
            } else if (layer == "L") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.x * 100) / 100 == -(0.5 + padding)) {
                        layer_arr[qf1] = qi;
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivot5.attach(meshs[qi]);
                        qf1 += 1;
                    }
                }
                scene.add(pivot5);
                /* --ANTICLOCKWISE-- */
                if (number == 1) {
                    if (dir == -1) {
                        scramble_timeline.to(pivot5.rotation, {
                            x: rl + Math.PI / 2,
                        });
                        // createjs.Tween.get(pivot5.rotation).to( { x: pivot5.rotation.x + Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        pivot5.updateMatrixWorld();
                        fd = 6;
                        rl = rl + Math.PI / 2;
                    }
                    /* --CLOCKWISE-- */
                    if (dir == 1) {
                        scramble_timeline.to(pivot5.rotation, {
                            x: rl - Math.PI / 2,
                        });
                        //  createjs.Tween.get(pivot5.rotation).to( { x: pivot5.rotation.x - Math.PI/2 } , 0.5 , createjs.Ease.linear).call(Complete)
                        pivot5.updateMatrixWorld();
                        fe = 6;
                        rl = rl - Math.PI / 2;
                    }
                }

                if (number == 2) {
                    scramble_timeline.to(pivot5.rotation, { x: rl + Math.PI });
                    //  createjs.Tween.get(pivot5.rotation).to( { x: pivot5.rotation.x + Math.PI } , 0.5 , createjs.Ease.linear).call(Complete)
                    pivot5.updateMatrixWorld();
                    fe = 15;
                    rl = rl + Math.PI;
                }
            } else if (layer == "M") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.x * 100) / 100 == 0) {
                        layer_arr[qf1] = qi;
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivotm.attach(meshs[qi]);
                        qf1 += 1;
                    }
                }
                scene.add(pivotm);
                /* --ANTICLOCKWISE-- */
                if (dir == -1) {
                    createjs.Tween.get(pivotm.rotation)
                        .to(
                            { x: pivotm.rotation.x - Math.PI / 2 },
                            0.5,
                            createjs.Ease.linear
                        )
                        .wait(0.5);
                    pivotm.updateMatrixWorld();
                    fd = 7;
                }
                /* --CLOCKWISE-- */
                if (dir == 1) {
                    createjs.Tween.get(pivotm.rotation)
                        .to(
                            { x: pivotm.rotation.x + Math.PI / 2 },
                            0.5,
                            createjs.Ease.linear
                        )
                        .wait(0.5);
                    pivotm.updateMatrixWorld();
                    fe = 7;
                }
            } else if (layer == "S") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.z * 100) / 100 == 0) {
                        layer_arr[qf1] = qi;
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivots.attach(meshs[qi]);
                        qf1 += 1;
                    }
                }
                scene.add(pivots);
                /* --ANTICLOCKWISE-- */
                if (dir == -1) {
                    createjs.Tween.get(pivots.rotation).to(
                        { z: pivots.rotation.z - Math.PI / 2 },
                        0.5,
                        createjs.Ease.linear
                    );
                    pivots.updateMatrixWorld();
                    fd = 8;
                }
                /* --CLOCKWISE-- */
                if (dir == 1) {
                    createjs.Tween.get(pivots.rotation).to(
                        { z: pivots.rotation.z + Math.PI / 2 },
                        0.5,
                        createjs.Ease.linear
                    );
                    pivots.updateMatrixWorld();
                    fe = 8;
                }
            } else if (layer == "E") {
                for (var qi = 0; qi < 27; qi++) {
                    meshs[qi].getWorldPosition(v1);

                    if (Math.round(v1.y * 100) / 100 == 0) {
                        layer_arr[qf1] = qi;
                        //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                        pivote.attach(meshs[qi]);
                        qf1 += 1;
                    }
                }
                scene.add(pivote);
                /* --ANTICLOCKWISE-- */
                if (dir == -1) {
                    createjs.Tween.get(pivote.rotation).to(
                        { y: pivote.rotation.y - Math.PI / 2 },
                        0.5,
                        createjs.Ease.linear
                    );
                    pivote.updateMatrixWorld();
                    fd = 9;
                }
                /* --CLOCKWISE-- */
                if (dir == 1) {
                    createjs.Tween.get(pivote.rotation).to(
                        { y: pivote.rotation.y + Math.PI / 2 },
                        0.5,
                        createjs.Ease.linear
                    );
                    pivote.updateMatrixWorld();
                    fe = 9;
                }
            }
            ////console.log(v2)
        }

        window.addEventListener(
            "resize",
            () => {
                camera.aspect = 2 / 1;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
                console.log("Yoooo", width, height);
                render();
            },
            true
        );

        //const stats = Stats();
        //document.body.appendChild(stats.dom);
        /* --THIS STOPS THE CODE FOR N milliseconds WHICH HELPS US GIVE A SENSE OF MOTION DURING ROTATION OF LAYERS -- */
        // function sleep(milliseconds) {
        //   const date = Date.now();
        //   let currentDate = null;
        //   do {
        //     currentDate = Date.now();
        //   } while (currentDate - date < milliseconds);
        // }
        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if (new Date().getTime() - start > milliseconds) {
                    break;
                }
            }
        }
        function onDocumentMouseMove(event) {
            event.preventDefault();
            //groupU.rotateY(1.5707963268 );
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        function user_rotate(moves) {
            ////console.log(moves);

            while (mov1 <= moves.length - 1) {
                var num = moves[mov1];
                var num1 = num.split("_");
                layer_rotate(Number(num1[0]), num1[1], num1[2]);
                mov1 = mov1 + 1;
            }

            if (mov1 == moves.length) {
                current_cube = url_scra1.split("");
                mov1 = 0;
            }
        }
        // function mkc_rotate(moves1)
        // {
        //   var num = moves1[mov1]
        //   var num1 = num.split("_")
        //   layer_rotate( num1[0] , num1[1] , num1[2] )
        //   mov1 = mov1 + 1

        //   if( mov1 == moves1.length )
        //     {
        //       ////console.log("duc")
        //       mov1 = 0
        //       current_cube = url_scra1.split('')

        //     }
        // }
        function compare(url, cube, but) {
            ////console.log("url", url);
            ////console.log("cur", cube);
            if (but == 1) {
                var kl = 0;
                var cube_play = [];
                for (var k = 0; k < cube.length; k++) {
                    if (cube[k] == "'" || cube[k] == "2") {
                        cube_play[kl] = cube[k - 1] + cube[k];
                        kl = kl + 1;
                    } else {
                        cube_play[kl] = cube[k];
                        kl = kl + 1;
                    }
                }
                ////console.log("button", cube_play);
            }
            if (
                url.length > cube.length &&
                scramble_timeline.isActive() == false
            ) {
                // //console.log(cube.length)
                var current_move = url.slice(cube.length);

                user_rotate(scramble_read(current_move, url, cube, but));
            }
        }
        function animate() {
            var layer_li = [
                "D",
                "U",
                "F",
                "B",
                "R",
                "L",
                "M",
                "S",
                "E",
                "D2",
                "U2",
                "F2",
                "B2",
                "R2",
                "L2",
            ];
            requestAnimationFrame(animate);

            var currentURL = window.location.href;
            var scramble_arr = currentURL.split("?");
            if (scramble_arr.length == 3) {
                var scramble = scramble_arr[1].split("=");

                var button = scramble_arr[2].split("=");
                var url_scramble = scramble[1].replace(/%20/g, "");
                url_scra1 = url_scramble.replace(/%27/g, "'");
                compare(url_scra1.split(""), current_cube, button[1]);
            }

            controls.update();

            render();

            //stats.update();
        }

        function render() {
            raycaster.setFromCamera(mouse, camera);

            renderer.render(scene, camera);
        }

        init();
        animate();
    }
    render() {
        return (
            <>
                <TrialStyle ref={(ref) => (this.mount = ref)} />
                <h1>Refresh when this changes {this.props.refreshValue}</h1>
            </>
        );
    }
}
export default Trial;
