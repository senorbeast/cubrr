/**
 * Returns only the comment of one line of particular sol
 * 
 */
const cleanComments = (values: string) => {
    //TODO: Remove blank space at the start
    var slash = values.replace(/(\/\/)/g, ''); // Remove '//'
    return slash.replace(/\./g, ''); // Remove '.'
};


/**
 * Returns array of all the comments in solution of raw string
 * 
 */
const getComments = (solution: string): RegExpMatchArray => {
    var regex = /(\/\/).+/gm;
    var cmts = solution.match(regex); //gives Array of comments
    if (cmts !== null) {
        var cmts2: RegExpMatchArray = cmts.map(cleanComments); //Iterating with map to Clean the Comments
        return cmts2;
    }
    //var cmts = cmts.replace(/\/\/ /, "");
    //var cmtsArray = Array.from(cmts);
    //Got Comments

    return [];
};
export default getComments;
