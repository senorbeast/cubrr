import validateAlg from "./validateAlg";

const getAlgCmtNum = (solution: string) => {
    var rpdots: string = solution.replace(/\./gm, "");
    var regex = /(\/\/).+/gm;
    var rpcmts: string = rpdots.replace(regex, "%v%");
    var withCmt = validateAlg(rpcmts)?.legalAlg;
    //console.log("Alg with Cmt ", withCmt);
    var middlestep = gotCmtNum(withCmt);
    console.log("Alg 1/2 processed", middlestep);
    return adjCmtNum(middlestep);
};
export default getAlgCmtNum;

const gotCmtNum = (Arr: any) => {
    //need to fix type to Array<string>
    var cmtNum: Array<number> = [];
    for (var i = 0; i < Arr.length; i++) {
        //Position of %v% gives size of array befor it
        if (Arr[i] == "%v%") {
            cmtNum.push(i);
        }
    }
    return cmtNum;
};

// TODO:Adjust gotCmtNum() Array to compenstate for length of "%v%" and length of prev section

const adjCmtNum = (numArr: Array<number>) => {
    var sum: number;
    var adjArr: Array<number> = [];
    for (var i = 0; i < numArr.length; i++) {
        //Position of %v% gives size of array befor it
        if (i == 0) {
            adjArr.push(numArr[i]);
        } else if (i > 0) {
            sum = +numArr[i - 1];
            adjArr.push(numArr[i] - sum - i);
        }
    }
    return adjArr;
};
