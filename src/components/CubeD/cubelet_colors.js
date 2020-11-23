import * as THREE from "three";
function cube_color(meshs) {
  var F = [6, 7, 8, 15, 16, 17, 24, 25, 26]
  var B = [0, 1, 2, 9, 10, 11, 18, 19, 20]
  var L = [0, 3, 6, 9, 12, 15, 18, 21, 24]
  var R = [2, 5, 8, 11, 14, 17, 20, 23, 26]
  var U = [18, 19, 20, 21, 22, 23, 24, 25, 26]
  var D = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  var black = new THREE.Color("#000000")
  var white = new THREE.Color("#FFFFFF")
  var base = new THREE.Color("#E9EBB3")
  var yellow = new THREE.Color("#F3FF00")
  var red = new THREE.Color("#d40f0f")
  var orange = new THREE.Color("#fa7d00")
  var blue = new THREE.Color("#260db5")
  var green = new THREE.Color("#66FF00")
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

}
export { cube_color };