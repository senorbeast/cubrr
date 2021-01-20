
import * as THREE from "three";
import gsap from "gsap";
import {layer_group} from './cubelet_group.js'
var mov1 = 0
function animate_execute (scene , meshs, soln , padding,time)
{      
       
      rotate(scene,meshs,soln,padding,time)
    
}

//  function comp(scene , meshs , soln ,padding)
// {
//     gsap.delayedCall(0.5 , comp1,[scene,meshs , soln,padding])
   
// }

//  function comp1(scene,meshs,soln,padding)
// {

//     mov1 = mov1 + 1 
    
//     if (mov1 <= soln.length - 1)
//     {
//        rotate(scene,meshs,soln,padding)
    
//     }
    
// }

function rotate(scene,meshs,soln,padding,time)
{
    time = time/1000;
    
    var moves3 = soln.split("_")
  
    var moves1 = layer_group(scene,meshs,moves3[1],padding,Number(moves3[0]),moves3[2])
    if ( moves3[1] == "U" || moves3[1] == "D" || moves3[1] == "u" || moves3[1] == "d" || moves3[1] == "y" )
    {
       gsap.to(moves1[0].rotation, {duration:time , y: moves1[0].rotation.y + (moves1[2])  });
      
    }
    else if ( moves3[1] == "F" || moves3[1] == "B" || moves3[1] == "f" || moves3[1] == "b" || moves3[1] == "z" )
    {
     gsap.to(moves1[0].rotation, {duration:time , z: moves1[0].rotation.z + (moves1[2]) });
      
    }

    else if ( moves3[1] == "R" || moves3[1] == "L" || moves3[1] == "r" || moves3[1] == "l" || moves3[1] == "x")
    {
        gsap.to(moves1[0].rotation, {duration:time , x: moves1[0].rotation.x + (moves1[2]) });
     
    }
   
}

export {animate_execute}