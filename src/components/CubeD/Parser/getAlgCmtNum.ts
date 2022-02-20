import validateAlg from './validateAlg';

/**
 * Gives Number of moves, before the current section of alg of raw string.  
 * Eg: x' y' //inspection
 *     R U R' // X cross
 * returns [0, 2]
 * 0 -> Moves before the inspection section
 * 2 -> Moves before the X cross section
 */    
const getAlgCmtNum = (solution: string): number[] => {
    var rpdots: string = solution.replace(/\./gm, '');
    var regex = /(\/\/).+/gm;
    var rpcmts: string = rpdots.replace(regex, '%v%'); //Replacing comments (of a text area) with "%v%"
    var withCmt = validateAlg(rpcmts)?.legalAlg; // Array of Valid Moves
    //console.log("Alg with Cmt ", withCmt);
    var middlestep = gotCmtNum(withCmt); // just an intermediate step
    //console.log("Alg 1/2 processed", middlestep); 
    return adjCmtNum(middlestep);
};

export default getAlgCmtNum;

const gotCmtNum = (Arr: any) => {
    //need to fix type to Array<string>
    var cmtNum: Array<number> = [];
    for (var i = 0; i < Arr.length; i++) {
        // As now %v% represents comment
        // Position of %v% gives Number of moves before it
        if (Arr[i] == '%v%') {
            cmtNum.push(i);
        }
    }
    return cmtNum;
};

// Adjust gotCmtNum() Array to compenstate for "%v%" in Valid move and give Move Num of prev section
// adjCmtNum -> Gives final adjusted cmt num
const adjCmtNum = (numArr: Array<number>) => {
    //var sum: number;
    var adjArr: Array<number> = [];
    for (var i = 0; i < numArr.length; i++) {
        if (i == 0) {
            adjArr.push(0);
        } else if (i > 0) {
            adjArr.push(numArr[i - 1] - i + 1);
        }
    }
    return adjArr;
};
