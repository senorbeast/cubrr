import * as THREE from 'three';
import gsap from 'gsap';
import { draw_text } from './cube_text.js';
import { animate_read } from './cube_animate_read_3';
import { scramble_read } from './cube_scramble_read';
import { fast_execute } from './cube_fast_execute.js';
import { animate_execute } from './cube_animate_execute.js';

function beg_cross(
    scene: { add: (arg0: THREE.Object3D) => void },
    meshs: string | any[],
    ctx: any,
    c: any,
    padding: any,
    renderer: any,
): void {
    var scramble = scramble_read(
        [
            'R',
            'U',
            '2',
            'F',
            "'",
            'R',
            '2',
            'B',
            'D',
            '2',
            'U',
            '2',
            'B',
            'L',
            '2',
            'R',
            '2',
            'U',
            '2',
            'B',
            '2',
            'F',
            "'",
            'U',
            'B',
            "'",
            'F',
            "'",
            'L',
            'R',
            'F',
            "'",
            'U',
            'R',
            '2',
        ],
 
        0
    );
    fast_execute(scene, meshs, padding, scramble);
    var white_edges = [4, 10, 12, 13, 14, 16, 19, 21, 22, 23, 25];
    var cube = new THREE.Object3D();
    var cross = new THREE.Object3D();
    for (var i = 0; i < white_edges.length; i++) {
        cross.attach(meshs[white_edges[i]]);
    }
    for (var j = 0; j < meshs.length; j++) {
        cube.attach(meshs[j]);
    }
    scene.add(cube);
    scene.add(cross);
    //draw_text(scene, "Lets Start", renderer, ctx, c, 1);
    var cross_time = gsap.timeline({ duration: 2, onComplete: animate_cross });
    var tween1 = gsap.to(cube.rotation, {
        x: Math.PI,
        duration: 1,
        onStart: draw_text,
        onStartParams: [scene, 'First lets scramble the cube', renderer, ctx, c, 1],
    });
    cross_time.add(tween1, 'anime1');
    for (var k = 0; k < meshs.length; k++) {
        var tween2 = gsap.to(meshs[k].material, {
            duration: 1,
            opacity: 0.1,
            onStart: draw_text,
            onStartParams: [scene, 'Lets Start', renderer, ctx, c, 1],
        });
        cross_time.add(tween2, 'anime2');
    }
    for (var p = 0; p < white_edges.length; p++) {
        var tween3 = gsap.to(meshs[white_edges[p]].material, {
            duration: 1,
            opacity: 1,
        });
        cross_time.add(tween3, 'anime3');
    }

    cross_time.play();
    function animate_cross() {
        var sol = animate_read(
            ['F', "'", 'U', "'", 'F', "'", 'L', 'R', "'", 'B', "'", 'R', 'D', "'", 'R', 'D'],
            ['F', "'", 'U', "'", 'F', "'", 'L', 'R', "'", 'B', "'", 'R', 'D', "'", 'R', 'D'],
            [],
            0,
        );
        console.log(sol);
        animate_execute(scene, meshs, sol, padding, 400, 1);
    }
}
export { beg_cross };
