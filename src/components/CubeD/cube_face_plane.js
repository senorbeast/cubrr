import * as THREE from "three";
function face_plane_make(plane,t,tx1,tx2,tx3,tx4,tx5,tx6)
{
    var name_plane = []
    
    if ( t== "true")
    {
        for ( var j = 0 ; j < 6 ; j++ )
    {
        
        plane[j].material.opacity = 1 
        
       
    }

    }
    else if ( t == "false")
    {
        for ( var j = 0 ; j < 6 ; j++ )
    {
        
        plane[j].material.opacity = 0
        
       
    }
    }
    
}
export{face_plane_make}