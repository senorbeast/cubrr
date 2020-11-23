import * as THREE from "three";


function cubelets_form(scene, size, padding, texture) {

    var meshs = []

    for (var i = 0; i < 3; i++) {
        spacey = (50 + padding) * i;
        for (var j = 0; j < 3; j++) {

            space = (50 + padding) * j;
            for (var k = 0; k < 3; k++) {
                //mesh created for every cube
                if (i == 2 && j == 1 && k == 1) {
                    const materials =
                        [

                            new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false, vertexColors: THREE.FaceColors, transaprent: true, opacity: 1 }),
                            new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false, vertexColors: THREE.FaceColors, transaprent: true, opacity: 1 }),
                            new THREE.MeshBasicMaterial({ map: texture, transparent1: true, opacity: 1 }),
                            new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false, vertexColors: THREE.FaceColors, transaprent: true, opacity: 1 }),
                            new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false, vertexColors: THREE.FaceColors, transaprent: true, opacity: 1 }),

                            new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false, vertexColors: THREE.FaceColors, transaprent: true, opacity: 1 }),

                        ];

                    var cube2 = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), materials);

                }
                else if (i == 1 && j == 1 && k == 1) {
                    var cube2 = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false, skinning: true, vertexColors: THREE.FaceColors, transparent: true, opacity: 0, side: THREE.DoubleSide }));

                }

                else {
                    var cube2 = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false, skinning: true, vertexColors: THREE.FaceColors, transparent: true, opacity: 1, side: THREE.DoubleSide }));

                }


                scene.add(cube2);

                var space, spacex, spacey;
                spacex = (50 + padding) * k;
                // setting position of rubiks in the scene
                cube2.position.set(-(50 + padding) + spacex, -(50 + padding) + spacey, -(50 + padding) + space);
                cube2.updateMatrixWorld(true)
                cube2.matrixAutoUpdate = true;

                meshs.push(cube2);
                //this is made true so that we can add colours
                cube2.material.vertexColors = true
                cube2.geometry.verticesNeedUpdate = true
            }
        }
        spacey = spacey + 1;
    }
    for (var i = 0; i < 3; i++) {
        const geometry = new THREE.CylinderGeometry(5, 5, 40, 32);
        const material = new THREE.MeshBasicMaterial({ wireframe: false, color: "#42d7f5" });
        const cylinder = new THREE.Mesh(geometry, material);
        cylinder.position.set(0, 0, 0)
        if (i == 1) {
            cylinder.rotation.z = Math.PI / 2
        }

        if (i == 2) {
            cylinder.rotation.x = Math.PI / 2
            cylinder.rotation.x = Math.PI / 2
        }
        scene.add(cylinder);

    }


    return meshs


}
export { cubelets_form };
