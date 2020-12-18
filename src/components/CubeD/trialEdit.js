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

// import Stats from '/jsm/libs/stats.module.js';
import { animation_sequence } from "./cube_animation_sequence.js";
import { cubelets_form } from "./cubelets.js";
import { fast_execute } from "./cube_fast_execute.js";
import { cube_color } from "./cubelet_colors.js";
import { layer_group } from "./cubelet_group.js";
import { animate_execute } from "./cube_animate_execute.js";
import { face_plane_make } from "./cube_face_plane.js";
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
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}

export const Trial = () => {
    const mount = useRef(null);
    const [isAnimating, setAnimating] = useState(true);
    const controls = useRef(null);
    const [width, height] = useWindowSize();

    useEffect(() => {
        let width = mount.current.clientWidth;
        let height = mount.current.clientHeight;
        let frameId;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
        const cube = new THREE.Mesh(geometry, material);

        camera.position.z = 4;
        scene.add(cube);
        renderer.setClearColor("#000000");
        renderer.setSize(width, height);

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

        const animate = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

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

        mount.current.appendChild(renderer.domElement);
        window.addEventListener("resize", handleResize);
        start();

        controls.current = { start, stop };

        return () => {
            stop();
            window.removeEventListener("resize", handleResize);
            mount.current.removeChild(renderer.domElement);

            scene.remove(cube);
            geometry.dispose();
            material.dispose();
        };
    });

    useEffect(() => {
        if (isAnimating) {
            controls.current.start();
        } else {
            controls.current.stop();
        }
    }, [isAnimating]);
    return (
        <>
            <TrialStyle
                ref={mount}
                onClick={() => setAnimating(!isAnimating)}
            />
        </>
    );
};

export default Trial;
