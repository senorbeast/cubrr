
import * as THREE from "three";
import gsap from "gsap";
import {layer_group} from './cubelet_group.js'
var mov1 = 0
function animate_execute (scene , meshs, soln , padding)
{      
      mov1 = 0
     
      rotate(scene,meshs,soln,padding)

}

function comp(scene , meshs , soln ,padding)
{
    gsap.delayedCall(0.5 , comp1,[scene,meshs , soln,padding])

}

function comp1(scene,meshs,soln,padding)
{

    mov1 = mov1 + 1 
    
    if (mov1 <= soln.length - 1)
    {
        rotate(scene,meshs,soln,padding)
    
    }
    
}

function rotate(scene,meshs,soln,padding)
{
    var moves2 = soln[mov1]
    var moves3 = moves2.split("_")
   
    var moves1 = layer_group(scene,meshs,moves3[1],padding,Number(moves3[0]),moves3[2])
    if ( moves3[1] == "U" || moves3[1] == "D")
    {
      gsap.to(moves1[0].rotation, {duration:0.3 , y: moves1[0].rotation.y + (moves1[2]) ,onComplete : comp(scene , meshs ,soln , padding)});

    }
    else if ( moves3[1] == "F" || moves3[1] == "B")
    {
      gsap.to(moves1[0].rotation, {duration:0.3 , z: moves1[0].rotation.z + (moves1[2]) ,onComplete : comp(scene , meshs ,soln , padding) });
    }

    else if ( moves3[1] == "R" || moves3[1] == "L")
    {
      gsap.to(moves1[0].rotation, {duration:0.3 , x: moves1[0].rotation.x + (moves1[2]) ,onComplete:comp(scene , meshs ,soln , padding )});
    }

}

export {animate_execute}