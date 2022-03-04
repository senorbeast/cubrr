// @ts-nocheck
import * as THREE from 'three';
import { cubelets_form } from './cubelets';
import { cube_color } from './cubelet_colors';
import { scramble_read } from './cube_scramble_read';
import { fast_execute } from './cube_fast_execute';
import { animate_execute } from './cube_animate_execute';
import { animation_sequence } from './cube_animation_sequence'
// import { animate_read } from "./cube_animate_read_3";
import { draw_text } from './cube_text';
import { ContactsOutlined } from '@material-ui/icons';

export default class CUBE {
    // @ts-ignore
    #mesh = []; // just add "default"
    // @ts-ignore
    #current_state = [] ;
    // @ts-ignore
    #core = [];
    constructor(
        cube_size: number,
        camera: THREE.PerspectiveCamera | null,
        renderer: THREE.WebGLRenderer,
        scene: THREE.Scene | null,
    ) {
        this.scene = scene;
        this.camera = camera;
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
        this.renderer = renderer;
    }
    /* FUNCTION NAME : ADD
       DESC: ADDING CUBELETS TO THE SCENE 
       INPUT PARAMETERS : NONE 
       OUTPUT PARAMETERS : NONE
       */
    add() {
        const tx1 = document.createElement('canvas').getContext('2d');
        tx1.font = '150pt poppins ';
        tx1.fillText('F', 100, 140);
        const tx2 = document.createElement('canvas').getContext('2d');
        tx2.font = '150pt roboto';
        tx2.fillText('B', 100, 140);
        const tx3 = document.createElement('canvas').getContext('2d');
        tx3.font = '150pt roboto';
        tx3.fillText('R', 100, 140);
        const tx4 = document.createElement('canvas').getContext('2d');
        tx4.font = '150pt roboto';
        tx4.fillText('L', 100, 140);
        const tx5 = document.createElement('canvas').getContext('2d');
        tx5.font = '150pt roboto';
        tx5.fillText('U', 100, 140);
        const tx6 = document.createElement('canvas').getContext('2d');
        tx6.font = '150pt roboto';
        tx6.fillText('D', 100, 140);

        //const texture = new THREE.TextureLoader().load("rubiksLogoClassic.png" );

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
        /* FOR CREATING A 3*3 CUBE */
        if (this.cube_size == 3) {
            //ADDING CUBELETS TO SCENE
            var ret = cubelets_form(this.scene, this.cube_size, 5);
            this.meshs = ret[0];
            this.core = ret[1];
        }
    }
    /* FUNCTION NAME : COLOR 
       DESC: TAKES MESHS AS INPUT FOR FUNCTION AND ADDS COLOR ACCORDING TO THE STANDARDIZED COLOR SCHEME TO EACH CUBELET
       INPUT PARAMETER : NONE
       OUTPUT PARAMETER : NONE
       */
    color() {
        cube_color(this.meshs);
    }
    /* FUNCTION NAME : LIVEMOVE 
       DESC : THIS IS TO DO LIVE MOVES ENTERED BY USER ( EITHER NORMAL OR INVERESE ) WITHOUT ANIMATION ON THE CUBE  
       INPUT PARAMETER : current_move - the current moves entered by user
                         currentfull - the full moves to be done on the cube currently
                         previous -  the previously done moves on the cube
                         num - 0: means the array generated by scramble read will be for the normal sequence 
                               1: means the array generated by scramble read will be for the inverse moves
       */
    liveMove(
        current_move: string | any[],
        num: number,
    )
    {
        //generate an formated array of moves to be done on cube
        var moves = scramble_read(current_move , num);
         
        //pass the array so that moves are executed on cube
        fast_execute(this.scene, this.meshs, 5, moves);
    }
    /* FUNCTION NAME : FAST MOVE 
       DESC : TO DO FAST MOVES ON CUBE WITHOUT ANIMATION 
       INPUT PARAMETERS : moves - MOVES TO BE DONE ON THE VIRTUAL CUBE ( STRING ARRAY ) 
                          num - NUMBER : 0 - TO BE DONE IN SEQUENCE  1 :- TO BE DONE IN INVERSE SEQUENCE
       RETURN : NONE
       */
    fastMove(moves: string | ConcatArray<any>, num: number) {
        var moves1 = scramble_read(moves, num);
        fast_execute(this.scene, this.meshs, 5, moves1);
    }
    /**
       FUNCTION NAME : ANIMATE MOVE
       DESC : TO DO ANIMATED MOVES ON CUBE 
       INPUT PARAMETERS : move - the moves that have to be played with animation 
                          time - time taken for each move animation to play
       RETURN : NONE    
    */
    animateMove(move: string, time: number) {
        //   var moves = animate_read(move, move, [], 0);
        animate_execute(this.scene, this.meshs, move, 5, time, 0);
    }

