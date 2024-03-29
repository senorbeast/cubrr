import * as THREE from 'three';

function layer_group(
    scene: { add: any },
    mesh: any[],
    layer: string,
    padding: number,
    dir: number,
    number: number,
): (number | THREE.Object3D | THREE.Vector3)[] | undefined {
    var my_return = [];
    var v1 = new THREE.Vector3();
    var axis = new THREE.Vector3();
    var pivotD = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN D LAYER-- */
    var pivotd = new THREE.Object3D();
    var pivotU = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN U LAYER-- */
    var pivotu = new THREE.Object3D();
    var pivotF = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN F LAYER-- */
    var pivotf = new THREE.Object3D();
    var pivotB = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN B LAYER-- */
    var pivotb = new THREE.Object3D();
    var pivotR = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN R LAYER-- */
    var pivotr = new THREE.Object3D();
    var pivotL = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN L LAYER-- */
    var pivotl = new THREE.Object3D();
    var pivotM = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN MIDDLE LAYER -- */
    var pivotS = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN STANDING LAYER -- */
    var pivotE = new THREE.Object3D(); /* --USED TO GROUP CUBIES PRESENT IN EQUATORIAL LAYER -- */
    var pivotx = new THREE.Object3D();
    var pivoty = new THREE.Object3D();
    var pivotz = new THREE.Object3D();
    if (dir == 1) {
        my_return[2] = -Math.PI / 2;
    }

    if (dir == -1) {
        my_return[2] = Math.PI / 2;
    }
    if (number == 2) {
        my_return[2] = Math.PI;
    }
    if (layer == 'D') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.y) == -(50 + padding)) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotD.attach(mesh[qi]);
            }
        }

        scene.add(pivotD);
        axis = new THREE.Vector3(0, 1, 0);
        my_return[0] = pivotD;
        my_return[1] = axis;
        return my_return;
    }

    if (layer == 'U') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.y) == 50 + padding) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotU.attach(mesh[qi]);
            }
        }

        scene.add(pivotU);
        axis = new THREE.Vector3(0, 1, 0);
        my_return[0] = pivotU;
        my_return[1] = axis;
        return my_return;
    }

    if (layer == 'F') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.z) == 50 + padding) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotF.attach(mesh[qi]);
            }
        }

        scene.add(pivotF);
        axis = new THREE.Vector3(0, 0, 1);
        my_return[0] = pivotF;
        my_return[1] = axis;
        return my_return;
    }

    if (layer == 'B') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.z) == -(50 + padding)) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotB.attach(mesh[qi]);
            }
        }

        scene.add(pivotB);
        axis = new THREE.Vector3(0, 0, 1);
        my_return[0] = pivotB;
        my_return[1] = axis;
        return my_return;
    }

    if (layer == 'R') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.x) == 50 + padding) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotR.attach(mesh[qi]);
            }
        }

        scene.add(pivotR);
        axis = new THREE.Vector3(1, 0, 0);
        my_return[0] = pivotR;
        my_return[1] = axis;
        return my_return;
    }

    if (layer == 'L') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.x) == -(50 + padding)) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotL.attach(mesh[qi]);
            }
        }
        scene.add(pivotL);
        axis = new THREE.Vector3(1, 0, 0);
        my_return[0] = pivotL;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'r') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.x) != -(50 + padding)) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotr.attach(mesh[qi]);
            }
        }

        scene.add(pivotr);
        axis = new THREE.Vector3(1, 0, 0);
        my_return[0] = pivotr;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'l') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.x) != 50 + padding) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotl.attach(mesh[qi]);
            }
        }

        scene.add(pivotl);
        axis = new THREE.Vector3(1, 0, 0);
        my_return[0] = pivotl;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'u') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.y) != -(50 + padding)) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotu.attach(mesh[qi]);
            }
        }

        scene.add(pivotu);
        axis = new THREE.Vector3(0, 1, 0);
        my_return[0] = pivotu;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'd') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.y) != 50 + padding) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotd.attach(mesh[qi]);
            }
        }

        scene.add(pivotd);
        axis = new THREE.Vector3(0, 1, 0);
        my_return[0] = pivotd;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'b') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.z) != 50 + padding) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotb.attach(mesh[qi]);
            }
        }

        scene.add(pivotb);
        axis = new THREE.Vector3(0, 0, 1);
        my_return[0] = pivotb;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'f') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.z) != -(50 + padding)) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotf.attach(mesh[qi]);
            }
        }

        scene.add(pivotf);
        axis = new THREE.Vector3(0, 0, 1);
        my_return[0] = pivotf;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'x') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
            pivotx.attach(mesh[qi]);
        }

        scene.add(pivotx);
        axis = new THREE.Vector3(1, 0, 0);
        my_return[0] = pivotx;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'y') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
            pivoty.attach(mesh[qi]);
        }

        scene.add(pivoty);
        axis = new THREE.Vector3(0, 1, 0);
        my_return[0] = pivoty;
        my_return[1] = axis;
        return my_return;
    }
    if (layer == 'z') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
            pivotz.attach(mesh[qi]);
        }

        scene.add(pivotz);
        axis = new THREE.Vector3(0, 0, 1);
        my_return[0] = pivotz;
        my_return[1] = axis;
        return my_return;
    }

    if (layer == 'M') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.x * 100) / 100 == 0) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotM.attach(mesh[qi]);
            }
        }
        scene.add(pivotM);
        axis = new THREE.Vector3(1, 0, 0);
        my_return[0] = pivotM;
        my_return[1] = axis;
        return my_return;
    }

    if (layer == 'S') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.z * 100) / 100 == 0) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotS.attach(mesh[qi]);
            }
        }
        scene.add(pivotS);
        axis = new THREE.Vector3(0, 0, 1);
        my_return[0] = pivotS;
        my_return[1] = axis;
        return my_return;
    }

    if (layer == 'E') {
        for (var qi = 0; qi < 27; qi++) {
            mesh[qi].getWorldPosition(v1);

            if (Math.round(v1.y * 100) / 100 == 0) {
                //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
                pivotE.attach(mesh[qi]);
            }
        }
        scene.add(pivotE);
        axis = new THREE.Vector3(0, 1, 0);
        my_return[0] = pivotE;
        my_return[1] = axis;
        return my_return;
    }
    return my_return;
}

export { layer_group };
