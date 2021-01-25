const getAlgs = (solution:string) => {
    var regex = /(\/\/).+/gm;
    var cmts = solution.replace(regex, "");
    var cmts2 = cmts.replace(/\./g, "");
    //Got only Algs
    return cmts2;
};
export default getAlgs;
