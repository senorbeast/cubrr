import * as THREE from "three";
import canvasTxt from 'canvas-txt'
function draw_text(scene , text , renderer)
{
    const guide_text = document.createElement("canvas").getContext("2d");
    guide_text.font = "800 95px Courier New";
    guide_text.fillStyle = 'white';
    guide_text.fillText("Welcome cubers",0, 100,500);
    let guide_text_1 = new THREE.CanvasTexture(guide_text.canvas);
    guide_text_1.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const geometry = new THREE.PlaneGeometry(120, 120, 0);
    const material = new THREE.MeshBasicMaterial({ color: "#fff", side: THREE.DoubleSide, transparent: true, opacity: 1 });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.set(150, 120,-100)
    plane.material.map = guide_text_1
    scene.add(plane)
}
export{draw_text}