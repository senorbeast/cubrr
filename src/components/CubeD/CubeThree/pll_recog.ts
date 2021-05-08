// @ts-nocheck
import THREE from 'three';
import { fast_execute } from './cube_fast_execute.js';

export function pll_recog(scene: { add: any }, meshs: string | any[], pll_color: any) {
    var pll_vec = new THREE.Vector3();
    var pll_side = new THREE.Object3D();
    switch (plll_color) {
        case YELLOW:
            fast_execute(scene, meshs, padding, ['1_x_2']);

            // code block
            break;
        case BLUE:
            fast_execute(scene, meshs, padding, ['-1_x_1']);
            // code block
            break;
        case GREEN:
            fast_execute(scene, meshs, padding, ['1_x_1']);
            // code block
            break;
        case ORANGE:
            fast_execute(scene, meshs, padding, ['1_y_1']);
            // code block
            break;
        case RED:
            fast_execute(scene, meshs, padding, ['-1_y_1']);
            // code block
            break;
        default:
        // code block
    }
    for (var qi = 0; qi < 27; qi++) {
        meshs[qi].getWorldPosition(v1);
        if (Math.round(v1.y) == 50 + padding) {
            //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
            pll_side.attach(meshs[qi]);
        }
    }
    scene.add(pll_side);
}
