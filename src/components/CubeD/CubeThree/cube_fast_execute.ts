import { Object3D } from 'three';
import { layer_group } from './cubelet_group';
/**
 * FUNCTION NAME : FAST_EXECUTE
   INPUT PARAMETERS : 3D SCENE , CUBE MESHS ( GIVE INFO ABOUT POSITION OF CUBELET IN 3D SPACE )IN FORM OF STRINGS  , PADDING BETWEEN EACH CUBELET , MOVES IN THE FORMAT RETURNED BY SCRAMBLE READ
   RETURN : NONE
   */
function fast_execute(
    scene: { add: (arg0: Object3D) => void },
    mesh: any[],
    padding: number,
    moves: string | any[],
): void {
    //ROTATION OF EVERY MOVE ALONG THE SPECIFIED FACE AXIS
    for (var i = 0; i < moves.length; i++) {
        var moves2 = moves[i];
        var moves3 = moves2.split('_');

        var moves1 = layer_group(scene, mesh, moves3[1], padding, Number(moves3[0]), moves3[2]);
        //@ts-ignore
        moves1[0].rotateOnWorldAxis(moves1[1], moves1[2]);
    }
}
export { fast_execute };
