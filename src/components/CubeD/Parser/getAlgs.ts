const getAlgs = (solution: string): string => {
    if (solution !== undefined) {
        var regex = /(\/\/).+/gm;
        var cmts = solution.replace(regex, '');
        var cmts2 = cmts.replace(/\./g, '');
        //Got only Algs
        return cmts2;
    }
    return '';
};
export default getAlgs;
