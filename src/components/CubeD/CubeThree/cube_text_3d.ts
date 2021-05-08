//@ts-nocheck
import * as THREE from 'three';

function draw_text_3d(
    scene: {
        add: (arg0: THREE.Mesh<THREE.TextGeometry, THREE.MeshBasicMaterial[]>) => void;
    },
    text: string,
    ypos: number,
): void {
    const fontJson = require('./fonts/Poppins_Medium_Regular.json');
    const font = new THREE.Font(fontJson);
    var textGeo = new THREE.TextGeometry(text, {
        font,
        size: 25,
        height: 12,
        curveSegments: 12,
        bevelThickness: 0.2,
        bevelSize: 1,
        bevelEnabled: true,
    });
    var materials = [
        //@ts-ignore
        new THREE.MeshBasicMaterial({ color: '#ffffff', flatShading: false }), // front
        new THREE.MeshBasicMaterial({ color: '#fff' }), // side
    ];
    const textMesh1 = new THREE.Mesh(textGeo, materials);
    textMesh1.position.x = 100;
    textMesh1.position.y = ypos;
    textMesh1.position.z = 0;

    scene.add(textMesh1);
}
export { draw_text_3d };
