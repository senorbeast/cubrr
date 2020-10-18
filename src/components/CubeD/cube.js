import React, { Component } from "react";
import * as THREE from "three";
import { init, animate } from "./cube_v3";
//const OrbitControls = require("three-orbit-controls")(THREE);

class CubeD extends Component {
    componentDidMount() {
        // === THREE.JS CODE START ===
        init();
        animate();
        // === THREE.JS EXAMPLE CODE END ===
    }
    render() {
        return <div />;
    }
}
export default CubeD;
