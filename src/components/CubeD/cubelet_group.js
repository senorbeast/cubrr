import * as THREE from "three";
function layer_group(scene , meshs , layer , padding ,dir , number )
{
    var my_return = []
    var v1 = new THREE.Vector3();
    var axis = new THREE.Vector3();
    var pivot = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN D LAYER-- */
    var pivot1 = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN U LAYER-- */
    var pivot2 = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN F LAYER-- */
    var pivot3 = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN B LAYER-- */
    var pivot4 = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN R LAYER-- */
    var pivot5 = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN L LAYER-- */
    var pivotm = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN MIDDLE LAYER -- */
    var pivots = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN STANDING LAYER -- */
    var pivote = new THREE.Object3D();/* --USED TO GROUP CUBIES PRESENT IN EQUATORIAL LAYER -- */
    if (dir == 1)
        {
          my_return[2] = -Math.PI/2
          
        }

        if (dir == -1)
        {
          my_return[2] = Math.PI/2
        }
        if(number == 2)
        {
          my_return[2] = Math.PI

        }
    if (layer == "D")
    {
        for (var qi = 0; qi < 27; qi++) 
        {
          meshs[qi].getWorldPosition ( v1 )
          
          
          
           if (Math.round(v1.y) == -(50 + padding))
           {
             
           
           //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
             pivot.attach(meshs[qi])
                            
        
           }
             
       
        }
        
        scene.add(pivot)
        axis = new THREE.Vector3(0,1,0)
        my_return[0] = pivot 
        my_return[1] = axis
       return my_return 
    }


    if (layer == "U")
    {
        for (var qi = 0; qi < 27; qi++) 
        {
          meshs[qi].getWorldPosition ( v1 )
          
          
          
         if (Math.round(v1.y) == (50 + padding))
         {
           
          
           //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
           pivot1.attach(meshs[qi])
         
        
         }
           
       
        }
    
        scene.add(pivot1)
        axis = new THREE.Vector3(0,1,0)
        my_return[0] = pivot1 
        my_return[1] = axis
        return my_return 
    }


    if (layer == "F")
    {
      for (var qi = 0; qi < 27; qi++) 
      {
        meshs[qi].getWorldPosition(v1)
      
    
        if (Math.round(v1.z )== (50 + padding)) 
        {
    
          //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
          pivot2.attach(meshs[qi])
  
    
        }
    
    
      }
     
      scene.add(pivot2)
      axis = new THREE.Vector3(0,0,1)
      my_return[0] = pivot2 
      my_return[1] = axis
      return my_return 
    }


    if (layer == "B")
    {
      for (var qi = 0; qi < 27; qi++) 
      {
        meshs[qi].getWorldPosition(v1)
        
    
        if (Math.round(v1.z )  == -(50 + padding))
       {
    
          
          //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
          pivot3.attach(meshs[qi])
    
    
        }
    
    
      }
  
      scene.add(pivot3)
      axis = new THREE.Vector3(0,0,1)
      my_return[0] = pivot3
      my_return[1] = axis
      return my_return 
    }


    if (layer == "R")
    {
      for (var qi = 0; qi < 27; qi++) 
      {
        meshs[qi].getWorldPosition ( v1 )
       
        
        
       if (Math.round(v1.x) == (50 + padding))
       {
         
         console.log(qi)
         //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
         pivot4.attach(meshs[qi])
     
         console.log(pivot4)   
      
       }
         
     
      }

      scene.add(pivot4)
      axis = new THREE.Vector3(1,0,0)
      my_return[0] = pivot4
      my_return[1] = axis
      return my_return 
    }


    if (layer == "L")
    {
      for (var qi = 0; qi < 27; qi++) 
      {
        meshs[qi].getWorldPosition ( v1 )
        
        
        
       if (Math.round(v1.x) == -(50 + padding))
       {
         
         
         //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
         pivot5.attach(meshs[qi])
        
              
      
       }
         
     
      }
      scene.add(pivot5)
      axis = new THREE.Vector3(1,0,0)
      my_return[0] = pivot5
      my_return[1] = axis
      return my_return 
    }

    if (layer == "M")
    {
      for (var qi = 0; qi < 27; qi++) 
      {
        meshs[qi].getWorldPosition ( v1 )
        
        
        
       if (Math.round(v1.x*100)/100 == 0)
       {
         
        
         //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
         pivotm.attach(meshs[qi])
   
              
      
       }
         
     
      }
      scene.add(pivotm)
      axis = (0,1,0)
      my_return[0] = pivotm 
      my_return[1] = axis
      return my_return 
    }

    if (layer == "S")
    {
      for (var qi = 0; qi < 27; qi++) 
      {
        meshs[qi].getWorldPosition ( v1 )
        
        
        
       if (Math.round(v1.z*100)/100 == 0)
       {
         
       
         //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
         pivots.attach(meshs[qi])
  
              
      
       }
         
     
      }
      scene.add(pivots)
      axis = (0,1,0)
      my_return[0] = pivots
      my_return[1] = axis
      return my_return 
    }

    if (layer == "E")
    {
      for (var qi = 0; qi < 27; qi++) 
      {
        meshs[qi].getWorldPosition ( v1 )
        
        
        
       if (Math.round(v1.y*100)/100 == 0)
       {
         
        
         //ADDITION OF THE CUBIES WHICH ARE CURRENTLY PRESENT IN THE LAYER
         pivote.attach(meshs[qi])
    
      
       }
         
     
      }
      scene.add(pivote)
      axis = (0,1,0)
      my_return[0] = pivote
      my_return[1] = axis
      return my_return 
    }
    
  
}

export {layer_group}