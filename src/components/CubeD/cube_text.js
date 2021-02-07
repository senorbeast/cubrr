import * as THREE from "three";
import canvasTxt from 'canvas-txt'
function draw_text(scene , text , renderer,ctx,c,reload)
{
    
  
    c.height = 300 
    c.width = 750
    //ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle = 'white'
    
    var txt = text
    
    canvasTxt.font = 'Bahnschrift SemiBold'
    canvasTxt.fontSize = 70
    canvasTxt.fontWeight = 'bold'
    canvasTxt.drawText(ctx, txt, 0, -50, 750,300)
    
    let guide_text_1 = new THREE.CanvasTexture(c);
    guide_text_1.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const geometry = new THREE.PlaneGeometry(500, 150, 0);
    const material = new THREE.MeshBasicMaterial({ color: "#fff", side: THREE.DoubleSide });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.set(400,0,-150)
    plane.material.map = guide_text_1
    scene.add(plane)
    
    
       

    
    
}
export{draw_text}