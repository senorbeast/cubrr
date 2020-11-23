import * as THREE from "three";
function cubelets_form (scene, size , padding , texture)
{
    
    var meshs = []
    
    for (var i=0 ;i<3 ;i++)
		{
		  spacey = ( 50 + padding  )*i ;
          for (var j=0 ; j<3 ;j++)
          {
            
            space = ( 50 + padding )*j;
      for (var k=0; k<3 ;k++)
      {
          //mesh created for every cube
        // if ( i == 2 && j == 1 && k == 1 )
        
        // {
        //     const materials = 
        //     [
                
        //         new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors ,transaprent:true ,opacity:1}),
        //         new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors ,transaprent:true ,opacity:1}),
        //         new THREE.MeshBasicMaterial({map:texture}),
        //         new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors ,transaprent:true,opacity:1}),
        //         new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors,transaprent:true ,opacity:1}),
               
        //         new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors,transaprent:true ,opacity:1}),
                  
        //     ];
              
        //     var cube2 =  new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5),materials);

        // }
         
        
        var cube2 =  new THREE.Mesh(new THREE.BoxGeometry(50,50,50),new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false,skinning:true, vertexColors: THREE.FaceColors ,transparent:true,opacity:1,side:THREE.DoubleSide}));
        scene.add(cube2);
         
         var space,spacex,spacey;
         spacex =  ( 50 + padding )*k;
         // setting position of rubiks in the scene
         cube2.position.set(-(50 + padding)+spacex,-(50 + padding)+spacey,-(50 + padding)+space); 
         cube2.updateMatrixWorld(true)
         cube2.matrixAutoUpdate = true;
         
         meshs.push(cube2);
         //this is made true so that we can add colours
         cube2.material.vertexColors = true
         cube2.geometry.verticesNeedUpdate = true
      }
	}
		  spacey = spacey+1;
    }
    
    return meshs


}
export {cubelets_form};
