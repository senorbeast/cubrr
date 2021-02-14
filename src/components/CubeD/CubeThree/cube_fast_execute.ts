import { layer_group } from "./cubelet_group";
function fast_execute(scene: any, meshs: any, padding: any, moves: any): void {
    for (var i = 0; i < moves.length; i++) {
        var moves2 = moves[i];
        var moves3 = moves2.split("_");

        var moves1 = layer_group(
            scene,
            meshs,
            moves3[1],
            padding,
            Number(moves3[0]),
            moves3[2]
        );
        //@ts-ignore
        moves1[0].rotateOnWorldAxis(moves1[1], moves1[2]);
    }
}
export { fast_execute };
