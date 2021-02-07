import { cubelets_form } from "./cubelets.js";
import { cube_color } from "./cubelet_colors.js";
import { scramble_read } from "./cube_scramble_read_v3";
import { fast_execute } from "./cube_fast_execute.js";
import { animate_execute } from "./cube_animate_execute.js";
import { animate_read } from "./cube_animate_read_3";
import {draw_text} from "./cube_text";
import * as THREE from "three";
export default class CUBE { 
    #mesh = [];// just add "default"
 
    
    
  constructor(cube_size,camera,renderer,scene) {
    this.scene = scene;
    this.camera = camera 
    this.camera.position.z = 275;
    this.camera.position.x = 275;
    this.camera.position.y = 300;
    this.camera.tanFOV = Math.tan(((Math.PI / 180) * camera.fov) / 2); //  For maintaining scale on windowResize.
    this.camera.oneToOne = function () {
        //  Return the Z position at which to place an object for exactly 100% scale.
        //  https://github.com/mrdoob/three.js/blob/dev/examples/js/renderers/CSS3DRenderer.js#L142

        return (-0.5 / Math.tan((camera.fov * Math.PI) / 360)) * HEIGHT;
    };
    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);
    this.cube_size = cube_size;
    this.renderer = renderer
  }
  add()
  {
    const tx1 = document.createElement("canvas").getContext("2d");
    tx1.font = "150pt poppins ";
    tx1.fillText("F", 100, 140);
    const tx2 = document.createElement("canvas").getContext("2d");
    tx2.font = "150pt roboto";
    tx2.fillText("B", 100, 140);
    const tx3 = document.createElement("canvas").getContext("2d");
    tx3.font = "150pt roboto";
    tx3.fillText("R", 100, 140);
    const tx4 = document.createElement("canvas").getContext("2d");
    tx4.font = "150pt roboto";
    tx4.fillText("L", 100, 140);
    const tx5 = document.createElement("canvas").getContext("2d");
    tx5.font = "150pt roboto";
    tx5.fillText("U", 100, 140);
    const tx6 = document.createElement("canvas").getContext("2d");
    tx6.font = "150pt roboto";
    tx6.fillText("D", 100, 140);

    // const texture = new THREE.TextureLoader().load("rubiksLogoClassic.png" );

    let texture1 = new THREE.CanvasTexture(tx1.canvas);
    let texture2 = new THREE.CanvasTexture(tx2.canvas);
    let texture3 = new THREE.CanvasTexture(tx3.canvas);
    let texture4 = new THREE.CanvasTexture(tx4.canvas);
    let texture5 = new THREE.CanvasTexture(tx5.canvas);
    let texture6 = new THREE.CanvasTexture(tx6.canvas);

    texture1.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    texture2.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    texture3.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    texture4.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    texture5.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    texture6.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      if ( this.cube_size == 3)
      {
        var ret = cubelets_form(
            this.scene,
            this.cube_size,
            5
        );
        this.meshs = ret[0];       

      }
     
       
    

  }
  color()
  {
      cube_color(this.meshs)

  }
  liveMove(current_move, currentfull, previous, num)
  {
    var moves = scramble_read(current_move, currentfull,previous, num);
                   

    fast_execute(this.scene, this.meshs, 5, moves);

  }
  fastMove(moves,num)
  {
    var moves1 = scramble_read(moves, moves,[], num);
    fast_execute(this.scene, this.meshs, 5, moves1);
    
  }
  animateMove(move,time)
  {
    //   var moves = animate_read(move, move, [], 0);
     animate_execute(
                    this.scene,
                    this.meshs,
                    move,
                    5,
                    time,
                    0
                );
  }
  text(text,ctx,c)
  {
    draw_text(this.scene,text,this.renderer,ctx,c)
  }
}