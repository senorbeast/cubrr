function face_plane_make(
    plane: { material: { opacity: number } }[],
    t: string, // @ts-ignore
    tx1: any, // @ts-ignore
    tx2: any, // @ts-ignore
    tx3: any, // @ts-ignore
    tx4: any, // @ts-ignore
    tx5: any, // @ts-ignore
    tx6: any,
): void {
    // var name_plane = [];

    if (t == 'true') {
        for (var j = 0; j < 6; j++) {
            plane[j].material.opacity = 1;
        }
    } else if (t == 'false') {
        for (var j = 0; j < 6; j++) {
            plane[j].material.opacity = 0;
        }
    }
}
export { face_plane_make };
