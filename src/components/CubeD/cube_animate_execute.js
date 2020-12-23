
import * as THREE from "three";
import gsap from "gsap";
import {layer_group} from './cubelet_group.js'
var mov1 = 0
async function animate_execute (scene , meshs, soln , padding)
{      
      mov1 = 0
     
      let res = await rotate(scene,meshs,soln,padding)
      return res;
}

async function comp(scene , meshs , soln ,padding)
{
    await gsap.delayedCall(0.5 , await comp1,[scene,meshs , soln,padding])
    return 3;
}

async function comp1(scene,meshs,soln,padding)
{

    mov1 = mov1 + 1 
    
    if (mov1 <= soln.length - 1)
    {
       await rotate(scene,meshs,soln,padding)
    
    }
    
}

async function rotate(scene,meshs,soln,padding)
{
    var moves2 = soln[mov1]
    var moves3 = moves2.split("_")
    let res1 
    var moves1 = layer_group(scene,meshs,moves3[1],padding,Number(moves3[0]),moves3[2])
    if ( moves3[1] == "U" || moves3[1] == "D")
    {
      let tween1 = await gsap.to(moves1[0].rotation, {duration:0.3 , y: moves1[0].rotation.y + (moves1[2])  });
      tween1.then(async function()
      {
         res1 = await comp(scene , meshs ,soln , padding)

      })
    }
    else if ( moves3[1] == "F" || moves3[1] == "B")
    {
      let tween2 = await gsap.to(moves1[0].rotation, {duration:0.3 , z: moves1[0].rotation.z + (moves1[2]) });
      tween2.then(async function()
      {
        await comp(scene , meshs ,soln , padding)

      })
    }

    else if ( moves3[1] == "R" || moves3[1] == "L")
    {
      let tween3 = await gsap.to(moves1[0].rotation, {duration:0.3 , x: moves1[0].rotation.x + (moves1[2]) });
      tween3.then(async function()
      {
        await comp(scene , meshs ,soln , padding)

      })
    }
   return 2;
}

export {animate_execute}