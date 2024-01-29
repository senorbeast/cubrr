// @ts-nocheck
import gsap from 'gsap';
import { Object3D } from 'three';
import { layer_group } from './cubelet_group';

var mov1 = 0;
/* FUNCTION NAME : ANIMATE_EXECUTE
   INPUT PARAMETER : scene - 3d scene
                     mesh - the mesh of all cubelets added
                     soln - the array of moves that need to be animated
                     padding - the gaps between pieces 
                     time - the time gap between each move animation
                     si_mu - 0 - single move rotation 
                             1 - multiple move rotation
    RETURN : NONE 
*/
function animate_execute(
    scene: { add: (arg0: Object3D) => void },
    mesh: any[],
    soln: string[],
    padding: number,
    time: number,
    si_mu: number,
): void {
    if (si_mu == 0) {
        rotate(scene, mesh,soln, padding, time);
    }
    if (si_mu == 1) {
        mu_rotate(scene, mesh, soln, padding, time);
    }
}

function comp(scene: any, mesh: any, soln: any, padding: any): void {
    gsap.delayedCall(0.5, comp1, [scene, mesh, soln, padding]);
}

function comp1(scene: any, mesh: any, soln: any, padding: any): void {
    mov1 = mov1 + 1;

    if (mov1 <= soln.length - 1) {
        mu_rotate(scene, mesh, soln, padding, 400);
    }
}

function rotate(
    scene: { add: any },
    mesh: any[],
    soln: string | string[],
    padding: number,
    time: number,
): void {
    time = time / 1000;

    var moves3 = soln.split('_');
    //!
    var moves1 = layer_group(scene, mesh, moves3[1], padding, Number(moves3[0]), moves3[2]);
    if (
        moves3[1] == 'U' ||
        moves3[1] == 'D' ||
        moves3[1] == 'u' ||
        moves3[1] == 'd' ||
        moves3[1] == 'y' ||
        moves3[1] == 'E'
    ) {
        gsap.to(moves1[0].rotation, {
            duration: time,
            y: moves1[0].rotation.y + moves1[2],
        });
    } else if (
        moves3[1] == 'F' ||
        moves3[1] == 'B' ||
        moves3[1] == 'f' ||
        moves3[1] == 'b' ||
        moves3[1] == 'z' ||
        moves3[1] == 'S'
    ) {
        gsap.to(moves1[0].rotation, {
            duration: time,
            z: moves1[0].rotation.z + moves1[2],
        });
    } else if (
        moves3[1] == 'R' ||
        moves3[1] == 'L' ||
        moves3[1] == 'r' ||
        moves3[1] == 'l' ||
        moves3[1] == 'x' ||
        moves3[1] == 'M'
    ) {
        gsap.to(moves1[0].rotation, {
            duration: time,
            x: moves1[0].rotation.x + moves1[2],
        });
    }
}
function mu_rotate(
    scene: { add: (arg0: Object3D) => void },
    mesh: string | any[],
    soln: string | string[],
    padding: number,
    time: number,
) {
    time = time / 1000;
    console.log(soln);
    var moves3 = soln[mov1].split('_');

    var moves1 = layer_group(scene, mesh, moves3[1], padding, Number(moves3[0]), moves3[2]);
    if (
        moves3[1] == 'U' ||
        moves3[1] == 'D' ||
        moves3[1] == 'u' ||
        moves3[1] == 'd' ||
        moves3[1] == 'y' ||
        moves3[1] == 'E'
    ) {
        gsap.to(moves1[0].rotation, {
            duration: time,
            y: moves1[0].rotation.y + moves1[2],
            onComplete: comp,
            onCompleteParams: [scene, mesh, soln, padding],
        });
    } else if (
        moves3[1] == 'F' ||
        moves3[1] == 'B' ||
        moves3[1] == 'f' ||
        moves3[1] == 'b' ||
        moves3[1] == 'z' ||
        moves3[1] == 'S'
    ) {
        gsap.to(moves1[0].rotation, {
            duration: time,
            z: moves1[0].rotation.z + moves1[2],
            onComplete: comp,
            onCompleteParams: [scene, mesh, soln, padding],
        });
    } else if (
        moves3[1] == 'R' ||
        moves3[1] == 'L' ||
        moves3[1] == 'r' ||
        moves3[1] == 'l' ||
        moves3[1] == 'x' ||
        moves3[1] == 'M'
    ) {
        gsap.to(moves1[0].rotation, {
            duration: time,
            x: moves1[0].rotation.x + moves1[2],
            onComplete: comp,
            onCompleteParams: [scene, mesh, soln, padding],
        });
    }
}

export { animate_execute };
