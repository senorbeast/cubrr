//  var scramble = ["R","'","F","'","B","L","U"]
/* FUNCTION NAME : SCRAMBLE READ 
   DESC : THIS GIVES A FORMATTED ARRAY FOR THE MOVES ARRAY PASSED 
   INPUT PARAMETERS : scramble  -  MOVES TBD IN ( STRING )  
                      url1 - MOVES TBD IN ( STRING )  
                      cube -  MOVES ALREADY DONE ON THE CUBE ( STRING )
                      but - 0- TBD IN NORMAL SEQUENCE 1- TBD IN REVERSE SEQUENCE
   OUTPUT PARAMETERS : LEGAL MOVES ARRAY ( FORMAT( -1/1_MOVES_1/2 ) : 1: - CLOCKWISE FOR ( F,R,U,X,Y,Z,S ), -1 : - CLOCKWISE FOR ( L,D,B,M,E ) , MOVES , NO.OF ROTATIONS ) 
   */
function scramble_read(
    scramble: string | any[],
    url1: string[],
    cube: string | any[],
    but: number,
): string[] {
    var flag = 0;//USED TO KEEP TRACK HOW MANY MOVES HAVE BEEN EXECUTED ON THE CUBE
    var ar = 0;
    var lay = [];
    var url = [...url1];
    /***********USED FOR GENERATING ARRAY FOR INVERSING MOVES *************/
    if (but == 1) {
        url = url.reverse();

        for (var i = 0; i < url.length; i++) {
            //IF THE MOVE IS ANTICLOCKWISE ROTATIONS ALONG ANY OF THE 6 FACES
            if (url[i] == "'") {
                if (
                    url[i + 1] == 'R' ||
                    url[i + 1] == 'r' ||
                    url[i + 1] == 'x' ||
                    url[i + 1] == 'F' ||
                    url[i + 1] == 'f' ||
                    url[i + 1] == 'z' ||
                    url[i + 1] == 'U' ||
                    url[i + 1] == 'u' ||
                    url[i + 1] == 'y' ||
                    url[i + 1] == 'S'
                ) {
                    lay[ar] = `1_${url[i + 1]}_1`;
                    flag = flag + 1;
                    ar = ar + 1;
                } else if (
                    url[i + 1] == 'B' ||
                    url[i + 1] == 'b' ||
                    url[i + 1] == 'L' ||
                    url[i + 1] == 'l' ||
                    url[i + 1] == 'D' ||
                    url[i + 1] == 'd' ||
                    url[i + 1] == 'M' ||
                    url[i + 1] == 'E'
                ) {
                    lay[ar] = `-1_${url[i + 1]}_1`;
                    flag = flag + 1;
                    ar = ar + 1;
                }
            }
            //IF FIRST MOVE IS 2 ROTATIONS ALONG ANY OF THE 6 FACES 
            else if (url[i] == '2') {
                if (
                    url[i + 1] == 'R' ||
                    url[i + 1] == 'r' ||
                    url[i + 1] == 'x' ||
                    url[i + 1] == 'F' ||
                    url[i + 1] == 'f' ||
                    url[i + 1] == 'z' ||
                    url[i + 1] == 'U' ||
                    url[i + 1] == 'u' ||
                    url[i + 1] == 'y' ||
                    url[i + 1] == 'S'
                ) {
                    lay[ar] = `-1_${url[i + 1]}_2`;
                    flag = flag + 1;
                    ar = ar + 1;
                } else if (
                    url[i + 1] == 'B' ||
                    url[i + 1] == 'b' ||
                    url[i + 1] == 'L' ||
                    url[i + 1] == 'l' ||
                    url[i + 1] == 'D' ||
                    url[i + 1] == 'd' ||
                    url[i + 1] == 'M' ||
                    url[i + 1] == 'E'
                ) {
                    lay[ar] = `1_${url[i + 1]}_2`;
                    flag = flag + 1;
                    ar = ar + 1;
                }
            }
            //IF FIRST MOVE IS A CLOCKWISE ROTATIONS ALONG ANY OF THE 6 FACES
            if (
                (url[i] == 'R' ||
                    url[i] == 'r' ||
                    url[i] == 'x' ||
                    url[i] == 'F' ||
                    url[i] == 'f' ||
                    url[i] == 'z' ||
                    url[i] == 'U' ||
                    url[i] == 'u' ||
                    url[i] == 'y' ||
                    url[i] == 'S') &&
                url[i - 1] != "'" &&
                url[i - 1] != '2'
            ) {
                lay[ar] = `-1_${url[i]}_1`;
                flag = flag + 1;
                ar = ar + 1;
            }
             else if (
                (url[i] == 'B' ||
                    url[i] == 'b' ||
                    url[i] == 'L' ||
                    url[i] == 'l' ||
                    url[i] == 'D' ||
                    url[i] == 'd' ||
                    url[i] == 'M' ||
                    url[i] == 'E') &&
                url[i - 1] != "'" &&
                url[i - 1] != '2'
            ) {
                lay[ar] = `1_${url[i]}_1`;
                flag = flag + 1;
                ar = ar + 1;
            }
        }
    }
    /***********USED FOR GENERATING ARRAY FOR LEGAL MOVES NORMAL SEQUENCE*************/
    if (but == 0) {
        if (url.length > cube.length) {
            for (var i = 0; i < scramble.length; i++) {
                //IF FIRST MOVE IS A CLOCKWISE ROTATIONS ALONG ANY OF THE 6 FACES
                if (
                    scramble[i] == 'R' ||
                    scramble[i] == 'r' ||
                    scramble[i] == 'F' ||
                    scramble[i] == 'f' ||
                    scramble[i] == 'U' ||
                    scramble[i] == 'u' ||
                    scramble[i] == 'x' ||
                    scramble[i] == 'y' ||
                    scramble[i] == 'z' ||
                    scramble[i] == 'S'
                ) {
                    lay[flag] = `1_${scramble[i]}_1`;
                    flag = flag + 1;
                }

                if (
                    scramble[i] == 'B' ||
                    scramble[i] == 'b' ||
                    scramble[i] == 'L' ||
                    scramble[i] == 'l' ||
                    scramble[i] == 'D' ||
                    scramble[i] == 'd' ||
                    scramble[i] == 'M' ||
                    scramble[i] == 'E'
                ) {
                    lay[flag] = `-1_${scramble[i]}_1`;
                    flag = flag + 1;
                }
                //IF THE MOVE IS ANTICLOCKWISE ROTATIONS ALONG ANY OF THE 6 FACES
                if (scramble[i] == "'") {
                    if (
                        scramble[i - 1] == 'L' ||
                        scramble[i - 1] == 'D' ||
                        scramble[i - 1] == 'B' ||
                        scramble[i - 1] == 'l' ||
                        scramble[i - 1] == 'd' ||
                        scramble[i - 1] == 'b' ||
                        scramble[i - 1] == 'M' ||
                        scramble[i - 1] == 'E'
                    ) {
                        lay[flag] = `-1_${scramble[i - 1]}_1`;
                        lay[flag + 1] = `-1_${scramble[i - 1]}_1`;
                        flag = flag + 2;
                    } else if (
                        scramble[i - 1] == 'F' ||
                        scramble[i - 1] == 'U' ||
                        scramble[i - 1] == 'R' ||
                        scramble[i - 1] == 'f' ||
                        scramble[i - 1] == 'u' ||
                        scramble[i - 1] == 'r' ||
                        scramble[i - 1] == 'x' ||
                        scramble[i - 1] == 'y' ||
                        scramble[i - 1] == 'z' ||
                        scramble[i - 1] == 'S'
                    ) {
                        lay[flag] = `1_${scramble[i - 1]}_1`;
                        lay[flag + 1] = `1_${scramble[i - 1]}_1`;
                        flag = flag + 2;
                    }
                }
                //IF THE MOVE IS 2 ROTATIONS ALONG ANY OF THE 6 FACES
                if (scramble[i] == '2') {
                    if (
                        scramble[i - 1] == 'L' ||
                        scramble[i - 1] == 'D' ||
                        scramble[i - 1] == 'B' ||
                        scramble[i - 1] == 'l' ||
                        scramble[i - 1] == 'd' ||
                        scramble[i - 1] == 'b' ||
                        scramble[i - 1] == 'M' ||
                        scramble[i - 1] == 'E'
                    ) {
                        lay[flag] = `-1_${scramble[i - 1]}_1`;
                        flag = flag + 1;
                    } else if (
                        scramble[i - 1] == 'F' ||
                        scramble[i - 1] == 'U' ||
                        scramble[i - 1] == 'R' ||
                        scramble[i - 1] == 'f' ||
                        scramble[i - 1] == 'u' ||
                        scramble[i - 1] == 'r' ||
                        scramble[i - 1] == 'x' ||
                        scramble[i - 1] == 'y' ||
                        scramble[i - 1] == 'z' ||
                        scramble[i - 1] == 'S'
                    ) {
                        lay[flag] = `1_${scramble[i - 1]}_1`;
                        flag = flag + 1;
                    }
                }
                //IF THE FIRST MOVE IS THE ANTICLOCKWISE ROTATION ALONG ANY OF THE 6 FACES
                if (scramble[0] == "'") {
                    console.log('imp', url[cube.length - 1]);
                    if (
                        url[cube.length - 1] == 'L' ||
                        url[cube.length - 1] == 'D' ||
                        url[cube.length - 1] == 'B' ||
                        url[cube.length - 1] == 'l' ||
                        url[cube.length - 1] == 'd' ||
                        url[cube.length - 1] == 'b' ||
                        url[cube.length - 1] == 'E' ||
                        url[cube.length - 1] == 'M'
                    ) {
                        lay[flag] = `-1_${url[cube.length - 1]}_1`;
                        lay[flag + 1] = `-1_${url[cube.length - 1]}_1`;
                        flag = flag + 2;
                    } else if (
                        url[cube.length - 1] == 'F' ||
                        url[cube.length - 1] == 'U' ||
                        url[cube.length - 1] == 'R' ||
                        url[cube.length - 1] == 'f' ||
                        url[cube.length - 1] == 'u' ||
                        url[cube.length - 1] == 'r' ||
                        url[cube.length - 1] == 'x' ||
                        url[cube.length - 1] == 'y' ||
                        url[cube.length - 1] == 'z' ||
                        url[cube.length - 1] == 'S'
                    ) {
                        lay[flag] = `1_${url[cube.length - 1]}_1`;
                        lay[flag + 1] = `1_${url[cube.length - 1]}_1`;
                        flag = flag + 2;
                    }
                }
                //IF THE FIRST MOVE IS 2 ROTATIONS ALONG ANY OF THE 6 FACES
                if (scramble[0] == '2') {
                    if (
                        url[cube.length - 1] == 'L' ||
                        url[cube.length - 1] == 'D' ||
                        url[cube.length - 1] == 'B' ||
                        url[cube.length - 1] == 'l' ||
                        url[cube.length - 1] == 'd' ||
                        url[cube.length - 1] == 'b' ||
                        url[cube.length - 1] == 'M' ||
                        url[cube.length - 1] == 'E'
                    ) {
                        lay[flag] = `-1_${url[cube.length - 1]}_1`;
                        flag = flag + 1;
                    } else if (
                        url[cube.length - 1] == 'F' ||
                        url[cube.length - 1] == 'U' ||
                        url[cube.length - 1] == 'R' ||
                        url[cube.length - 1] == 'f' ||
                        url[cube.length - 1] == 'u' ||
                        url[cube.length - 1] == 'r' ||
                        url[cube.length - 1] == 'x' ||
                        url[cube.length - 1] == 'y' ||
                        url[cube.length - 1] == 'z' ||
                        url[cube.length - 1] == 'S'
                    ) {
                        lay[flag] = `1_${url[cube.length - 1]}_1`;
                        flag = flag + 1;
                    }
                }
            }
        }
    }
    //console.log(lay);
    return lay;
}

export { scramble_read };