    text(
        text: string,
        ctx: CanvasRenderingContext2D | null,
        c: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement,
    ) {
        draw_text(this.scene, text, this.renderer, ctx, c);
    }
    /**
       FUNCTION NAME : ANIMATION SEQUENCE
       DESC : TO PLAY THE GIVEN ANIMATION SEQUENCE 
       INPUT PARAMETERS : NONE 
       RETURN : NONE 
       */
    animate_sequence()
    {
        animation_sequence( this.scene , this.meshs , this.core ,this.camera)
    }
    /**
       FUNCTION NAME : MOVE_HANDLER
       DESC : The moves that need to be done on the cube without animation
       INPUT PARAMETER : moves - the array of total moves ( scramble + solution ) that need to be done on cube , slider_mot :- 0 - slider is not moved by user , 1 - slider is moved by user
       scramble_length - length of scramble , slider_number - position of slider
       RETURN : NONE                      
    */
    move_handler( moves: string | ConcatArray<any> , slider_mot : number , scramble_length : number , slider_number)
    {
        //HANDLE NORMALE MOVES
        if( slider_mot == 0 )
        {
            //FIRST MOVE ENTERED BY USER 
            if( typeof this.#current_state === "undefined" )
            {
                console.log( moves );
                var moves1 = scramble_read( moves, 0 );
                fast_execute(this.scene, this.meshs, 5, moves1);
                this.#current_state = moves;//storing the moves done on the cube
            }
            else 
            {
                //USER APPENDED MOVES
                if ( moves.length > this.#current_state.length )
                {
                    console.log( this.#current_state );
                    if( this.#current_state.length == 0 )
                    {
                        
                        var moves1 = scramble_read( moves, 0 );
                        console.log( moves1 );
                        fast_execute(this.scene, this.meshs, 5, moves1);
                        this.#current_state = moves;//storing the moves done on the cube
                    }
                    else if ( this.#current_state.length > 0 )
                    {
                        var moves_check = moves.slice( 0, this.#current_state.length );
                        //previously done moves are same on the cube
                        if( JSON.stringify(moves_check) === JSON.stringify(this.#current_state) )
                        {
                            console.log( "**!!" );
                            var current_moves = moves.slice( this.#current_state.length );
                            this.liveMove(current_moves, 0);//do the current moves
                        }
                        else
                        {
                            console.log( "****" );
                            console.log( moves );
                            this.fastMove(this.#current_state, 1);//inverse the previously done moves
                            this.fastMove(moves, 0);//do the current moves
                        }
                        this.#current_state = moves;//store the moves done on the cube
                    }
                }        
                //USER DELETED MOVES
                else if ( moves.length < this.#current_state.length )
                {
                    if( moves.length != 0 )
                    {
                        this.fastMove(this.#current_state, 1);//inverse the previously done moves
                        this.fastMove(moves, 0);//do the current moves
                        this.#current_state = moves;//store the moves done on the cube
                    }
                    else 
                    {
                        this.fastMove(this.#current_state, 1);//inverse the previously done move
                        this.#current_state = moves;//store the moves done on the cube
                    }

                
                }
                //USER MIGHT HAVE EDITED MOVES
                else if ( moves.length == this.#current_state.length )
                {
                    //MOVES ARE NOT SAME
                    if(JSON.stringify(moves) !== JSON.stringify(this.#current_state) )
                    {
                        console.log( "!===" );
                        console.log( this.#current_state );
                        console.log( moves );
                        this.fastMove(this.#current_state, 1);//inverse the previously done moves
                        this.fastMove(moves, 0);//do the current moves
                        this.#current_state = moves;
                        console.log( this.#current_state );
                    }
                }
            }
        }
        //HANDLE SLIDER MOVES
        else if ( slider_mot == 1 )
        {
            var slider_moves = moves.slice( 0 , scramble_length + slider_number + 1 );//moves till slider position
            console.log( slider_moves );
            console.log(this.#current_state);
            this.fastMove(this.#current_state, 1);//inverse the previously done moves   
            this.fastMove( slider_moves , 0 );//do the current moves        
            this.#current_state = slider_moves;//store the moves in current state
        }
        


    }
}
