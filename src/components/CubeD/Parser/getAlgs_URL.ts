
/**
 * Removes comments and '.' from raw alg string from URL 
 * (not for multiline comments)
 */
const getAlgs_URL = (solution: string): string => {
    var regex = /(\/\/).*?(\.)/g; // Whatever between '//' and '.' 
    var cmts = solution.replace(regex, ''); // removing comments
    var cmts2 = cmts.replace(/(\/\/).+/g, ''); // Removes comments between '//' and next line
    //Got only Algs from URL
    return cmts2;
};
export default getAlgs_URL;
