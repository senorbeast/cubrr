//  var scramble = ["R","'","F","'","B","L","U"]
/**
   FUNCTION NAME : SCRAMBLE READ 
   DESC : THIS GIVES A FORMATTED ARRAY FOR THE MOVES ARRAY PASSED 
   INPUT PARAMETERS : moves  -  MOVES TBD IN ( string[] )  
                      url1 - MOVES TBD IN ( STRING )  
                      cube -  MOVES ALREADY DONE ON THE CUBE ( STRING )
                      but - 0- TBD IN NORMAL SEQUENCE 1- TBD IN REVERSE SEQUENCE
   OUTPUT PARAMETERS : LEGAL MOVES ARRAY ( FORMAT( -1/1_MOVES_1/2 ) : 1: - CLOCKWISE FOR ( F,R,U,X,Y,Z,S ), -1 : - CLOCKWISE FOR ( L,D,B,M,E ) , MOVES , NO.OF ROTATIONS ) 
   */
function scramble_read(
    moves: string[],
    but: number,
): string[] {
    var flag = 0;//USED TO KEEP TRACK HOW MANY MOVES HAVE BEEN EXECUTED ON THE CUBE
    //var ar = 0;
    var lay = [];
    var scramble = [];
    /***********USED FOR GENERATING ARRAY FOR INVERSING MOVES *************/
    if (but == 1) {
        scramble = moves.reverse();

        for (var i = 0; i < scramble.length; i++)
        {
            //CLOCKWISE MOVES ALONG R,F,U,x,y,z,S
            if 
            (
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
            ) 
            {
                lay[flag] = `-1_${scramble[i]}_1`;
                flag = flag + 1;
            }
            //CLOCKWISE MOVES ALONG B, L , D , M , E
            if 
            (
                scramble[i] == 'B' ||
                scramble[i] == 'b' ||
                scramble[i] == 'L' ||
                scramble[i] == 'l' ||
                scramble[i] == 'D' ||
                scramble[i] == 'd' ||
                scramble[i] == 'M' ||
                scramble[i] == 'E'
            ) 
            {
                lay[flag] = `1_${scramble[i]}_1`;
                flag = flag + 1;
            }
            //ANTI-CLOCKWISE MOVES ALONG R,F,U,x,y,z,S
            if
            ( 
                scramble[i] == "R'" ||
                scramble[i] == "r'" ||
                scramble[i] == "F'" ||
                scramble[i] == "f'" ||
                scramble[i] == "U'" ||
                scramble[i] == "u'" ||
                scramble[i] == "x'" ||
                scramble[i] == "y'" ||
                scramble[i] == "z'" ||
                scramble[i] == "S'" 
            )
            {
                if( scramble[ i ] == "R'" )
                {
                    scramble [ i ] = 'R';
                }
                if( scramble[ i ] == "r'" )
                {
                    scramble [ i ] = "r";
                }
                if( scramble[ i ] == "F'" )
                {
                    scramble [ i ] = "F";
                }
                if( scramble[ i ] == "f'" )
                {
                    scramble [ i ] = "f";
                }
                if( scramble[ i ] == "U'" )
                {
                    scramble [ i ] = "U";
                }
                if( scramble[ i ] == "u'" )
                {
                    scramble [ i ] = "u";
                }
                if( scramble[ i ] == "x'" )
                {
                    scramble [ i ] = "x";
                }
                if( scramble[ i ] == "y'" )
                {
                    scramble [ i ] = "y";
                }
                if( scramble[ i ] == "z'" )
                {
                    scramble [ i ] = "z";
                }
                if( scramble[ i ] == "S'" )
                {
                    scramble [ i ] = "S";
                }
                
                lay[flag] = `1_${scramble[i]}_1`;
                flag = flag + 1;
            }
            //ANTI-CLOCKWISE MOVES ALONG B, L , D , M , E
            if 
            (
                scramble[i] == "B'" ||
                scramble[i] == "b'" ||
                scramble[i] == "L'" ||
                scramble[i] == "l'" ||
                scramble[i] == "D'" ||
                scramble[i] == "d'" ||
                scramble[i] == "M'" ||
                scramble[i] == "E'"
            ) 
            {
                if( scramble[ i ] == "B'" )
                {
                    scramble [ i ] = 'B';
                }
                if( scramble[ i ] == "b'" )
                {
                    scramble [ i ] = "b";
                }
                if( scramble[ i ] == "L'" )
                {
                    scramble [ i ] = "L";
                }
                if( scramble[ i ] == "l'" )
                {
                    scramble [ i ] = "l";
                }
                if( scramble[ i ] == "D'" )
                {
                    scramble [ i ] = "d";
                }
                if( scramble[ i ] == "M'" )
                {
                    scramble [ i ] = "M";
                }
                if( scramble[ i ] == "E'" )
                {
                    scramble [ i ] = "E";
                }
                lay[flag] = `-1_${scramble[i]}_1`;
                flag = flag + 1;
            }
            //DOUBLE ROTATIONS ALONG R,F,U,x,y,z,S
            if
            ( 
                scramble[i] == "R2" ||
                scramble[i] == "r2" ||
                scramble[i] == "F2" ||
                scramble[i] == "f2" ||
                scramble[i] == "U2" ||
                scramble[i] == "u2" ||
                scramble[i] == "x2" ||
                scramble[i] == "y2" ||
                scramble[i] == "z2" ||
                scramble[i] == "S2" 
            )
            {
                if( scramble[ i ] == "R2" )
                {
                    scramble [ i ] = 'R';
                }
                if( scramble[ i ] == "r2" )
                {
                    scramble [ i ] = "r";
                }
                if( scramble[ i ] == "F2" )
                {
                    scramble [ i ] = "F";
                }
                if( scramble[ i ] == "f2" )
                {
                    scramble [ i ] = "f";
                }
                if( scramble[ i ] == "U2" )
                {
                    scramble [ i ] = "U";
                }
                if( scramble[ i ] == "u2" )
                {
                    scramble [ i ] = "u";
                }
                if( scramble[ i ] == "x2" )
                {
                    scramble [ i ] = "x";
                }
                if( scramble[ i ] == "y2" )
                {
                    scramble [ i ] = "y";
                }
                if( scramble[ i ] == "z2" )
                {
                    scramble [ i ] = "z";
                }
                if( scramble[ i ] == "S2" )
                {
                    scramble [ i ] = "S";
                }
                
                lay[flag] = `-1_${scramble[i]}_2`;
                flag = flag + 1;
            }
            //DOUBLE ROTATIONS ALONG B, L , D , M , E
            if 
            (
                scramble[i] == "B2" ||
                scramble[i] == "b2" ||
                scramble[i] == "L2" ||
                scramble[i] == "l2" ||
                scramble[i] == "D2" ||
                scramble[i] == "d2" ||
                scramble[i] == "M2" ||
                scramble[i] == "E2"
            ) 
            {
                if( scramble[ i ] == "B2" )
                {
                    scramble [ i ] = 'B';
                }
                if( scramble[ i ] == "b2" )
                {
                    scramble [ i ] = "b";
                }
                if( scramble[ i ] == "L2" )
                {
                    scramble [ i ] = "L";
                }
                if( scramble[ i ] == "l2" )
                {
                    scramble [ i ] = "l";
                }
                if( scramble[ i ] == "D2" )
                {
                    scramble [ i ] = "d";
                }
                if( scramble[ i ] == "M2" )
                {
                    scramble [ i ] = "M";
                }
                if( scramble[ i ] == "E2" )
                {
                    scramble [ i ] = "E";
                }
                lay[flag] = `-1_${scramble[i]}_2`;
                flag = flag + 1;
            }

        }
    }
    /***********USED FOR GENERATING ARRAY FOR LEGAL MOVES NORMAL SEQUENCE*************/
    if (but == 0) 
    {
        scramble = moves.slice();
        for (var i = 0; i < scramble.length; i++)
        {
            //CLOCKWISE MOVES ALONG R,F,U,x,y,z,S
            if 
            (
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
            ) 
            {
                lay[flag] = `1_${scramble[i]}_1`;
                flag = flag + 1;
            }
            //CLOCKWISE MOVES ALONG B, L , D , M , E
            if 
            (
                scramble[i] == 'B' ||
                scramble[i] == 'b' ||
                scramble[i] == 'L' ||
                scramble[i] == 'l' ||
                scramble[i] == 'D' ||
                scramble[i] == 'd' ||
                scramble[i] == 'M' ||
                scramble[i] == 'E'
            ) 
            {
                lay[flag] = `-1_${scramble[i]}_1`;
                flag = flag + 1;
            }
            //ANTI-CLOCKWISE MOVES ALONG R,F,U,x,y,z,S
            if
            ( 
                scramble[i] == "R'" ||
                scramble[i] == "r'" ||
                scramble[i] == "F'" ||
                scramble[i] == "f'" ||
                scramble[i] == "U'" ||
                scramble[i] == "u'" ||
                scramble[i] == "x'" ||
                scramble[i] == "y'" ||
                scramble[i] == "z'" ||
                scramble[i] == "S'" 
            )
            {
                if( scramble[ i ] == "R'" )
                {
                    scramble [ i ] = 'R';
                }
                if( scramble[ i ] == "r'" )
                {
                    scramble [ i ] = "r";
                }
                if( scramble[ i ] == "F'" )
                {
                    scramble [ i ] = "F";
                }
                if( scramble[ i ] == "f'" )
                {
                    scramble [ i ] = "f";
                }
                if( scramble[ i ] == "U'" )
                {
                    scramble [ i ] = "U";
                }
                if( scramble[ i ] == "u'" )
                {
                    scramble [ i ] = "u";
                }
                if( scramble[ i ] == "x'" )
                {
                    scramble [ i ] = "x";
                }
                if( scramble[ i ] == "y'" )
                {
                    scramble [ i ] = "y";
                }
                if( scramble[ i ] == "z'" )
                {
                    scramble [ i ] = "z";
                }
                if( scramble[ i ] == "S'" )
                {
                    scramble [ i ] = "S";
                }
                
                lay[flag] = `-1_${scramble[i]}_1`;
                flag = flag + 1;
            }
            //ANTI-CLOCKWISE MOVES ALONG B, L , D , M , E
            if 
            (
                scramble[i] == "B'" ||
                scramble[i] == "b'" ||
                scramble[i] == "L'" ||
                scramble[i] == "l'" ||
                scramble[i] == "D'" ||
                scramble[i] == "d'" ||
                scramble[i] == "M'" ||
                scramble[i] == "E'"
            ) 
            {
                if( scramble[ i ] == "B'" )
                {
                    scramble [ i ] = 'B';
                }
                if( scramble[ i ] == "b'" )
                {
                    scramble [ i ] = "b";
                }
                if( scramble[ i ] == "L'" )
                {
                    scramble [ i ] = "L";
                }
                if( scramble[ i ] == "l'" )
                {
                    scramble [ i ] = "l";
                }
                if( scramble[ i ] == "D'" )
                {
                    scramble [ i ] = "d";
                }
                if( scramble[ i ] == "M'" )
                {
                    scramble [ i ] = "M";
                }
                if( scramble[ i ] == "E'" )
                {
                    scramble [ i ] = "E";
                }
                lay[flag] = `1_${scramble[i]}_1`;
                flag = flag + 1;
            }
            //DOUBLE ROTATIONS ALONG R,F,U,x,y,z,S
            if
            ( 
                scramble[i] == "R2" ||
                scramble[i] == "r2" ||
                scramble[i] == "F2" ||
                scramble[i] == "f2" ||
                scramble[i] == "U2" ||
                scramble[i] == "u2" ||
                scramble[i] == "x2" ||
                scramble[i] == "y2" ||
                scramble[i] == "z2" ||
                scramble[i] == "S2" 
            )
            {
                if( scramble[ i ] == "R2" )
                {
                    scramble [ i ] = 'R';
                }
                if( scramble[ i ] == "r2" )
                {
                    scramble [ i ] = "r";
                }
                if( scramble[ i ] == "F2" )
                {
                    scramble [ i ] = "F";
                }
                if( scramble[ i ] == "f2" )
                {
                    scramble [ i ] = "f";
                }
                if( scramble[ i ] == "U2" )
                {
                    scramble [ i ] = "U";
                }
                if( scramble[ i ] == "u2" )
                {
                    scramble [ i ] = "u";
                }
                if( scramble[ i ] == "x2" )
                {
                    scramble [ i ] = "x";
                }
                if( scramble[ i ] == "y2" )
                {
                    scramble [ i ] = "y";
                }
                if( scramble[ i ] == "z2" )
                {
                    scramble [ i ] = "z";
                }
                if( scramble[ i ] == "S2" )
                {
                    scramble [ i ] = "S";
                }
                
                lay[flag] = `-1_${scramble[i]}_2`;
                flag = flag + 1;
            }
            //DOUBLE ROTATIONS ALONG B, L , D , M , E
            if 
            (
                scramble[i] == "B2" ||
                scramble[i] == "b2" ||
                scramble[i] == "L2" ||
                scramble[i] == "l2" ||
                scramble[i] == "D2" ||
                scramble[i] == "d2" ||
                scramble[i] == "M2" ||
                scramble[i] == "E2"
            ) 
            {
                if( scramble[ i ] == "B2" )
                {
                    scramble [ i ] = 'B';
                }
                if( scramble[ i ] == "b2" )
                {
                    scramble [ i ] = "b";
                }
                if( scramble[ i ] == "L2" )
                {
                    scramble [ i ] = "L";
                }
                if( scramble[ i ] == "l2" )
                {
                    scramble [ i ] = "l";
                }
                if( scramble[ i ] == "D2" )
                {
                    scramble [ i ] = "d";
                }
                if( scramble[ i ] == "M2" )
                {
                    scramble [ i ] = "M";
                }
                if( scramble[ i ] == "E2" )
                {
                    scramble [ i ] = "E";
                }
                lay[flag] = `-1_${scramble[i]}_2`;
                flag = flag + 1;
            }

        }
    
    }
    //console.log(lay);
    return lay;
}

export { scramble_read };
