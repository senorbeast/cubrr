const getAlgs_URL = (solution: string): string => {
    var regex = /(\/\/).*?(\.)/g;
    var cmts = solution.replace(regex, "");
    var cmts2 = cmts.replace(/(\/\/).+/g, "");
    //Got only Algs
    return cmts2;
};
export default getAlgs_URL;
