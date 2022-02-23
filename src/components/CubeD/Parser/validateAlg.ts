interface VTypes {
    legalAlg: string[];
    IvldTest: boolean;
    movesNum: number;
}
// Normalize diff types of prime/dash notation to '
const formatAlg = (algs: string) => {
    var primer = /( '| "| `|'|"|`)/gm;
    var primed = algs.replace(primer, "'");
    return primed;
};
// Invalid test. (if alg string has invalid move)
const invalidAlg = (algs: string) => {
    var ivd = /[^RLUDF B'`"2rludfbxyzMSE\\r\\n↵.]/gm;
    // ^ negate sign So ivd sequence is there then its invalid
    // To allow comments to be empty add // above and escape it .
    //TODO: Not Working for next line
    return ivd.test(algs);
};

/**
 * Validate Algs of getAlgs()
 * Do not pass Alg string with comments!!
 * Normalizes the prime/dash notation to '
 * returns:
 * validateAlgs().legalAlg -> Gives Array of legal Moves ( removes invalid moves )
 * validateAlgs().IvldTest -> Boolean ( True repr Invalid Moves are present )
 * validateAlgs().movesNum -> Number of legal Moves in alg.
 */
const validateAlgs = (algs: string): VTypes => {
    // Only Alg String must be passed ( Validate after using getAlgs)
    // Do not pass Alg string with comments!!
    var formatted = formatAlg(algs);
    //!Doesnt Check for U2'
    //* Kept %v% as a marker for Comment (currently used only in getAlgCmtNum())
    var legal = /(R'|L'|U'|D'|F'|B'|R2|L2|U2|D2|F2|B2|R|L|U|D|F|B|r'|l'|u'|d'|f'|b'|r2|l2|u2|d2|f2|b2|r|l|u|d|f|b|x'|y'|z'|x2|y2|z2|x|y|z|M2|S2|E2|M'|S'|E'|M|S|E|%v%)/gm;
    var legalAlg: Array<string> = formatted.match(legal) || [];
    var IvldTest = invalidAlg(formatted);
    //console.log("Validity Test", formatted);
    //TODO: Handelling only ' and only 2 moves
    //TODO: Handelling Commutators, the whole inverse type of moves
    var movesNum = legalAlg.length;
    //console.log(legalAlg)
    //Returns Legal Moves and Invalid Flag
    return { legalAlg, IvldTest, movesNum };
};

export default validateAlgs;
