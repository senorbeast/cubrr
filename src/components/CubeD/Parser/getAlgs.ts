/**
 * Removes comments and '.' from raw alg string,
 * 
 */
const getAlgs = (solution: string): string => {
    if (solution !== undefined) {
        var regex = /(\/\/).+/gm;
        var cmts = solution.replace(regex, ''); // Remove comments from text area
        var cmts2 = cmts.replace(/\./g, ''); // Remove '.'
        //Got only Algs
        return cmts2;
    }
    return '';
};
export default getAlgs;
