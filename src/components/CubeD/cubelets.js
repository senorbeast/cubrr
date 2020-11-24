import * as THREE from "three";


function cubelets_form (scene, size , padding , tx1,tx2,tx3,tx4,tx5,tx6)
{
    
    var meshs = []
    var core = []
    var name_plane = []
    var ret = []
    for (var i=0 ;i<3 ;i++)
		{
		  spacey = ( 50 + padding  )*i ;
          for (var j=0 ; j<3 ;j++)
          {
            
            space = ( 50 + padding )*j;
      for (var k=0; k<3 ;k++)
      {
          //mesh created for every cube
        if ( i == 2 && j == 1 && k == 1 )
        
        {
            const materials = 
            [
                
                new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors ,transaprent:true ,opacity:1}),
                new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors ,transaprent:true ,opacity:1}),
                new THREE.MeshBasicMaterial({transparent1:true,opacity:1}),
                new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors ,transaprent:true,opacity:1}),
                new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors,transaprent:true ,opacity:1}),
               
                new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false, vertexColors: THREE.FaceColors,transaprent:true ,opacity:1}),
                  
            ];
              
            var cube2 =  new THREE.Mesh(new THREE.BoxGeometry(50,50,50),materials);

        }
        else if ( i ==1 && j ==1 && k ==1 )
        {
            var cube2 =  new THREE.Mesh(new THREE.BoxGeometry(50,50,50),new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false,skinning:true, vertexColors: THREE.FaceColors ,transparent:true,opacity:0,side:THREE.DoubleSide}));

        }
         
        else
        {
            var cube2 =  new THREE.Mesh(new THREE.BoxGeometry(50,50,50),new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false,skinning:true, vertexColors: THREE.FaceColors ,transparent:true,opacity:1,side:THREE.DoubleSide}));

        }
       
        
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
    for ( var i = 0 ; i<3 ; i++)
    {
        const geometry = new THREE.CylinderGeometry( 5, 5, 40, 32 );
        const material = new THREE.MeshBasicMaterial( {wireframe:false , color: 0x000080} );
        const cylinder = new THREE.Mesh( geometry, material );
        cylinder.position.set(0,0,0)
        if ( i == 1)
        {
            cylinder.rotation.z = Math.PI/2
        }

        if (i == 2)
        {
            cylinder.rotation.x = Math.PI/2
            cylinder.rotation.x = Math.PI/2
        }
        
        scene.add( cylinder );
        core.push(cylinder)

    }

    for ( var j = 0 ; j < 6 ; j++ )
    {
        const geometry = new THREE.PlaneGeometry( 90, 90,0 );
        const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide,transparent:true , opacity:0 } );
        const plane = new THREE.Mesh( geometry, material );
        if(j == 0)
        {
            plane.position.set(0,0,120)
            plane.material.map = tx1
        }
        else if (j == 1)
        {
            plane.rotation.y = Math.PI
            plane.position.set(0,0,-120)
            plane.material.map = tx2
        }

        else if ( j == 2 )
        {
            plane.rotation.x = Math.PI/2
            plane.position.set(0,120,0)
            plane.material.map = tx5
        }
        else if ( j == 3 )
        {
            plane.rotation.x = Math.PI/2
            plane.position.set(0,-120,0)
            plane.material.map = tx6
        }
        else if ( j == 4 )
        {
            plane.rotation.y = Math.PI/2
            plane.position.set(120,0,0)
            plane.material.map = tx3
        }
        else if ( j == 5 )
        {
            plane.rotation.y = -Math.PI/2
            plane.position.set(-120,0,0)
            plane.material.map = tx4
        
        }
        
        scene.add( plane );
        name_plane.push(plane)
    }
    ret[0] = meshs
    ret[1] = core
    ret[2] = name_plane
    return ret


}
export {cubelets_form};
