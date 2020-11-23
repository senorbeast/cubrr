import * as THREE from "three";
import gsap from "gsap";

function animation_sequence( scene ,meshs,camera )

{
    var edges = [1,3,5,7,9,11,15,17,19,21,23,25,13]
    var corners = [0,2,6,8,18,20,24,26,13]
    var centre = [4,10,12,14,16,22,13]
    var pivot = new THREE.Object3D()
    var positions = []
    
    var v4 = new THREE.Vector3()
    for ( var j = 0 ; j < meshs.length ; j++)
    {
        var v3 = new THREE.Vector3()
        meshs[j].getWorldPosition ( v3 )
        positions[j] = v3
    }
    for (var i = 0 ; i< meshs.length ;i++)
    {
        pivot.attach(meshs[i])
    }
    scene.add(pivot)
    
    var v2 = new THREE.Vector3()
    var timeline = gsap.timeline({duration:2})
    var tween = gsap.to(pivot.position, { y:v2.y+40 })
    timeline.add(tween,"anime1")
    var tween1 = gsap.to(pivot.rotation,{y:2*Math.PI})
    timeline.add(tween1,"anime1")
    var tween2 = gsap.to(pivot.position, { y:v2.y,ease:"strong.inOut" }) 
    timeline.add(tween2,"anime2")
    var tween3 = gsap.fromTo(pivot.rotation, {y: 2*Math.PI}, {y: 4*Math.PI ,ease:"sine"})
    timeline.add(tween3,"anime3")
    
        for ( var i = 0 ; i < meshs.length; i++)
        {
            meshs[i].getWorldPosition ( v2 )
            v2 .x = Math.round(v2.x)
            v2 .y = Math.round(v2.y)
            v2 .z = Math.round(v2.z)
            var tween4 = gsap.to(meshs[i].position, { duration: 0.3,x:v2.x+Math.floor(Math.random() * 12)*(v2.x) ,y:v2.y+Math.floor(Math.random() * 12)*(v2.y) , z:v2.z+Math.floor(Math.random() * 12)*(v2.z) ,ease:"sine"})
            timeline.add(tween4,"anime3",)
        }
        
        var tween5 = gsap.to(pivot.rotation, { duration: 3,x:Math.PI ,y:Math.PI,z:Math.PI,ease:"sine"})
        timeline.add(tween5,"anime4")
        
    
        for ( var k = 0 ; k < meshs.length; k++)
        {
            var x1 = Math.round(positions[k].x)
            var y1 = Math.round(positions[k].y)
            var z1 = Math.round(positions[k].z)
            var tween6 = gsap.to(meshs[k].position, { duration: 3,x:x1 ,y:y1 , z:z1 ,ease:"sine"})
            timeline.add(tween6,"anime4",)
        }

        for ( var k = 0 ; k < meshs.length; k++)
        {
            
            var tween7 = gsap.to(meshs[k].material, { duration: 0.3,opacity : 0.2 })
            timeline.add(tween7,"anime5",)
        }
    
        
       for ( var p = 0 ;p< centre.length;p++)
       {
           var tween8 = gsap.to(meshs[centre[p]].material, { duration: 0.5,opacity : 1 })
           timeline.add(tween8,"anime5",)
       }
       
       for ( var g = 0 ;g < centre.length ;g++ )
       {
           if( centre[g] == 4 || centre[g] == 22)
           {
            var tween9 = gsap.to(meshs[centre[g]].rotation, { duration: 1,y:2*Math.PI })
            timeline.add(tween9,"anime6")               
           }
           if( centre[g] == 10 || centre[g] == 16)
           {
            var tween9 = gsap.to(meshs[centre[g]].rotation, { duration: 1,z:2*Math.PI })
            timeline.add(tween9,"anime7")               
           }
           if( centre[g] == 12 || centre[g] == 14)
           {
            var tween9 = gsap.to(meshs[centre[g]].rotation, { duration: 1,x:2*Math.PI })
            timeline.add(tween9,"anime8")               
           }
           
       }
       for ( var k = 0 ; k < meshs.length; k++)
        {
            
            var tween10 = gsap.to(meshs[k].material, { duration: 0.3,opacity : 0.1 })
            timeline.add(tween10,"anime9",)
        }
        for ( var p = 0 ;p< edges.length;p++)
       {
           var tween8 = gsap.to(meshs[edges[p]].material, { duration: 3,opacity : 1 })
           timeline.add(tween8,"anime10",)
       }
       for ( var k = 0 ; k < meshs.length; k++)
        {
            
            var tween10 = gsap.to(meshs[k].material, { duration: 0.3,opacity : 0.1 })
            timeline.add(tween10,"anime11",)
        }
        for ( var p = 0 ;p< corners.length;p++)
       {
           var tween8 = gsap.to(meshs[corners[p]].material, { duration: 3,opacity : 1 })
           timeline.add(tween8,"anime12",)
       }
       
       timeline.play()
       timeline.repeat(-1)
       
    
}



export{animation_sequence}
