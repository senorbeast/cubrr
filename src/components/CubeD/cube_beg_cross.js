import * as THREE from "three";
import gsap from "gsap";

function beg_cross(scene , meshs )
{
    var white_edges = [19,21,22,23,25]
    var cube = new THREE.Object3D();
    var cross = new THREE.Object3D();
    for (var i = 0 ; i< white_edges.length ;i++)
    {
        cross.attach(meshs[white_edges[i]])
    }
    for (var j = 0 ; j< meshs.length ;j++)
    {
        cube.attach(meshs[j])
    }
    scene.add(cube);
    scene.add(cross);

    var cross_time = gsap.timeline({duration:2})
    var tween1 = gsap.to(cube.rotation,{x:Math.PI , duration :1 })
    cross_time.add(tween1,"anime1")
    for (var k = 0; k < meshs.length ; k++ )
    {
        var tween2 = gsap.to(meshs[k].material,{duration:1 , opacity:0.1})
        cross_time.add(tween2,"anime2") 
    }
    for ( var p = 0 ; p<white_edges.length ;p++ )
    {
        var tween3 = gsap.to(meshs[white_edges[p]].material,{duration:1 , opacity:1})
        cross_time.add(tween3,"anime3") 
    }
        
    cross_time.play()


}
export{beg_cross}